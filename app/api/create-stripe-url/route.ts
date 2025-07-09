import { NextResponse } from "next/server";

import { createStripeUrl } from "@/actions/user-subscription";

export async function POST() {
  try {
    const result = await createStripeUrl();
    return NextResponse.json(result || {});
  } catch (error) {
    console.error("Error in create stripe URL API:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
