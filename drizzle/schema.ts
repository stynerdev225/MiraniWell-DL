import { pgTable, foreignKey, serial, integer, boolean, text, unique } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"



export const challengeOptions = pgTable("challenge_options", {
	id: serial().primaryKey().notNull(),
	challengeId: integer("challenge_id").notNull(),
	correct: boolean().notNull(),
	imageSrc: text("image_src"),
	audioSrc: text("audio_src"),
	text: text().notNull(),
}, (table) => [
	foreignKey({
			columns: [table.challengeId],
			foreignColumns: [challenges.id],
			name: "challenge_options_challenge_id_challenges_id_fk"
		}).onDelete("cascade"),
]);

export const challengeProgress = pgTable("challenge_progress", {
	id: serial().primaryKey().notNull(),
	userId: text("user_id").notNull(),
	challengeId: integer("challenge_id").notNull(),
	completed: boolean().default(false).notNull(),
}, (table) => [
	foreignKey({
			columns: [table.challengeId],
			foreignColumns: [challenges.id],
			name: "challenge_progress_challenge_id_challenges_id_fk"
		}).onDelete("cascade"),
]);

export const userSubscription = pgTable("user_subscription", {
	id: serial().primaryKey().notNull(),
	userId: text("user_id").notNull(),
	stripeCustomerId: text("stripe_customer_id").notNull(),
	stripeSubscriptionId: text("stripe_subscription_id").notNull(),
	stripePriceId: text("stripe_price_id").notNull(),
	stripeCurrentPeriodEnd: integer("stripe_current_period_end"),
}, (table) => [
	unique("user_subscription_user_id_unique").on(table.userId),
	unique("user_subscription_stripe_customer_id_unique").on(table.stripeCustomerId),
	unique("user_subscription_stripe_subscription_id_unique").on(table.stripeSubscriptionId),
]);

export const courses = pgTable("courses", {
	id: serial().primaryKey().notNull(),
	title: text().notNull(),
	altCode: text("alt_code").notNull(),
});

export const units = pgTable("units", {
	id: serial().primaryKey().notNull(),
	title: text().notNull(),
	description: text().notNull(),
	courseId: integer("course_id").notNull(),
	order: integer().notNull(),
}, (table) => [
	foreignKey({
			columns: [table.courseId],
			foreignColumns: [courses.id],
			name: "units_course_id_courses_id_fk"
		}).onDelete("cascade"),
]);

export const lessons = pgTable("lessons", {
	id: serial().primaryKey().notNull(),
	title: text().notNull(),
	unitId: integer("unit_id").notNull(),
	order: integer().notNull(),
}, (table) => [
	foreignKey({
			columns: [table.unitId],
			foreignColumns: [units.id],
			name: "lessons_unit_id_units_id_fk"
		}).onDelete("cascade"),
]);

export const challenges = pgTable("challenges", {
	id: serial().primaryKey().notNull(),
	type: text().notNull(),
	question: text().notNull(),
	lessonId: integer("lesson_id").notNull(),
	order: integer().notNull(),
}, (table) => [
	foreignKey({
			columns: [table.lessonId],
			foreignColumns: [lessons.id],
			name: "challenges_lesson_id_lessons_id_fk"
		}).onDelete("cascade"),
]);

export const userProgress = pgTable("user_progress", {
	userId: text("user_id").primaryKey().notNull(),
	userName: text("user_name").default('User').notNull(),
	activeCourseId: integer("active_course_id"),
	hearts: integer().default(5).notNull(),
	points: integer().default(0).notNull(),
	userImageSrc: text("user_image_src").default('/mascot.svg').notNull(),
}, (table) => [
	foreignKey({
			columns: [table.activeCourseId],
			foreignColumns: [courses.id],
			name: "user_progress_active_course_id_courses_id_fk"
		}).onDelete("cascade"),
]);
