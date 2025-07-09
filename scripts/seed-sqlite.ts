import Database from "better-sqlite3";
import "dotenv/config";
import { drizzle } from "drizzle-orm/better-sqlite3";

import * as schema from "@/db/schema";

const sqlite = new Database(process.env.DATABASE_URL?.replace("file:", "") || "./local.db");
const db = drizzle(sqlite, { schema });

const main = async () => {
  try {
    console.log("Seeding database");

    // Delete all existing data
    await Promise.all([
      db.delete(schema.userProgress),
      db.delete(schema.challengeProgress),
      db.delete(schema.challengeOptions),
      db.delete(schema.challenges),
      db.delete(schema.lessons),
      db.delete(schema.units),
      db.delete(schema.courses),
      db.delete(schema.userSubscription),
    ]);

    // Insert courses
    const courses = await db
      .insert(schema.courses)
      .values([
        { title: "Spanish", imageSrc: "/es.svg" },
        { title: "French", imageSrc: "/fr.svg" },
        { title: "Croatian", imageSrc: "/hr.svg" },
        { title: "Italian", imageSrc: "/it.svg" },
        { title: "Japanese", imageSrc: "/jp.svg" },
      ])
      .returning();

    // For each course, insert units
    for (const course of courses) {
      const units = await db
        .insert(schema.units)
        .values([
          {
            courseId: course.id,
            title: "Unit 1",
            description: `Learn the basics of ${course.title}`,
            order: 1,
          },
          {
            courseId: course.id,
            title: "Unit 2",
            description: `Learn intermediate ${course.title}`,
            order: 2,
          },
        ])
        .returning();

      // For each unit, insert lessons
      for (const unit of units) {
        const lessons = await db
          .insert(schema.lessons)
          .values([
            { unitId: unit.id, title: "Nouns", order: 1 },
            { unitId: unit.id, title: "Verbs", order: 2 },
            { unitId: unit.id, title: "Adjectives", order: 3 },
            { unitId: unit.id, title: "Phrases", order: 4 },
            { unitId: unit.id, title: "Sentences", order: 5 },
          ])
          .returning();

        // For each lesson, insert challenges
        for (const lesson of lessons) {
          const challenges = await db
            .insert(schema.challenges)
            .values([
              {
                lessonId: lesson.id,
                type: "SELECT",
                question: 'Which one of these is "the man"?',
                order: 1,
              },
              {
                lessonId: lesson.id,
                type: "ASSIST",
                question: '"the man"',
                order: 2,
              },
              {
                lessonId: lesson.id,
                type: "SELECT",
                question: 'Which one of these is "the robot"?',
                order: 3,
              },
              {
                lessonId: lesson.id,
                type: "ASSIST",
                question: '"the robot"',
                order: 4,
              },
              {
                lessonId: lesson.id,
                type: "SELECT",
                question: 'Which one of these is "the girl"?',
                order: 5,
              },
              {
                lessonId: lesson.id,
                type: "ASSIST",
                question: '"the girl"',
                order: 6,
              },
              {
                lessonId: lesson.id,
                type: "SELECT",
                question: 'Which one of these is "the zombie"?',
                order: 7,
              },
              {
                lessonId: lesson.id,
                type: "ASSIST",
                question: '"the zombie"',
                order: 8,
              },
            ])
            .returning();

          // For each challenge, insert challenge options
          for (const challenge of challenges) {
            if (challenge.type === "SELECT") {
              await db.insert(schema.challengeOptions).values([
                {
                  challengeId: challenge.id,
                  correct: true,
                  text: "el hombre",
                  imageSrc: "/man.svg",
                  audioSrc: "/es_man.mp3",
                },
                {
                  challengeId: challenge.id,
                  correct: false,
                  text: "la mujer",
                  imageSrc: "/woman.svg",
                  audioSrc: "/es_woman.mp3",
                },
                {
                  challengeId: challenge.id,
                  correct: false,
                  text: "el robot",
                  imageSrc: "/robot.svg",
                  audioSrc: "/es_robot.mp3",
                },
              ]);
            }

            if (challenge.type === "ASSIST") {
              await db.insert(schema.challengeOptions).values([
                {
                  challengeId: challenge.id,
                  correct: false,
                  text: "el",
                },
                {
                  challengeId: challenge.id,
                  correct: true,
                  text: "hombre",
                },
                {
                  challengeId: challenge.id,
                  correct: false,
                  text: "mujer",
                },
              ]);
            }
          }
        }
      }
    }

    console.log("Database seeded successfully");
  } catch (error) {
    console.error(error);
    throw new Error("Failed to seed database");
  }
};

main().catch(console.error);
