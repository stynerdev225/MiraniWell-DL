import type { InferInsertModel } from "drizzle-orm";
import { eq } from "drizzle-orm";
import { headers } from "next/headers";
import { NextResponse, type NextRequest } from "next/server";
import Stripe from "stripe";

import db from "@/db/drizzle";
import { userSubscription } from "@/db/schema";
import { stripe } from "@/lib/stripe";

type UserSubscriptionInsert = InferInsertModel<typeof userSubscription>;

export async function POST(req: NextRequest) {
  const body = await req.text();
  const signature = headers().get("Stripe-Signature") as string;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (error: unknown) {
    return new NextResponse(`Webhook error ${JSON.stringify(error)}`, {
      status: 400,
    });
  }

  const session = event.data.object as Stripe.Checkout.Session;

  // user subscription completed
  if (event.type === "checkout.session.completed") {
    const subscription = await stripe.subscriptions.retrieve(
      session.subscription as string
    );

    if (!session?.metadata?.userId)
      return new NextResponse("User id is required.", { status: 400 });

    const subscriptionData: UserSubscriptionInsert = {
      userId: session.metadata.userId,
      stripeSubscriptionId: subscription.id,
      stripeCustomerId: subscription.customer as string,
      stripePriceId: subscription.items.data[0]?.price.id || '',
      stripeCurrentPeriodEnd: subscription.current_period_end * 1000, // in ms
    };

    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-explicit-any
    await (db as any).insert(userSubscription).values(subscriptionData);
  }

  // renew user subscription
  if (event.type === "invoice.payment_succeeded") {
    const subscription = await stripe.subscriptions.retrieve(
      session.subscription as string
    );

    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-explicit-any
    await (db as any)
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      .update(userSubscription)
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      .set({
        stripePriceId: subscription.items.data[0]?.price.id || '',
        stripeCurrentPeriodEnd: subscription.current_period_end * 1000, // in ms
      })
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      .where(eq(userSubscription.stripeSubscriptionId, subscription.id));
  }

  return new NextResponse(null, { status: 200 });
}
