import Database from "better-sqlite3";
import { drizzle } from "drizzle-orm/better-sqlite3";
import "dotenv/config";

import * as schema from "../db/schema-sqlite";

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
            title: "💧 Water Element - Emotional Healing & Flow",
            description: "Learn emotional cleansing and flow practices for deep emotional wellness and healing",
            order: 2,
          },
          {
            courseId: course.id,
            title: "🔥 Fire Element - Energy & Transformation",
            description: "Harness passion and energy for personal transformation, motivation, and inner power",
            order: 3,
          },
          {
            courseId: course.id,
            title: "💨 Air Element - Mental Clarity & Breathwork",
            description: "Develop breathwork and meditation for mental clarity, communication, and spiritual connection",
            order: 4,
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
              title: unit.order === 1 ? "Introduction to Earth Grounding" : 
                     unit.order === 2 ? "Understanding Water & Emotions" :
                     unit.order === 3 ? "Awakening Your Inner Fire" :
                     "Connecting with Air & Breath",
              order: 1,
            },
            {
              unitId: unit.id,
              title: unit.order === 1 ? "Earth Grounding Exercises" : 
                     unit.order === 2 ? "Water Emotional Cleansing" :
                     unit.order === 3 ? "Fire Energy Building" :
                     "Air Breathing & Meditation",
              order: 2,
            },
            {
              unitId: unit.id,
              title: unit.order === 1 ? "Earth Stability & Manifestation" : 
                     unit.order === 2 ? "Water Flow State Mastery" :
                     unit.order === 3 ? "Fire Transformation Rituals" :
                     "Air Mental Clarity & Focus",
              order: 3,
            },
            {
              unitId: unit.id,
              title: unit.order === 1 ? "Earth Wisdom & Integration" : 
                     unit.order === 2 ? "Water Advanced Emotional Alchemy" :
                     unit.order === 3 ? "Fire Passion & Life Purpose" :
                     "Air Communication & Spiritual Connection",
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
    1: { // 🌱 Earth Element - Grounding & Stability
      1: ["What is the primary benefit of earth grounding?", "How do you connect with earth's stability?", "What grounds you to the present moment?"],
      2: ["What is a powerful earth grounding technique?", "How do you practice earth connection?", "What helps you feel rooted and stable?"],
      3: ["What supports earth-based manifestation?", "How do you build lasting stability?", "What creates solid foundations in life?"],
      4: ["How do you integrate earth wisdom?", "What is earth's greatest teaching?", "How do you embody earthly groundedness?"],
    },
    2: { // 💧 Water Element - Emotional Healing & Flow
      1: ["What does water teach about emotions?", "How does water element heal?", "What is emotional fluidity?"],
      2: ["What is water's cleansing power?", "How do you practice emotional flow?", "What helps release stuck emotions?"],
      3: ["What is water's flow state?", "How do you master emotional currents?", "What creates emotional harmony?"],
      4: ["What is emotional alchemy?", "How do you transform emotions like water?", "What is water's deepest wisdom?"],
    },
    3: { // 🔥 Fire Element - Energy & Transformation
      1: ["What is fire's transformative power?", "How does fire element energize?", "What ignites your inner flame?"],
      2: ["How do you build fire energy?", "What fuels your inner fire?", "How do you kindle motivation?"],
      3: ["What are fire transformation rituals?", "How does fire facilitate change?", "What supports fiery growth?"],
      4: ["How do you embody fire's passion?", "What is fire's gift to purpose?", "How do you live with fiery authenticity?"],
    },
    4: { // 💨 Air Element - Mental Clarity & Breathwork
      1: ["What is air's gift to the mind?", "How does breath create clarity?", "What is mindful breathing?"],
      2: ["How does air support meditation?", "What is breath-centered practice?", "How do you cultivate mental calm?"],
      3: ["What creates air-like mental clarity?", "How do you focus like the wind?", "What supports clear thinking?"],
      4: ["How does air enhance communication?", "What is breath-supported expression?", "How do you speak with air's clarity?"],
    },
  };

  return questions[unitOrder as keyof typeof questions]?.[lessonOrder as keyof typeof questions[1]]?.[challengeOrder - 1] || "What supports your elemental wellness journey?";
}

function getCorrectAnswer(unitOrder: number, lessonOrder: number, challengeOrder: number): string {
  const answers = {
    1: { // 🌱 Earth Element - Grounding & Stability  
      1: ["Deep rootedness and inner stability", "Physical connection to earth's energy", "Present moment awareness through grounding"],
      2: ["Barefoot walking on natural earth", "Meditation sitting on the ground", "Tree hugging and earth connection"],
      3: ["Earth's steady, consistent energy", "Building foundations before growing", "Patient, deliberate manifestation"],
      4: ["Embodying earth's patience and wisdom", "Staying grounded through all seasons", "Being a stable presence for others"],
    },
    2: { // 💧 Water Element - Emotional Healing & Flow
      1: ["Emotions flow and change naturally", "Water cleanses and purifies", "Adaptability and emotional fluidity"],
      2: ["Sacred water cleansing ceremonies", "Letting emotions flow like rivers", "Release through tears and movement"],
      3: ["Moving with life's natural rhythms", "Emotional adaptability and grace", "Finding peace in constant change"],
      4: ["Transforming pain into wisdom", "Emotional mastery through flow", "Water's teaching of surrender"],
    },
    3: { // 🔥 Fire Element - Energy & Transformation
      1: ["Fire transforms everything it touches", "Inner flame ignites motivation", "Passionate energy creates change"],
      2: ["Movement and physical activation", "Connecting with your life passion", "Solar energy and fire meditation"],
      3: ["Sacred fire ceremonies for release", "Burning away what no longer serves", "Phoenix-like transformation"],
      4: ["Living with passionate purpose", "Fire's gift of authentic expression", "Radiating your inner light"],
    },
    4: { // 💨 Air Element - Mental Clarity & Breathwork
      1: ["Breath brings clarity and focus", "Air connects mind and spirit", "Conscious breathing calms the mind"],
      2: ["Breath-centered meditation practice", "Pranayama and breathing techniques", "Air's gift of mental spaciousness"],
      3: ["Wind-like mental flexibility", "Clear thoughts like fresh air", "Mental clarity through breathwork"],
      4: ["Breath-supported authentic speaking", "Air's gift of true communication", "Speaking from the heart with clarity"],
    },
  };

  return answers[unitOrder as keyof typeof answers]?.[lessonOrder as keyof typeof answers[1]]?.[challengeOrder - 1] || "Consistent elemental practice and awareness";
}

function getIncorrectAnswer(unitOrder: number, lessonOrder: number, challengeOrder: number, option: number): string {
  const wrongAnswers = [
    "Ignoring the natural elements",
    "Forcing outcomes instead of flowing",
    "Avoiding emotional connection",
    "Rushing through practices",
    "Skipping elemental connection",
    "Focusing only on one element", 
    "Avoiding transformation work",
    "Neglecting breath awareness",
    "Comparing your elemental journey",
    "Expecting instant mastery",
  ];

  return wrongAnswers[(unitOrder + lessonOrder + challengeOrder + option) % wrongAnswers.length];
}

main().catch((error) => {
  console.error("Database seeding failed:", error);
  process.exit(1);
});
