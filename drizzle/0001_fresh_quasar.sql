ALTER TABLE "user_subscription" DROP CONSTRAINT "user_subscription_user_id_key";--> statement-breakpoint
ALTER TABLE "user_subscription" DROP CONSTRAINT "user_subscription_stripe_customer_id_key";--> statement-breakpoint
ALTER TABLE "user_subscription" DROP CONSTRAINT "user_subscription_stripe_subscription_id_key";--> statement-breakpoint
ALTER TABLE "challenges" ALTER COLUMN "type" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "challenge_options" ADD COLUMN "text" text NOT NULL;--> statement-breakpoint
ALTER TABLE "courses" ADD COLUMN "image_src" text NOT NULL;--> statement-breakpoint
ALTER TABLE "user_progress" ADD COLUMN "user_image_src" text DEFAULT '/mascot.svg' NOT NULL;--> statement-breakpoint
ALTER TABLE "challenge_options" DROP COLUMN "option";--> statement-breakpoint
ALTER TABLE "courses" DROP COLUMN "alt_code";--> statement-breakpoint
ALTER TABLE "user_progress" DROP COLUMN "user_img_src";--> statement-breakpoint
ALTER TABLE "user_progress" DROP COLUMN "gems";--> statement-breakpoint
ALTER TABLE "user_subscription" ADD CONSTRAINT "user_subscription_user_id_unique" UNIQUE("user_id");--> statement-breakpoint
ALTER TABLE "user_subscription" ADD CONSTRAINT "user_subscription_stripe_customer_id_unique" UNIQUE("stripe_customer_id");--> statement-breakpoint
ALTER TABLE "user_subscription" ADD CONSTRAINT "user_subscription_stripe_subscription_id_unique" UNIQUE("stripe_subscription_id");--> statement-breakpoint
DROP TYPE "public"."type";