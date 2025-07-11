import { Suspense } from "react";

import { FeedWrapper } from "@/components/feed-wrapper";
import { LunaCompanion } from "@/components/luna-companion";
import { Promo } from "@/components/promo";
import { Quests } from "@/components/quests";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { UserProgress } from "@/components/user-progress";
import { useLanguage } from "@/contexts/LanguageContext";

import { Header } from "./header";
import { WellnessUnit } from "./wellness-unit";

// Type definitions
interface ChallengeProgress {
    id: number;
    userId: string;
    challengeId: number;
    completed: boolean;
}

interface Lesson {
    id: number;
    title: string;
    order: number;
    unitId: number;
    completed: boolean;
    challenges: ChallengeProgress[];
}

interface Unit {
    id: number;
    title: string;
    description: string;
    order: number;
    lessons: Lesson[];
}

interface Category {
    id: number;
    title: string;
    description: string;
    color: string;
    borderColor: string;
    textColor: string;
    icon: string;
    units: Unit[];
}

interface ActiveLesson {
    id: number;
    title: string;
    order: number;
    unitId: number;
    challenges: ChallengeProgress[];
}

interface CourseProgress {
    activeLesson: ActiveLesson;
    activeLessonId: number;
}

interface CategorySectionProps {
    category: Category;
    courseProgress: CourseProgress;
    lessonPercentage: number;
}

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

// Mock data organized by categories with enhanced styling
const wellnessCategories = [
    {
        id: 1,
        title: "🌟 Elemental Foundations",
        description: "Master the four elements to build your wellness foundation",
        color: "from-emerald-50 to-teal-50",
        borderColor: "border-emerald-300",
        textColor: "text-emerald-800",
        icon: "🌍",
        units: [
            {
                id: 1,
                title: "Earth Element",
                description: "Ground yourself with earth's stable energy and discover manifestation",
                order: 1,
                lessons: [
                    {
                        id: 1,
                        title: "Introduction to Earth Grounding",
                        order: 1,
                        unitId: 1,
                        completed: true,
                        challenges: []
                    },
                    {
                        id: 2,
                        title: "Earth Grounding Exercise",
                        order: 2,
                        unitId: 1,
                        completed: false,
                        challenges: []
                    },
                    {
                        id: 3,
                        title: "Earth Stability & Manifestation",
                        order: 3,
                        unitId: 1,
                        completed: false,
                        challenges: []
                    },
                    {
                        id: 4,
                        title: "Earth Wisdom & Integration",
                        order: 4,
                        unitId: 1,
                        completed: false,
                        challenges: []
                    }
                ]
            },
            {
                id: 2,
                title: "Water Element",
                description: "Flow with water's healing properties",
                order: 2,
                lessons: [
                    {
                        id: 5,
                        title: "Emotional Flow",
                        order: 1,
                        unitId: 2,
                        completed: false,
                        challenges: []
                    },
                    {
                        id: 6,
                        title: "Cleansing Rituals",
                        order: 2,
                        unitId: 2,
                        completed: false,
                        challenges: []
                    },
                    {
                        id: 7,
                        title: "Intuitive Healing",
                        order: 3,
                        unitId: 2,
                        completed: false,
                        challenges: []
                    }
                ]
            },
            {
                id: 3,
                title: "Fire Element",
                description: "Ignite your inner passion and transformation",
                order: 3,
                lessons: [
                    {
                        id: 8,
                        title: "Inner Fire",
                        order: 1,
                        unitId: 3,
                        completed: false,
                        challenges: []
                    },
                    {
                        id: 9,
                        title: "Transformation",
                        order: 2,
                        unitId: 3,
                        completed: false,
                        challenges: []
                    },
                    {
                        id: 10,
                        title: "Solar Plexus",
                        order: 3,
                        unitId: 3,
                        completed: false,
                        challenges: []
                    }
                ]
            },
            {
                id: 4,
                title: "Air Element",
                description: "Breathe with air's clarity and freedom",
                order: 4,
                lessons: [
                    {
                        id: 11,
                        title: "Mindful Breathing",
                        order: 1,
                        unitId: 4,
                        completed: false,
                        challenges: []
                    },
                    {
                        id: 12,
                        title: "Mental Clarity",
                        order: 2,
                        unitId: 4,
                        completed: false,
                        challenges: []
                    },
                    {
                        id: 13,
                        title: "Heart Chakra",
                        order: 3,
                        unitId: 4,
                        completed: false,
                        challenges: []
                    }
                ]
            }
        ]
    },
    {
        id: 2,
        title: "🧠 Mind-Body-Spirit",
        description: "Integrate your mental, physical, and spiritual wellness",
        color: "from-blue-50 to-indigo-50",
        borderColor: "border-blue-300",
        textColor: "text-blue-800",
        icon: "🧘",
        units: [
            {
                id: 6,
                title: "Mindfulness & Meditation",
                description: "Develop present moment awareness and inner peace",
                order: 6,
                lessons: [
                    {
                        id: 17,
                        title: "Introduction to Mindfulness",
                        order: 1,
                        unitId: 6,
                        completed: false,
                        challenges: []
                    },
                    {
                        id: 18,
                        title: "Basic Meditation Techniques",
                        order: 2,
                        unitId: 6,
                        completed: false,
                        challenges: []
                    },
                    {
                        id: 19,
                        title: "Present Moment Awareness",
                        order: 3,
                        unitId: 6,
                        completed: false,
                        challenges: []
                    },
                    {
                        id: 20,
                        title: "Daily Mindfulness Practice",
                        order: 4,
                        unitId: 6,
                        completed: false,
                        challenges: []
                    }
                ]
            },
            {
                id: 7,
                title: "Mental Wellness",
                description: "Strengthen your mind and manage stress effectively",
                order: 7,
                lessons: [
                    {
                        id: 21,
                        title: "Stress Management Basics",
                        order: 1,
                        unitId: 7,
                        completed: false,
                        challenges: []
                    },
                    {
                        id: 22,
                        title: "Anxiety Relief Techniques",
                        order: 2,
                        unitId: 7,
                        completed: false,
                        challenges: []
                    },
                    {
                        id: 23,
                        title: "Positive Thinking Patterns",
                        order: 3,
                        unitId: 7,
                        completed: false,
                        challenges: []
                    },
                    {
                        id: 24,
                        title: "Cognitive Wellness Tools",
                        order: 4,
                        unitId: 7,
                        completed: false,
                        challenges: []
                    }
                ]
            },
            {
                id: 8,
                title: "Physical Wellness",
                description: "Connect with your body through movement and awareness",
                order: 8,
                lessons: [
                    {
                        id: 25,
                        title: "Body Awareness Basics",
                        order: 1,
                        unitId: 8,
                        completed: false,
                        challenges: []
                    },
                    {
                        id: 26,
                        title: "Gentle Movement Practice",
                        order: 2,
                        unitId: 8,
                        completed: false,
                        challenges: []
                    },
                    {
                        id: 27,
                        title: "Yoga & Stretching",
                        order: 3,
                        unitId: 8,
                        completed: false,
                        challenges: []
                    },
                    {
                        id: 28,
                        title: "Physical Grounding",
                        order: 4,
                        unitId: 8,
                        completed: false,
                        challenges: []
                    }
                ]
            },
            {
                id: 9,
                title: "Spiritual Growth",
                description: "Explore your inner wisdom and spiritual connection",
                order: 9,
                lessons: [
                    {
                        id: 29,
                        title: "Spiritual Awareness",
                        order: 1,
                        unitId: 9,
                        completed: false,
                        challenges: []
                    },
                    {
                        id: 30,
                        title: "Intuition Development",
                        order: 2,
                        unitId: 9,
                        completed: false,
                        challenges: []
                    },
                    {
                        id: 31,
                        title: "Energy Sensitivity",
                        order: 3,
                        unitId: 9,
                        completed: false,
                        challenges: []
                    },
                    {
                        id: 32,
                        title: "Spiritual Practice Integration",
                        order: 4,
                        unitId: 9,
                        completed: false,
                        challenges: []
                    }
                ]
            }
        ]
    },
    {
        id: 3,
        title: "🌱 Practical Wellness",
        description: "Apply wellness principles to your daily life",
        color: "from-green-50 to-lime-50",
        borderColor: "border-green-300",
        textColor: "text-green-800",
        icon: "🌿",
        units: [
            {
                id: 10,
                title: "Sleep & Rest",
                description: "Master the art of restorative sleep and deep relaxation",
                order: 10,
                lessons: [
                    {
                        id: 33,
                        title: "Sleep Hygiene Basics",
                        order: 1,
                        unitId: 10,
                        completed: false,
                        challenges: []
                    },
                    {
                        id: 34,
                        title: "Relaxation Techniques",
                        order: 2,
                        unitId: 10,
                        completed: false,
                        challenges: []
                    },
                    {
                        id: 35,
                        title: "Bedtime Rituals",
                        order: 3,
                        unitId: 10,
                        completed: false,
                        challenges: []
                    },
                    {
                        id: 36,
                        title: "Restorative Practices",
                        order: 4,
                        unitId: 10,
                        completed: false,
                        challenges: []
                    }
                ]
            },
            {
                id: 11,
                title: "Emotional Intelligence",
                description: "Develop emotional awareness and healthy relationships",
                order: 11,
                lessons: [
                    {
                        id: 37,
                        title: "Emotional Awareness",
                        order: 1,
                        unitId: 11,
                        completed: false,
                        challenges: []
                    },
                    {
                        id: 38,
                        title: "Emotional Regulation",
                        order: 2,
                        unitId: 11,
                        completed: false,
                        challenges: []
                    },
                    {
                        id: 39,
                        title: "Relationship Wellness",
                        order: 3,
                        unitId: 11,
                        completed: false,
                        challenges: []
                    },
                    {
                        id: 40,
                        title: "Communication Skills",
                        order: 4,
                        unitId: 11,
                        completed: false,
                        challenges: []
                    }
                ]
            },
            {
                id: 13,
                title: "Nature Connection",
                description: "Reconnect with nature's healing wisdom and rhythms",
                order: 13,
                lessons: [
                    {
                        id: 45,
                        title: "Nature Awareness",
                        order: 1,
                        unitId: 13,
                        completed: false,
                        challenges: []
                    },
                    {
                        id: 46,
                        title: "Seasonal Wellness",
                        order: 2,
                        unitId: 13,
                        completed: false,
                        challenges: []
                    },
                    {
                        id: 47,
                        title: "Outdoor Practices",
                        order: 3,
                        unitId: 13,
                        completed: false,
                        challenges: []
                    },
                    {
                        id: 48,
                        title: "Environmental Healing",
                        order: 4,
                        unitId: 13,
                        completed: false,
                        challenges: []
                    }
                ]
            }
        ]
    },
    {
        id: 4,
        title: "🔮 Advanced Wellness",
        description: "Master advanced techniques and create your ideal life",
        color: "from-purple-50 to-pink-50",
        borderColor: "border-purple-300",
        textColor: "text-purple-800",
        icon: "✨",
        units: [
            {
                id: 12,
                title: "Energy & Chakras",
                description: "Balance your energy centers and enhance your vitality",
                order: 12,
                lessons: [
                    {
                        id: 41,
                        title: "Energy Basics",
                        order: 1,
                        unitId: 12,
                        completed: false,
                        challenges: []
                    },
                    {
                        id: 42,
                        title: "Chakra Introduction",
                        order: 2,
                        unitId: 12,
                        completed: false,
                        challenges: []
                    },
                    {
                        id: 43,
                        title: "Chakra Balancing",
                        order: 3,
                        unitId: 12,
                        completed: false,
                        challenges: []
                    },
                    {
                        id: 44,
                        title: "Energy Protection",
                        order: 4,
                        unitId: 12,
                        completed: false,
                        challenges: []
                    }
                ]
            },
            {
                id: 14,
                title: "Manifestation & Goals",
                description: "Create your ideal life through focused intention and action",
                order: 14,
                lessons: [
                    {
                        id: 49,
                        title: "Vision Setting",
                        order: 1,
                        unitId: 14,
                        completed: false,
                        challenges: []
                    },
                    {
                        id: 50,
                        title: "Goal Achievement",
                        order: 2,
                        unitId: 14,
                        completed: false,
                        challenges: []
                    },
                    {
                        id: 51,
                        title: "Abundance Mindset",
                        order: 3,
                        unitId: 14,
                        completed: false,
                        challenges: []
                    },
                    {
                        id: 52,
                        title: "Manifestation Integration",
                        order: 4,
                        unitId: 14,
                        completed: false,
                        challenges: []
                    }
                ]
            },
            {
                id: 5,
                title: "Luna AI Guidance",
                description: "Connect with your AI wellness companion Luna",
                order: 5,
                lessons: [
                    {
                        id: 14,
                        title: "Meet Luna",
                        order: 1,
                        unitId: 5,
                        completed: false,
                        challenges: []
                    },
                    {
                        id: 15,
                        title: "Daily Check-ins",
                        order: 2,
                        unitId: 5,
                        completed: false,
                        challenges: []
                    },
                    {
                        id: 16,
                        title: "Personalized Guidance",
                        order: 3,
                        unitId: 5,
                        completed: false,
                        challenges: []
                    },
                    {
                        id: 17,
                        title: "Luna's Wisdom",
                        order: 4,
                        unitId: 5,
                        completed: false,
                        challenges: []
                    }
                ]
            }
        ]
    }
];

const mockCourseProgress = {
    activeLesson: {
        id: 2,
        title: "Earth Grounding Exercise",
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

// Enhanced Category Section Component
const CategorySection = ({ category, courseProgress, lessonPercentage }: CategorySectionProps) => {
    const { t } = useLanguage();

    return (
        <div className="mb-20">
            {/* Enhanced Category Header with Icon and Styling */}
            <div className={`mb-8 p-8 bg-gradient-to-r ${category.color} rounded-3xl border-2 ${category.borderColor} shadow-lg`}>
                <div className="flex items-center gap-4 mb-4">
                    <div className="text-4xl">{category.icon}</div>
                    <h2 className={`text-3xl font-bold ${category.textColor} flex items-center gap-2`}>
                        {t(`learn.category${category.id}.title`)}
                    </h2>
                </div>
                <p className={`${category.textColor} text-xl leading-relaxed`}>
                    {t(`learn.category${category.id}.description`)}
                </p>
                <div className="mt-4 flex items-center gap-2">
                    <div className="h-1 bg-white/30 rounded-full flex-1">
                        <div
                            className={`h-full bg-white/60 rounded-full transition-all duration-300 ${category.id === 1 ? 'w-[45%]' :
                                category.id === 2 ? 'w-[25%]' :
                                    category.id === 3 ? 'w-[15%]' : 'w-[5%]'
                                }`}
                        />
                    </div>
                    <span className={`text-sm ${category.textColor} font-medium`}>
                        {category.units.length} {t('learn.units')}
                    </span>
                </div>
            </div>

            {/* Units in this category */}
            <div className="space-y-8">
                {category.units.map((unit: Unit) => (
                    <div key={unit.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-2">
                        <WellnessUnit
                            id={unit.id}
                            order={unit.order}
                            description={unit.description}
                            title={unit.title}
                            lessons={unit.lessons}
                            activeLesson={courseProgress.activeLesson}
                            activeLessonPercentage={lessonPercentage}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

const LearnPage = () => {
    const isPro = false;
    const { t, currentLanguage } = useLanguage();

    return (
        <Suspense fallback={<LoadingSkeleton />}>
            <div className="flex flex-row-reverse gap-[48px] px-6" key={currentLanguage}>
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
                    <Header title={t('learn.title')} />
                    <LunaCompanion />

                    {/* Journey Overview */}
                    <div className="mb-12 p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl border-2 border-indigo-200">
                        <h3 className="text-xl font-bold text-indigo-800 mb-2">🌟 Your Learning Path</h3>
                        <p className="text-indigo-700">
                            Begin with Elemental Foundations, then explore Mind-Body-Spirit connection,
                            apply Practical Wellness to daily life, and master Advanced Wellness techniques.
                        </p>
                    </div>

                    {/* Render each category as a distinct section */}
                    {wellnessCategories.map((category) => (
                        <CategorySection
                            key={category.id}
                            category={category}
                            courseProgress={mockCourseProgress}
                            lessonPercentage={mockLessonPercentage}
                        />
                    ))}
                </FeedWrapper>
            </div>
        </Suspense>
    );
};

export default LearnPage;
