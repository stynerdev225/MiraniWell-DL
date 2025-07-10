-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TYPE "public"."type" AS ENUM('SELECT', 'HINT');--> statement-breakpoint
CREATE TABLE "challenges" (
	"id" serial PRIMARY KEY NOT NULL,
	"type" "type" NOT NULL,
	"question" text NOT NULL,
	"lesson_id" integer NOT NULL,
	"order" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "challenge_options" (
	"id" serial PRIMARY KEY NOT NULL,
	"challenge_id" integer NOT NULL,
	"option" text NOT NULL,
	"correct" boolean NOT NULL,
	"image_src" text,
	"audio_src" text
);
--> statement-breakpoint
CREATE TABLE "challenge_progress" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"challenge_id" integer NOT NULL,
	"completed" boolean DEFAULT false NOT NULL
);
--> statement-breakpoint
CREATE TABLE "user_subscription" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"stripe_customer_id" text NOT NULL,
	"stripe_subscription_id" text NOT NULL,
	"stripe_price_id" text NOT NULL,
	"stripe_current_period_end" integer,
	CONSTRAINT "user_subscription_user_id_key" UNIQUE("user_id"),
	CONSTRAINT "user_subscription_stripe_customer_id_key" UNIQUE("stripe_customer_id"),
	CONSTRAINT "user_subscription_stripe_subscription_id_key" UNIQUE("stripe_subscription_id")
);
--> statement-breakpoint
CREATE TABLE "courses" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"alt_code" varchar(2) NOT NULL
);
--> statement-breakpoint
CREATE TABLE "user_progress" (
	"user_id" text PRIMARY KEY NOT NULL,
	"user_name" text DEFAULT 'User' NOT NULL,
	"user_img_src" text DEFAULT '/logo.svg' NOT NULL,
	"active_course_id" integer,
	"hearts" integer DEFAULT 5 NOT NULL,
	"points" integer DEFAULT 0 NOT NULL,
	"gems" integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
CREATE TABLE "units" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"description" text NOT NULL,
	"course_id" integer NOT NULL,
	"order" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "lessons" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"unit_id" integer NOT NULL,
	"order" integer NOT NULL
);
--> statement-breakpoint
ALTER TABLE "challenges" ADD CONSTRAINT "challenges_lesson_id_lessons_id_fk" FOREIGN KEY ("lesson_id") REFERENCES "public"."lessons"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "challenge_options" ADD CONSTRAINT "challenge_options_challenge_id_challenges_id_fk" FOREIGN KEY ("challenge_id") REFERENCES "public"."challenges"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "challenge_progress" ADD CONSTRAINT "challenge_progress_challenge_id_challenges_id_fk" FOREIGN KEY ("challenge_id") REFERENCES "public"."challenges"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "user_progress" ADD CONSTRAINT "user_progress_active_course_id_courses_id_fk" FOREIGN KEY ("active_course_id") REFERENCES "public"."courses"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "units" ADD CONSTRAINT "units_course_id_courses_id_fk" FOREIGN KEY ("course_id") REFERENCES "public"."courses"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "lessons" ADD CONSTRAINT "lessons_unit_id_units_id_fk" FOREIGN KEY ("unit_id") REFERENCES "public"."units"("id") ON DELETE cascade ON UPDATE no action;
*/