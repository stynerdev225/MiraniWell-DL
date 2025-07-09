import { NextRequest, NextResponse } from "next/server";

import { upsertUserProgress } from "@/actions/user-progress";

export async function POST(request: NextRequest) {
  try {
    const { courseId } = await request.json() as { courseId: number };
    
    if (!courseId) {
      return NextResponse.json({ error: "Course ID is required" }, { status: 400 });
    }
    
    const result = await upsertUserProgress(courseId);
    return NextResponse.json(result || {});
  } catch (error) {
    console.error("Error in user progress API:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
