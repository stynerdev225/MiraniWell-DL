"use client";

import Link from "next/link";
import { Check, Crown, Star, Lock } from "lucide-react";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import "react-circular-progressbar/dist/styles.css";

type Props = {
  id: number;
  index: number;
  totalCount: number;
  locked?: boolean;
  current?: boolean;
  percentage: number;
  title: string;
  elementType: number;
};

const wellnessIcons = {
  1: "🧘", // Earth - Meditation
  2: "🌊", // Water - Flow
  3: "⚡", // Fire - Energy
  4: "🌬️", // Air - Breath
};

export const WellnessButton = ({
  id,
  index,
  totalCount,
  locked,
  current,
  percentage,
  title,
  elementType,
}: Props) => {
  const cycleLength = 8;
  const cycleIndex = index % cycleLength;

  let indentationLevel;
  if (cycleIndex <= 2) {
    indentationLevel = cycleIndex;
  } else if (cycleIndex <= 4) {
    indentationLevel = 4 - cycleIndex;
  } else if (cycleIndex <= 6) {
    indentationLevel = 4 - cycleIndex;
  } else {
    indentationLevel = cycleIndex - 8;
  }

  const rightPosition = indentationLevel * 40;

  const isFirst = index === 0;
  const isLast = index === totalCount;
  const isCompleted = !current && !locked;

  const Icon = wellnessIcons[elementType as keyof typeof wellnessIcons] || "✨";

  const href = isCompleted ? `/lesson/${id}` : `/lesson/${id}`;

  return (
    <Link
      href={href}
      aria-disabled={locked}
      style={{ pointerEvents: locked ? "none" : "auto" }}
    >
      <div
        className="relative"
        style={{
          right: `${rightPosition}px`,
          marginTop: isFirst && !isCompleted ? 60 : 24,
        }}
      >
        {current ? (
          <div className="h-[102px] w-[102px] relative">
            <div className="absolute -top-6 left-2.5 px-3 py-2.5 border-2 font-bold uppercase text-green-500 bg-white rounded-xl animate-bounce tracking-wide z-10">
              Start
              <div
                className="absolute left-1/2 -bottom-2 w-0 h-0 border-x-8 border-x-transparent border-t-8 transform -translate-x-1/2"
                style={{ borderTopColor: "white" }}
              />
            </div>

            <CircularProgressbarWithChildren
              value={Number.isNaN(percentage) ? 0 : percentage}
              styles={{
                path: {
                  stroke: "#4ade80",
                },
                trail: {
                  stroke: "#e5e7eb",
                },
              }}
            >
              <Button
                size="rounded"
                variant={locked ? "locked" : "secondary"}
                className="h-[70px] w-[70px] border-b-8"
              >
                <span className="text-2xl">{Icon}</span>
              </Button>
            </CircularProgressbarWithChildren>
          </div>
        ) : (
          <Button
            size="rounded"
            variant={locked ? "locked" : isCompleted ? "secondary" : "secondary"}
            className="h-[70px] w-[70px] border-b-8"
          >
            {locked ? (
              <Lock className="h-5 w-5 fill-neutral-400 text-neutral-400" />
            ) : isCompleted ? (
              <Check className="h-6 w-6 fill-none stroke-[4] text-green-500" />
            ) : (
              <span className="text-2xl">{Icon}</span>
            )}
          </Button>
        )}

        <div className="text-center mt-2">
          <p className="text-sm font-semibold text-neutral-700">{title}</p>
        </div>
      </div>
    </Link>
  );
};