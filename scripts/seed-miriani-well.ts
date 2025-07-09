import Database from "better-sqlite3";
import { drizzle } from "drizzle-orm/better-sqlite3";
import "dotenv/config";

import * as schema from "@/db/schema";

const sqlite = new Database(process.env.DATABASE_URL?.replace("file:", "") || "./local.db");
const db = drizzle(sqlite, { schema });

const main = async () => {
  try {
    console.log("Seeding Miriani Well wellness database...");

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

    // Insert Miriani Well wellness courses in different languages
    const courses = await db
      .insert(schema.courses)
      .values([
        { title: "Wellness Foundation (English)", imageSrc: "/lang.svg" },
        { title: "Fundamentos de Bienestar (Español)", imageSrc: "/es.svg" },
        { title: "Fondements du Bien-être (Français)", imageSrc: "/fr.svg" },
        { title: "Wellnes Grundlagen (Deutsch)", imageSrc: "/lang.svg" },
        { title: "Fondamenti del Benessere (Italiano)", imageSrc: "/it.svg" },
      ])
      .returning();

    // For each course, insert wellness-focused units
    for (const course of courses) {
      const units = await db
        .insert(schema.units)
        .values([
          {
            courseId: course.id,
            title: "🌱 Earth Element - Grounding & Stability",
            description: "Master grounding techniques and build life stability through earth-based wellness practices",
            order: 1,
          },
          {
            courseId: course.id,
            title: "💧 Water Element - Emotional Healing",
            description: "Learn emotional cleansing and flow practices for emotional wellness",
            order: 2,
          },
          {
            courseId: course.id,
            title: "🔥 Fire Element - Energy & Transformation",
            description: "Harness passion and energy for personal transformation and motivation",
            order: 3,
          },
          {
            courseId: course.id,
            title: "💨 Air Element - Mental Clarity",
            description: "Develop breathwork and meditation for mental clarity and communication",
            order: 4,
          },
          {
            courseId: course.id,
            title: "🤖 Luna AI Companion Integration",
            description: "Learn to work with Luna AI for personalized wellness guidance",
            order: 5,
          },
        ])
        .returning();

      // For each unit, insert wellness lessons
      for (const unit of units) {
        const lessons = await db
          .insert(schema.lessons)
          .values([
            {
              unitId: unit.id,
              title: unit.order === 1 ? "Introduction to Grounding" : 
                     unit.order === 2 ? "Understanding Emotions" :
                     unit.order === 3 ? "Energy Awareness" :
                     unit.order === 4 ? "Breath as Foundation" :
                     "Meeting Luna AI",
              order: 1,
            },
            {
              unitId: unit.id,
              title: unit.order === 1 ? "Basic Grounding Exercises" : 
                     unit.order === 2 ? "Emotional Cleansing Rituals" :
                     unit.order === 3 ? "Motivation Building" :
                     unit.order === 4 ? "Basic Meditation" :
                     "Personalized Wellness Plans",
              order: 2,
            },
            {
              unitId: unit.id,
              title: unit.order === 1 ? "Stability Practices" : 
                     unit.order === 2 ? "Flow State Techniques" :
                     unit.order === 3 ? "Transformation Rituals" :
                     unit.order === 4 ? "Mental Clarity Exercises" :
                     "AI-Guided Reflection",
              order: 3,
            },
            {
              unitId: unit.id,
              title: unit.order === 1 ? "Manifestation Basics" : 
                     unit.order === 2 ? "Advanced Emotional Work" :
                     unit.order === 3 ? "Passion & Purpose" :
                     unit.order === 4 ? "Communication Enhancement" :
                     "Progress Tracking with Luna",
              order: 4,
            },
          ])
          .returning();

        // For each lesson, insert wellness challenges
        for (const lesson of lessons) {
          const challenges = await db
            .insert(schema.challenges)
            .values([
              {
                lessonId: lesson.id,
                type: "SELECT",
                order: 1,
                question: getWellnessQuestion(unit.order, lesson.order, 1),
              },
              {
                lessonId: lesson.id,
                type: "ASSIST",
                order: 2,
                question: getWellnessQuestion(unit.order, lesson.order, 2),
              },
              {
                lessonId: lesson.id,
                type: "SELECT",
                order: 3,
                question: getWellnessQuestion(unit.order, lesson.order, 3),
              },
            ])
            .returning();

          // For each challenge, insert options
          for (const challenge of challenges) {
            if (challenge.type === "SELECT") {
              await db.insert(schema.challengeOptions).values([
                {
                  challengeId: challenge.id,
                  imageSrc: "/boy.svg",
                  correct: true,
                  text: getCorrectAnswer(unit.order, lesson.order, challenge.order),
                  audioSrc: "/es_boy.mp3",
                },
                {
                  challengeId: challenge.id,
                  imageSrc: "/girl.svg",
                  correct: false,
                  text: getIncorrectAnswer(unit.order, lesson.order, challenge.order, 1),
                  audioSrc: "/es_girl.mp3",
                },
                {
                  challengeId: challenge.id,
                  imageSrc: "/man.svg",
                  correct: false,
                  text: getIncorrectAnswer(unit.order, lesson.order, challenge.order, 2),
                  audioSrc: "/es_man.mp3",
                },
              ]);
            }

            if (challenge.type === "ASSIST") {
              await db.insert(schema.challengeOptions).values([
                {
                  challengeId: challenge.id,
                  correct: true,
                  text: getCorrectAnswer(unit.order, lesson.order, challenge.order),
                },
                {
                  challengeId: challenge.id,
                  correct: false,
                  text: getIncorrectAnswer(unit.order, lesson.order, challenge.order, 1),
                },
                {
                  challengeId: challenge.id,
                  correct: false,
                  text: getIncorrectAnswer(unit.order, lesson.order, challenge.order, 2),
                },
              ]);
            }
          }
        }
      }
    }

    console.log("✅ Miriani Well wellness database seeded successfully!");
  } catch (error) {
    console.error("❌ Error seeding database:", error);
    throw error;
  }
};

// Helper functions for wellness content
function getWellnessQuestion(unitOrder: number, lessonOrder: number, challengeOrder: number): string {
  const questions = {
    1: { // Earth Element
      1: ["What is the primary benefit of grounding exercises?", "Which practice helps with stability?", "How do you connect with earth energy?"],
      2: ["What is a basic grounding technique?", "How long should you practice grounding?", "What helps you feel more stable?"],
      3: ["What supports emotional stability?", "Which practice builds resilience?", "How do you maintain balance?"],
      4: ["What is the foundation of manifestation?", "How do you set clear intentions?", "What supports goal achievement?"],
    },
    2: { // Water Element
      1: ["What does emotional cleansing involve?", "How do you process emotions healthily?", "What helps with emotional flow?"],
      2: ["What is an emotional cleansing ritual?", "How do you release negative emotions?", "What supports emotional healing?"],
      3: ["What is flow state?", "How do you achieve emotional balance?", "What helps with adaptability?"],
      4: ["What is advanced emotional work?", "How do you transform emotions?", "What supports deep healing?"],
    },
    3: { // Fire Element
      1: ["What is energy awareness?", "How do you recognize your energy levels?", "What affects your vitality?"],
      2: ["What builds motivation?", "How do you increase energy?", "What supports personal power?"],
      3: ["What is a transformation ritual?", "How do you facilitate change?", "What supports growth?"],
      4: ["How do you discover your passion?", "What connects you to purpose?", "How do you live authentically?"],
    },
    4: { // Air Element
      1: ["What is the foundation of breathwork?", "How does breathing affect wellness?", "What is mindful breathing?"],
      2: ["What is basic meditation?", "How do you start meditating?", "What supports mental calm?"],
      3: ["What creates mental clarity?", "How do you focus your mind?", "What supports clear thinking?"],
      4: ["What enhances communication?", "How do you express yourself clearly?", "What supports authentic expression?"],
    },
    5: { // Luna AI
      1: ["What is Luna AI?", "How does Luna support wellness?", "What makes Luna unique?"],
      2: ["How do you create a wellness plan?", "What should be included in your plan?", "How do you track progress?"],
      3: ["What is AI-guided reflection?", "How does Luna help with insights?", "What supports self-awareness?"],
      4: ["How do you track wellness progress?", "What metrics matter most?", "How do you stay motivated?"],
    },
  };

  return questions[unitOrder as keyof typeof questions]?.[lessonOrder as keyof typeof questions[1]]?.[challengeOrder - 1] || "What supports your wellness journey?";
}

function getCorrectAnswer(unitOrder: number, lessonOrder: number, challengeOrder: number): string {
  const answers = {
    1: { // Earth Element
      1: ["Feeling more grounded and stable", "Deep breathing and connection to earth", "Placing feet on the ground mindfully"],
      2: ["Standing barefoot on grass or soil", "5-10 minutes daily", "Regular grounding practice"],
      3: ["Consistent daily routines", "Grounding and stability exercises", "Mindful connection to earth"],
      4: ["Clear, focused intention", "Writing down specific goals", "Belief in your ability to achieve"],
    },
    2: { // Water Element
      1: ["Releasing stored emotions safely", "Allowing emotions to flow naturally", "Emotional acceptance and processing"],
      2: ["Journaling and releasing ceremony", "Breathwork and movement", "Meditation and reflection"],
      3: ["Being present with emotions", "Emotional flexibility and adaptation", "Acceptance of change"],
      4: ["Shadow work and integration", "Emotional pattern recognition", "Deep trauma healing"],
    },
    3: { // Fire Element
      1: ["Noticing energy fluctuations", "Recognizing what drains or energizes", "Body awareness and vitality"],
      2: ["Setting inspiring goals", "Physical movement and exercise", "Connecting with passion"],
      3: ["Ritual for releasing old patterns", "Conscious change and growth", "Embracing transformation"],
      4: ["Following what lights you up", "Aligning with your values", "Living true to yourself"],
    },
    4: { // Air Element
      1: ["Conscious, intentional breathing", "Breath as life force energy", "Awareness of breath patterns"],
      2: ["Focusing on breath or mantra", "5-10 minutes of quiet sitting", "Consistent daily practice"],
      3: ["Meditation and mindfulness", "Reducing mental clutter", "Present moment awareness"],
      4: ["Speaking from the heart", "Listening actively to others", "Authentic self-expression"],
    },
    5: { // Luna AI
      1: ["Your AI wellness companion", "Personalized guidance and support", "Available 24/7 for wellness help"],
      2: ["Goals, practices, and tracking", "Personalized to your needs", "Regular check-ins and adjustments"],
      3: ["AI-powered self-discovery", "Pattern recognition and insights", "Guided questions and reflection"],
      4: ["Regular wellness metrics", "Mood, energy, and growth", "Celebrating progress and milestones"],
    },
  };

  return answers[unitOrder as keyof typeof answers]?.[lessonOrder as keyof typeof answers[1]]?.[challengeOrder - 1] || "Consistent practice and self-awareness";
}

function getIncorrectAnswer(unitOrder: number, lessonOrder: number, challengeOrder: number, option: number): string {
  const wrongAnswers = [
    "Ignoring your feelings completely",
    "Avoiding all self-reflection",
    "Expecting instant results",
    "Comparing yourself to others",
    "Skipping regular practice",
    "Focusing only on problems",
    "Rushing through exercises",
    "Avoiding emotional work",
    "Neglecting physical wellness",
    "Ignoring your intuition",
  ];

  return wrongAnswers[(unitOrder + lessonOrder + challengeOrder + option) % wrongAnswers.length];
}

main().catch((error) => {
  console.error("Database seeding failed:", error);
  process.exit(1);
});
