import { relations } from "drizzle-orm/relations";
import { challenges, challengeOptions, challengeProgress, courses, units, lessons, userProgress } from "./schema";

export const challengeOptionsRelations = relations(challengeOptions, ({one}) => ({
	challenge: one(challenges, {
		fields: [challengeOptions.challengeId],
		references: [challenges.id]
	}),
}));

export const challengesRelations = relations(challenges, ({one, many}) => ({
	challengeOptions: many(challengeOptions),
	challengeProgresses: many(challengeProgress),
	lesson: one(lessons, {
		fields: [challenges.lessonId],
		references: [lessons.id]
	}),
}));

export const challengeProgressRelations = relations(challengeProgress, ({one}) => ({
	challenge: one(challenges, {
		fields: [challengeProgress.challengeId],
		references: [challenges.id]
	}),
}));

export const unitsRelations = relations(units, ({one, many}) => ({
	course: one(courses, {
		fields: [units.courseId],
		references: [courses.id]
	}),
	lessons: many(lessons),
}));

export const coursesRelations = relations(courses, ({many}) => ({
	units: many(units),
	userProgresses: many(userProgress),
}));

export const lessonsRelations = relations(lessons, ({one, many}) => ({
	unit: one(units, {
		fields: [lessons.unitId],
		references: [units.id]
	}),
	challenges: many(challenges),
}));

export const userProgressRelations = relations(userProgress, ({one}) => ({
	course: one(courses, {
		fields: [userProgress.activeCourseId],
		references: [courses.id]
	}),
}));