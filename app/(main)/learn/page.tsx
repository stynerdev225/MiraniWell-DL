import { Suspense } from "react";

import { redirect } from "next/navigation";

import { FeedWrapper } from "@/components/feed-wrapper";
import { LunaCompanion } from "@/components/luna-companion";
import { Promo } from "@/components/promo";
import { Quests } from "@/components/quests";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { UserProgress } from "@/components/user-progress";
import {
  getCourseProgress,
  getLessonPercentage,
  getUnits,
  getUserProgress,
  getUserSubscription,
} from "@/db/queries";

import { Header } from "./header";
import { WellnessUnit } from "./wellness-unit";

// Loading skeleton components
const LoadingSkeleton = () => (
  <div className="flex flex-row-reverse gap-[48px] px-6">
    <StickyWrapper>
      <div className="animate-pulse bg-gray-200 h-32 rounded-lg mb-4" />
      <div className="animate-pulse bg-gray-200 h-24 rounded-lg mb-4" />
      <div className="animate-pulse bg-gray-200 h-16 rounded-lg" />
    </StickyWrapper>
    <FeedWrapper>
      <div className="animate-pulse bg-gray-200 h-12 rounded-lg mb-6" />
      <div className="space-y-4">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="animate-pulse bg-gray-200 h-48 rounded-lg" />
        ))}
      </div>
    </FeedWrapper>
  </div>
);

const LearnPage = async () => {
  try {
    const [
      userProgress,
      units,
      courseProgress,
      lessonPercentage,
      userSubscription,
    ] = await Promise.all([
      getUserProgress(),
      getUnits(),
      getCourseProgress(),
      getLessonPercentage(),
      getUserSubscription(),
    ]);

    if (!courseProgress || !userProgress || !userProgress.activeCourse)
      redirect("/courses");

    const isPro = !!userSubscription?.isActive;

    return (
      <Suspense fallback={<LoadingSkeleton />}>
        <div className="flex flex-row-reverse gap-[48px] px-6">
          <StickyWrapper>
            <UserProgress
              activeCourse={userProgress.activeCourse}
              hearts={userProgress.hearts}
              points={userProgress.points}
              hasActiveSubscription={isPro}
            />

            {!isPro && <Promo />}
            <Quests points={userProgress?.points || 0} />
          </StickyWrapper>
          <FeedWrapper>
            <Header title="Your Wellness Journey with Luna" />
            <LunaCompanion />
            {units.map((unit) => (
              <div key={unit.id} className="mb-10">
                <WellnessUnit
                  id={unit.id}
                  order={unit.order}
                  description={unit.description}
                  title={unit.title}
                  lessons={unit.lessons}
                  activeLesson={
                    courseProgress.activeLesson
                      ? {
                        ...courseProgress.activeLesson,
                        challenges: courseProgress.activeLesson.challenges.flatMap((challenge) =>
                          Array.isArray(challenge.challengeProgress) ? challenge.challengeProgress : []
                        ),
                      }
                      : undefined
                  }
                  activeLessonPercentage={lessonPercentage}
                />
              </div>
            ))}
          </FeedWrapper>
        </div>
      </Suspense>
    );
  } catch (error) {
    console.error('Learn page error:', error);
    redirect("/courses");
  }
};

export default LearnPage;
