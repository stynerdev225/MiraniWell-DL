"use server";

import { auth, currentUser } from "@clerk/nextjs/server";
import Database from "better-sqlite3";
import { and, eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/better-sqlite3";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { MAX_HEARTS, POINTS_TO_REFILL } from "@/constants";
import {
  getCourseById,
  getUserProgress,
  getUserSubscription,
} from "@/db/queries";
import * as schema from "@/db/schema-sqlite";

const sqlite = new Database("./local.db");
const db = drizzle(sqlite, { schema });

const { challengeProgress, challenges, userProgress } = schema;

export const upsertUserProgress = async (courseId: number) => {
  const { userId } = await auth();
  const user = await currentUser();

  if (!userId || !user) throw new Error("Unauthorized.");

  const course = await getCourseById(courseId);

  if (!course) throw new Error("Course not found.");

  if (!course.units.length || !course.units[0].lessons.length)
    throw new Error("Course is empty.");

  const existingUserProgress = await getUserProgress();

  if (existingUserProgress) {
    await db
      .update(userProgress)
      .set({
        activeCourseId: courseId,
        userName: user.firstName || "User",
        userImageSrc: user.imageUrl || "/mascot.svg",
      })
      .where(eq(userProgress.userId, userId));

    revalidatePath("/courses");
    revalidatePath("/learn");
    redirect("/learn");
  }

  await db.insert(userProgress).values({
    userId,
    activeCourseId: courseId,
    userName: user.firstName || "User",
    userImageSrc: user.imageUrl || "/mascot.svg",
  });

  revalidatePath("/courses");
  revalidatePath("/learn");
  redirect("/learn");
};

export const reduceHearts = async (challengeId: number) => {
  const { userId } = await auth();

  if (!userId) throw new Error("Unauthorized.");

  const currentUserProgress = await getUserProgress();
  const userSubscription = await getUserSubscription();

  const challenge = await db.query.challenges.findFirst({
    where: eq(challenges.id, challengeId),
  });

  if (!challenge) throw new Error("Challenge not found.");

  const lessonId = challenge.lessonId;

  const existingChallengeProgress = await db.query.challengeProgress.findFirst({
    where: and(
      eq(challengeProgress.userId, userId),
      eq(challengeProgress.challengeId, challengeId)
    ),
  });

  const isPractice = !!existingChallengeProgress;

  if (isPractice) return { error: "practice" };

  if (!currentUserProgress) throw new Error("User progress not found.");

  if (userSubscription?.isActive) return { error: "subscription" };

  if (currentUserProgress.hearts === 0) return { error: "hearts" };

  await db
    .update(userProgress)
    .set({
      hearts: Math.max(currentUserProgress.hearts - 1, 0),
    })
    .where(eq(userProgress.userId, userId));

  revalidatePath("/shop");
  revalidatePath("/learn");
  revalidatePath("/quests");
  revalidatePath("/leaderboard");
  revalidatePath(`/lesson/${lessonId}`);
};

export const refillHearts = async () => {
  const currentUserProgress = await getUserProgress();

  if (!currentUserProgress) throw new Error("User progress not found.");
  if (currentUserProgress.hearts === MAX_HEARTS)
    throw new Error("Hearts are already full.");
  if (currentUserProgress.points < POINTS_TO_REFILL)
    throw new Error("Not enough points.");

  await db
    .update(userProgress)
    .set({
      hearts: MAX_HEARTS,
      points: currentUserProgress.points - POINTS_TO_REFILL,
    })
    .where(eq(userProgress.userId, currentUserProgress.userId));

  revalidatePath("/shop");
  revalidatePath("/learn");
  revalidatePath("/quests");
  revalidatePath("/leaderboard");
};
