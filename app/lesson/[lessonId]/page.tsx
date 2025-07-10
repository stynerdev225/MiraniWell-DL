import { redirect } from "next/navigation";

import { Quiz } from "../quiz";

type LessonIdPageProps = {
  params: {
    lessonId: number;
  };
};

// Mock data for lessons and challenges
const mockLessons = {
  1: {
    id: 1,
    title: "Introduction to Earth Grounding",
    challenges: [
      {
        id: 1,
        order: 1,
        lessonId: 1,
        question: "What is the primary purpose of earth grounding?",
        type: "SELECT" as const,
        completed: false,
        challengeOptions: [
          { id: 1, text: "To connect with the earth's stable energy", imageSrc: "/boy.svg", challengeId: 1, correct: true, audioSrc: null },
          { id: 2, text: "To lose weight quickly", imageSrc: "/girl.svg", challengeId: 1, correct: false, audioSrc: null },
          { id: 3, text: "To sleep better at night", imageSrc: "/man.svg", challengeId: 1, correct: false, audioSrc: null },
          { id: 4, text: "To become famous", imageSrc: "/woman.svg", challengeId: 1, correct: false, audioSrc: null },
        ],
      },
      {
        id: 2,
        order: 2,
        lessonId: 1,
        question: "Which element represents grounding and stability?",
        type: "SELECT" as const,
        completed: false,
        challengeOptions: [
          { id: 5, text: "Earth", imageSrc: "/face-1.svg", challengeId: 2, correct: true, audioSrc: null },
          { id: 6, text: "Fire", imageSrc: "/face-2.svg", challengeId: 2, correct: false, audioSrc: null },
          { id: 7, text: "Water", imageSrc: "/face-3.svg", challengeId: 2, correct: false, audioSrc: null },
          { id: 8, text: "Air", imageSrc: "/face-4.svg", challengeId: 2, correct: false, audioSrc: null },
        ],
      },
      {
        id: 3,
        order: 3,
        lessonId: 1,
        question: "Earth grounding helps you feel more ___",
        type: "ASSIST" as const,
        completed: false,
        challengeOptions: [
          { id: 9, text: "centered", imageSrc: "/boy.svg", challengeId: 3, correct: true, audioSrc: null },
          { id: 10, text: "anxious", imageSrc: "/girl.svg", challengeId: 3, correct: false, audioSrc: null },
          { id: 11, text: "confused", imageSrc: "/man.svg", challengeId: 3, correct: false, audioSrc: null },
          { id: 12, text: "distracted", imageSrc: "/woman.svg", challengeId: 3, correct: false, audioSrc: null },
        ],
      },
    ],
  },
  2: {
    id: 2,
    title: "Earth Grounding Exercise",
    challenges: [
      {
        id: 4,
        order: 1,
        lessonId: 2,
        question: "What is the first step in earth grounding exercise?",
        type: "SELECT" as const,
        completed: false,
        challengeOptions: [
          { id: 13, text: "Stand barefoot on natural earth", imageSrc: "/boy.svg", challengeId: 4, correct: true, audioSrc: null },
          { id: 14, text: "Sit in a comfortable chair", imageSrc: "/girl.svg", challengeId: 4, correct: false, audioSrc: null },
          { id: 15, text: "Close your eyes immediately", imageSrc: "/man.svg", challengeId: 4, correct: false, audioSrc: null },
          { id: 16, text: "Start dancing", imageSrc: "/woman.svg", challengeId: 4, correct: false, audioSrc: null },
        ],
      },
      {
        id: 5,
        order: 2,
        lessonId: 2,
        question: "During grounding, visualize roots growing from your ___",
        type: "ASSIST" as const,
        completed: false,
        challengeOptions: [
          { id: 17, text: "feet", imageSrc: "/face-1.svg", challengeId: 5, correct: true, audioSrc: null },
          { id: 18, text: "hands", imageSrc: "/face-2.svg", challengeId: 5, correct: false, audioSrc: null },
          { id: 19, text: "head", imageSrc: "/face-3.svg", challengeId: 5, correct: false, audioSrc: null },
          { id: 20, text: "shoulders", imageSrc: "/face-4.svg", challengeId: 5, correct: false, audioSrc: null },
        ],
      },
    ],
  },
  3: {
    id: 3,
    title: "Earth Stability & Manifestation",
    challenges: [
      {
        id: 21,
        order: 1,
        lessonId: 3,
        question: "Earth energy is best for manifesting:",
        type: "SELECT" as const,
        completed: false,
        challengeOptions: [
          { id: 81, text: "Stable, long-term goals", imageSrc: "/boy.svg", challengeId: 21, correct: true, audioSrc: null },
          { id: 82, text: "Quick emotional changes", imageSrc: "/girl.svg", challengeId: 21, correct: false, audioSrc: null },
          { id: 83, text: "Temporary desires", imageSrc: "/man.svg", challengeId: 21, correct: false, audioSrc: null },
          { id: 84, text: "Impulsive decisions", imageSrc: "/woman.svg", challengeId: 21, correct: false, audioSrc: null },
        ],
      },
      {
        id: 22,
        order: 2,
        lessonId: 3,
        question: "Earth manifestation requires ___",
        type: "ASSIST" as const,
        completed: false,
        challengeOptions: [
          { id: 85, text: "patience", imageSrc: "/face-1.svg", challengeId: 22, correct: true, audioSrc: null },
          { id: 86, text: "rushing", imageSrc: "/face-2.svg", challengeId: 22, correct: false, audioSrc: null },
          { id: 87, text: "doubt", imageSrc: "/face-3.svg", challengeId: 22, correct: false, audioSrc: null },
          { id: 88, text: "fear", imageSrc: "/face-4.svg", challengeId: 22, correct: false, audioSrc: null },
        ],
      },
    ],
  },
  4: {
    id: 4,
    title: "Earth Wisdom & Integration",
    challenges: [
      {
        id: 23,
        order: 1,
        lessonId: 4,
        question: "Earth wisdom teaches us about:",
        type: "SELECT" as const,
        completed: false,
        challengeOptions: [
          { id: 89, text: "Cycles of growth and rest", imageSrc: "/boy.svg", challengeId: 23, correct: true, audioSrc: null },
          { id: 90, text: "Constant activity", imageSrc: "/girl.svg", challengeId: 23, correct: false, audioSrc: null },
          { id: 91, text: "Avoiding nature", imageSrc: "/man.svg", challengeId: 23, correct: false, audioSrc: null },
          { id: 92, text: "Ignoring seasons", imageSrc: "/woman.svg", challengeId: 23, correct: false, audioSrc: null },
        ],
      },
      {
        id: 24,
        order: 2,
        lessonId: 4,
        question: "To integrate earth wisdom, practice ___",
        type: "ASSIST" as const,
        completed: false,
        challengeOptions: [
          { id: 93, text: "mindfulness", imageSrc: "/face-1.svg", challengeId: 24, correct: true, audioSrc: null },
          { id: 94, text: "multitasking", imageSrc: "/face-2.svg", challengeId: 24, correct: false, audioSrc: null },
          { id: 95, text: "worrying", imageSrc: "/face-3.svg", challengeId: 24, correct: false, audioSrc: null },
          { id: 96, text: "overthinking", imageSrc: "/face-4.svg", challengeId: 24, correct: false, audioSrc: null },
        ],
      },
    ],
  },
  5: {
    id: 5,
    title: "Emotional Flow",
    challenges: [
      {
        id: 6,
        order: 1,
        lessonId: 5,
        question: "Water meditation helps with:",
        type: "SELECT" as const,
        completed: false,
        challengeOptions: [
          { id: 21, text: "Emotional healing", imageSrc: "/boy.svg", challengeId: 6, correct: true, audioSrc: null },
          { id: 22, text: "Being angry", imageSrc: "/girl.svg", challengeId: 6, correct: false, audioSrc: null },
          { id: 23, text: "Holding grudges", imageSrc: "/man.svg", challengeId: 6, correct: false, audioSrc: null },
          { id: 24, text: "Avoiding feelings", imageSrc: "/woman.svg", challengeId: 6, correct: false, audioSrc: null },
        ],
      },
      {
        id: 7,
        order: 2,
        lessonId: 5,
        question: "Emotions are like water - they ___",
        type: "ASSIST" as const,
        completed: false,
        challengeOptions: [
          { id: 25, text: "flow", imageSrc: "/face-1.svg", challengeId: 7, correct: true, audioSrc: null },
          { id: 26, text: "freeze", imageSrc: "/face-2.svg", challengeId: 7, correct: false, audioSrc: null },
          { id: 27, text: "disappear", imageSrc: "/face-3.svg", challengeId: 7, correct: false, audioSrc: null },
          { id: 28, text: "explode", imageSrc: "/face-4.svg", challengeId: 7, correct: false, audioSrc: null },
        ],
      },
    ],
  },
  6: {
    id: 6,
    title: "Inner Fire",
    challenges: [
      {
        id: 8,
        order: 1,
        lessonId: 6,
        question: "Fire element meditation helps with:",
        type: "SELECT" as const,
        completed: false,
        challengeOptions: [
          { id: 29, text: "Building inner strength", imageSrc: "/boy.svg", challengeId: 8, correct: true, audioSrc: null },
          { id: 30, text: "Feeling lazy", imageSrc: "/girl.svg", challengeId: 8, correct: false, audioSrc: null },
          { id: 31, text: "Giving up", imageSrc: "/man.svg", challengeId: 8, correct: false, audioSrc: null },
          { id: 32, text: "Avoiding challenges", imageSrc: "/woman.svg", challengeId: 8, correct: false, audioSrc: null },
        ],
      },
      {
        id: 9,
        order: 2,
        lessonId: 6,
        question: "Fire represents ___ energy",
        type: "ASSIST" as const,
        completed: false,
        challengeOptions: [
          { id: 33, text: "transformative", imageSrc: "/face-1.svg", challengeId: 9, correct: true, audioSrc: null },
          { id: 34, text: "destructive", imageSrc: "/face-2.svg", challengeId: 9, correct: false, audioSrc: null },
          { id: 35, text: "cold", imageSrc: "/face-3.svg", challengeId: 9, correct: false, audioSrc: null },
          { id: 36, text: "stagnant", imageSrc: "/face-4.svg", challengeId: 9, correct: false, audioSrc: null },
        ],
      },
    ],
  },
  7: {
    id: 7,
    title: "Breath Awareness",
    challenges: [
      {
        id: 10,
        order: 1,
        lessonId: 7,
        question: "Breathwork is associated with which element?",
        type: "SELECT" as const,
        completed: false,
        challengeOptions: [
          { id: 37, text: "Air", imageSrc: "/boy.svg", challengeId: 10, correct: true, audioSrc: null },
          { id: 38, text: "Earth", imageSrc: "/girl.svg", challengeId: 10, correct: false, audioSrc: null },
          { id: 39, text: "Fire", imageSrc: "/man.svg", challengeId: 10, correct: false, audioSrc: null },
          { id: 40, text: "Water", imageSrc: "/woman.svg", challengeId: 10, correct: false, audioSrc: null },
        ],
      },
      {
        id: 11,
        order: 2,
        lessonId: 5,
        question: "Deep breathing helps you feel more ___",
        type: "ASSIST" as const,
        completed: false,
        challengeOptions: [
          { id: 41, text: "calm", imageSrc: "/face-1.svg", challengeId: 11, correct: true, audioSrc: null },
          { id: 42, text: "anxious", imageSrc: "/face-2.svg", challengeId: 11, correct: false, audioSrc: null },
          { id: 43, text: "worried", imageSrc: "/face-3.svg", challengeId: 11, correct: false, audioSrc: null },
          { id: 44, text: "stressed", imageSrc: "/face-4.svg", challengeId: 11, correct: false, audioSrc: null },
        ],
      },
    ],
  },
  8: {
    id: 8,
    title: "Luna AI Introduction",
    challenges: [
      {
        id: 12,
        order: 1,
        lessonId: 8,
        question: "What is Luna AI's primary role?",
        type: "SELECT" as const,
        completed: false,
        challengeOptions: [
          { id: 45, text: "Wellness guidance companion", imageSrc: "/boy.svg", challengeId: 12, correct: true, audioSrc: null },
          { id: 46, text: "Shopping assistant", imageSrc: "/girl.svg", challengeId: 12, correct: false, audioSrc: null },
          { id: 47, text: "Game character", imageSrc: "/man.svg", challengeId: 12, correct: false, audioSrc: null },
          { id: 48, text: "Weather reporter", imageSrc: "/woman.svg", challengeId: 12, correct: false, audioSrc: null },
        ],
      },
      {
        id: 13,
        order: 2,
        lessonId: 8,
        question: "Luna AI helps you on your ___ journey",
        type: "ASSIST" as const,
        completed: false,
        challengeOptions: [
          { id: 49, text: "wellness", imageSrc: "/face-1.svg", challengeId: 13, correct: true, audioSrc: null },
          { id: 50, text: "shopping", imageSrc: "/face-2.svg", challengeId: 13, correct: false, audioSrc: null },
          { id: 51, text: "gaming", imageSrc: "/face-3.svg", challengeId: 13, correct: false, audioSrc: null },
          { id: 52, text: "cooking", imageSrc: "/face-4.svg", challengeId: 13, correct: false, audioSrc: null },
        ],
      },
    ],
  },
};

const mockUserSubscription = {
  id: 1,
  userId: "mock-user-id",
  stripeCustomerId: "mock-stripe-customer-id",
  stripeSubscriptionId: "mock-stripe-subscription-id",
  stripePriceId: "mock-stripe-price-id",
  stripeCurrentPeriodEnd: Date.now() + 30 * 24 * 60 * 60 * 1000, // 30 days from now
  isActive: false,
};

const LessonIdPage = ({ params }: LessonIdPageProps) => {
  const lessonId = Number(params.lessonId);
  const lesson = mockLessons[lessonId as keyof typeof mockLessons];

  if (!lesson) redirect("/learn");

  const initialPercentage =
    (lesson.challenges.filter((challenge) => challenge.completed).length /
      lesson.challenges.length) *
    100;

  return (
    <Quiz
      initialLessonId={lesson.id}
      initialLessonChallenges={lesson.challenges}
      initialHearts={5}
      initialPercentage={initialPercentage}
      userSubscription={mockUserSubscription}
    />
  );
};

export default LessonIdPage;
