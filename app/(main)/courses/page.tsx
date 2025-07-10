import Image from "next/image";

import { LunaCompanion } from "@/components/luna-companion";

import { List } from "./list";

// Mock data for courses
const mockCourses = [
  {
    id: 1,
    title: "English Wellness",
    imageSrc: "/us.svg",
  },
  {
    id: 2,
    title: "Spanish Wellness",
    imageSrc: "/es.svg",
  },
  {
    id: 3,
    title: "French Wellness",
    imageSrc: "/fr.svg",
  },
  {
    id: 4,
    title: "Italian Wellness",
    imageSrc: "/it.svg",
  },
  {
    id: 5,
    title: "Japanese Wellness",
    imageSrc: "/jp.svg",
  },
];

// Mock user progress
const mockUserProgress = {
  activeCourseId: 1, // English is active by default
};

const CoursesPage = () => {
  const courses = mockCourses;
  const userProgress = mockUserProgress;

  return (
    <div className="mx-auto h-full max-w-[1200px] px-6">
      {/* Header Section */}
      <div className="text-center mb-8">
        <div className="mb-6">
          <Image
            src="/hero.svg"
            alt="Wellness Languages"
            width={120}
            height={120}
            className="mx-auto mb-4 animate-pulse"
          />
        </div>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          🌍 Wellness Language Courses
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
          Learn healing, mindfulness, and spiritual growth in your preferred language.
          Each course combines ancient wisdom with modern wellness practices.
        </p>
        <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-4 max-w-md mx-auto">
          <p className="text-sm text-gray-700">
            ✨ All courses include Luna AI guidance in your chosen language
          </p>
        </div>
      </div>

      {/* Luna Companion */}
      <LunaCompanion />

      {/* Course Benefits */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl p-6 text-center">
          <div className="text-3xl mb-3">🌱</div>
          <h3 className="font-semibold text-gray-800 mb-2">Elemental Healing</h3>
          <p className="text-sm text-gray-600">Earth, Water, Fire & Air practices in your language</p>
        </div>
        <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl p-6 text-center">
          <div className="text-3xl mb-3">🧘</div>
          <h3 className="font-semibold text-gray-800 mb-2">Cultural Wisdom</h3>
          <p className="text-sm text-gray-600">Traditional healing adapted to your culture</p>
        </div>
        <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl p-6 text-center">
          <div className="text-3xl mb-3">🤖</div>
          <h3 className="font-semibold text-gray-800 mb-2">AI Guidance</h3>
          <p className="text-sm text-gray-600">Luna speaks and guides in your native language</p>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Choose Your Wellness Language</h2>
        <p className="text-gray-600 mb-6">Select a language to begin your personalized wellness journey</p>
      </div>

      <List courses={courses} activeCourseId={userProgress?.activeCourseId} />
    </div>
  );
};

export default CoursesPage;
