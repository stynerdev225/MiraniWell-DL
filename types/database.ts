import type { InferSelectModel } from "drizzle-orm";
import type { 
  courses, 
  units, 
  lessons, 
  challenges, 
  challengeProgress, 
  userProgress, 
  userSubscription 
} from "@/db/schema";

export type Course = InferSelectModel<typeof courses>;
export type Unit = InferSelectModel<typeof units>;
export type Lesson = InferSelectModel<typeof lessons>;
export type Challenge = InferSelectModel<typeof challenges>;
export type ChallengeProgress = InferSelectModel<typeof challengeProgress>;
export type UserProgress = InferSelectModel<typeof userProgress>;
export type UserSubscription = InferSelectModel<typeof userSubscription>;

export type UnitWithLessons = Unit & {
  lessons: (Lesson & {
    completed: boolean;
    challenges: (Challenge & {
      challengeProgress: ChallengeProgress[];
    })[];
  })[];
};

export type CourseProgressData = {
  activeLesson?: Lesson & {
    unit: Unit;
    challenges: (Challenge & {
      challengeProgress: ChallengeProgress[];
    })[];
  };
  activeLessonId?: number;
};

export type UserProgressWithCourse = UserProgress & {
  activeCourse: Course | null;
};

export type UserSubscriptionWithStatus = UserSubscription & {
  isActive: boolean;
};