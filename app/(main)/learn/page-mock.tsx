import { Suspense } from "react";

import { FeedWrapper } from "@/components/feed-wrapper";
import { LunaCompanion } from "@/components/luna-companion";
import { Promo } from "@/components/promo";
import { Quests } from "@/components/quests";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { UserProgress } from "@/components/user-progress";

import { Header } from "./header";
import { WellnessUnit } from "./wellness-unit";

// Mock data for your learning page
const mockUserProgress = {
    userId: "user_123",
    userName: "Wellness Seeker",
    userImageSrc: "/mascot.svg",
    activeCourse: {
        id: 1,
        title: "Mindful Wellness Journey",
        imageSrc: "/es.svg"
    },
    hearts: 5,
    points: 150
};

const mockUnits = [
    {
        id: 1,
        title: "Foundation of Wellness",
        description: "Begin your journey with fundamental wellness practices",
        order: 1,
        lessons: [
            {
                id: 1,
                title: "Mindful Breathing",
                order: 1,
                unitId: 1,
                completed: true,
                challenges: []
            },
            {
                id: 2,
                title: "Body Awareness",
                order: 2,
                unitId: 1,
                completed: false,
                challenges: []
            }
        ]
    },
    {
        id: 2,
        title: "Emotional Balance",
        description: "Explore emotional intelligence and balance",
        order: 2,
        lessons: [
            {
                id: 3,
                title: "Emotional Awareness",
                order: 1,
                unitId: 2,
                completed: false,
                challenges: []
            },
            {
                id: 4,
                title: "Stress Management",
                order: 2,
                unitId: 2,
                completed: false,
                challenges: []
            }
        ]
    },
    {
        id: 3,
        title: "Spiritual Growth",
        description: "Deepen your spiritual connection and purpose",
        order: 3,
        lessons: [
            {
                id: 5,
                title: "Inner Peace",
                order: 1,
                unitId: 3,
                completed: false,
                challenges: []
            },
            {
                id: 6,
                title: "Life Purpose",
                order: 2,
                unitId: 3,
                completed: false,
                challenges: []
            }
        ]
    }
];

const mockCourseProgress = {
    activeLesson: {
        id: 2,
        title: "Body Awareness",
        order: 2,
        unitId: 1,
        challenges: []
    },
    activeLessonId: 2
};

const mockLessonPercentage = 25;

// Loading skeleton components
const LoadingSkeleton = () => (
    <div className="flex flex-row-reverse gap-[48px] px-6">
        <StickyWrapper>
            <div className="animate-pulse bg-gray-200 h-32 rounded-lg mb-4" />
            <div className="animate-pulse bg-gray-200 h-24 rounded-lg mb-4" />
            <div className="animate-pulse bg-gray-200 h-16 rounded-lg" />
        </StickyWrapper>
        <FeedWrapper>
            <div className="animate-pulse bg-gray-200 h-12 rounded-lg mb-6" />
            <div className="space-y-4">
                {Array.from({ length: 3 }).map((_, i) => (
                    <div key={i} className="animate-pulse bg-gray-200 h-48 rounded-lg" />
                ))}
            </div>
        </FeedWrapper>
    </div>
);

const LearnPageMock = () => {
    const isPro = false;

    return (
        <Suspense fallback={<LoadingSkeleton />}>
            <div className="flex flex-row-reverse gap-[48px] px-6">
                <StickyWrapper>
                    <UserProgress
                        activeCourse={mockUserProgress.activeCourse}
                        hearts={mockUserProgress.hearts}
                        points={mockUserProgress.points}
                        hasActiveSubscription={isPro}
                    />

                    {!isPro && <Promo />}
                    <Quests points={mockUserProgress.points} />
                </StickyWrapper>
                <FeedWrapper>
                    <Header title="Your Wellness Journey with Luna" />
                    <LunaCompanion />
                    {mockUnits.map((unit) => (
                        <div key={unit.id} className="mb-10">
                            <WellnessUnit
                                id={unit.id}
                                order={unit.order}
                                description={unit.description}
                                title={unit.title}
                                lessons={unit.lessons}
                                activeLesson={mockCourseProgress.activeLesson}
                                activeLessonPercentage={mockLessonPercentage}
                            />
                        </div>
                    ))}
                </FeedWrapper>
            </div>
        </Suspense>
    );
};

export default LearnPageMock;
