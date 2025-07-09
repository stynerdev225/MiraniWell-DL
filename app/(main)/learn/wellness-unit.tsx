"use client";

import { lessons, challengeProgress } from "@/db/schema";
import { WellnessButton } from "./wellness-button";

type Props = {
  id: number;
  order: number;
  title: string;
  description: string;
  lessons: (typeof lessons.$inferSelect & {
    completed: boolean;
  })[];
  activeLesson:
    | (typeof lessons.$inferSelect & {
        challenges: (typeof challengeProgress.$inferSelect)[];
      })
    | undefined;
  activeLessonPercentage: number;
};

const elementalIcons = {
  1: "🌱", // Earth - Grounding
  2: "💧", // Water - Emotional Healing  
  3: "🔥", // Fire - Energy Work
  4: "💨", // Air - Breathwork
};

const elementalColors = {
  1: "from-green-400 to-emerald-500", // Earth
  2: "from-blue-400 to-cyan-500",    // Water
  3: "from-red-400 to-orange-500",   // Fire
  4: "from-gray-300 to-slate-400",   // Air
};

export const WellnessUnit = ({
  id,
  order,
  title,
  description,
  lessons,
  activeLesson,
  activeLessonPercentage,
}: Props) => {
  const elementIcon = elementalIcons[order as keyof typeof elementalIcons] || "✨";
  const elementColor = elementalColors[order as keyof typeof elementalColors] || "from-purple-400 to-pink-500";

  return (
    <div className="relative">
      <div className="flex items-center justify-between mb-5">
        <div className={`bg-gradient-to-r ${elementColor} rounded-xl p-4 shadow-lg`}>
          <div className="flex items-center gap-3">
            <span className="text-3xl">{elementIcon}</span>
            <div>
              <h2 className="text-xl font-bold text-white">{title}</h2>
              <p className="text-white/90 text-sm">{description}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative">
        {lessons.map((lesson, index) => {
          const isCurrent = lesson.id === activeLesson?.id;
          const isLocked = !lesson.completed && !isCurrent;

          return (
            <WellnessButton
              key={lesson.id}
              id={lesson.id}
              index={index}
              totalCount={lessons.length}
              locked={isLocked}
              current={isCurrent}
              percentage={activeLessonPercentage}
              title={lesson.title}
              elementType={order}
            />
          );
        })}
      </div>
    </div>
  );
};