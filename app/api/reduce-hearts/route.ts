import { NextRequest, NextResponse } from "next/server";

import { reduceHearts } from "@/actions/user-progress";

export async function POST(request: NextRequest) {
  try {
    const { challengeId } = await request.json() as { challengeId: number };
    
    if (!challengeId) {
      return NextResponse.json({ error: "Challenge ID is required" }, { status: 400 });
    }
    
    const result = await reduceHearts(challengeId);
    return NextResponse.json(result || {});
  } catch (error) {
    console.error("Error in reduce hearts API:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
