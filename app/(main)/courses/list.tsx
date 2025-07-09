"use client";

import { useTransition } from "react";

import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { courses, userProgress } from "@/db/schema";

import { Card } from "./card";

type ListProps = {
  courses: (typeof courses.$inferSelect)[];
  activeCourseId?: typeof userProgress.$inferSelect.activeCourseId;
};

export const List = ({ courses, activeCourseId }: ListProps) => {
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  const onClick = (id: number) => {
    if (pending) return;

    if (id === activeCourseId) return router.push("/learn");

    startTransition(() => {
      fetch("/api/user-progress", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ courseId: id }),
      }).catch(() => toast.error("Something went wrong."));
    });
  };

  return (
    <>
      {courses.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🌍</div>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">No Courses Available Yet</h3>
          <p className="text-gray-600">Wellness language courses are coming soon!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pt-6">
          {courses.map((course) => (
            <Card
              key={course.id}
              id={course.id}
              title={course.title}
              imageSrc={course.imageSrc}
              onClick={onClick}
              disabled={pending}
              isActive={course.id === activeCourseId}
            />
          ))}
        </div>
      )}
      
      {/* Coming Soon Preview */}
      <div className="mt-12 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-2xl p-8 text-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">🚀 Coming Soon</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-700">
          <div className="flex items-center justify-center gap-2">
            <span>🇮🇳</span>
            <span>Hindi Wellness</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <span>🇰🇷</span>
            <span>Korean Healing</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <span>🇸🇦</span>
            <span>Arabic Spirituality</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <span>🇷🇺</span>
            <span>Russian Mindfulness</span>
          </div>
        </div>
      </div>
    </>
  );
};
