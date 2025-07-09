import { NextResponse } from "next/server";

import { refillHearts } from "@/actions/user-progress";

export async function POST() {
  try {
    await refillHearts();
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error in refill hearts API:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
