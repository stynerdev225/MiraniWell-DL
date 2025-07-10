import { FeedWrapper } from "@/components/feed-wrapper";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { UserProgress } from "@/components/user-progress";
import { LunaCompanion } from "@/components/luna-companion";

// Mock data for mind-body-spirit page
const mockUserProgress = {
  activeCourse: {
    id: 1,
    title: "English Wellness",
    imageSrc: "/us.svg",
  },
  hearts: 5,
  points: 250,
  hasActiveSubscription: false,
};

const mockUserSubscription = {
  isActive: false,
};

const MindBodySpiritPage = () => {
  const userProgress = mockUserProgress;
  const userSubscription = mockUserSubscription;

  const isPro = !!userSubscription?.isActive;

  const todayProgress = {
    mind: { completed: 2, total: 3, streak: 7 },
    body: { completed: 1, total: 3, streak: 3 },
    spirit: { completed: 0, total: 3, streak: 0 }
  };

  const practices = [
    {
      id: 1,
      category: "Mind",
      title: "Meditation & Mindfulness",
      icon: "🧠",
      practices: [
        {
          name: "Daily Meditation",
          duration: "20 min",
          level: "Beginner",
          description: "Guided meditation for inner peace",
          completed: true,
          points: 50
        },
        {
          name: "Mindful Breathing",
          duration: "10 min",
          level: "All Levels",
          description: "Focus on breath awareness",
          completed: true,
          points: 30
        },
        {
          name: "Thought Observation",
          duration: "15 min",
          level: "Intermediate",
          description: "Watch thoughts without judgment",
          completed: false,
          points: 40
        }
      ],
      color: "from-purple-400 to-indigo-500"
    },
    {
      id: 2,
      category: "Body",
      title: "Physical Wellness",
      icon: "💪",
      practices: [
        {
          name: "Yoga Flow",
          duration: "30 min",
          level: "All Levels",
          description: "Gentle movement and stretching",
          completed: true,
          points: 60
        },
        {
          name: "Body Scan",
          duration: "25 min",
          level: "Beginner",
          description: "Progressive muscle relaxation",
          completed: false,
          points: 50
        },
        {
          name: "Energy Healing",
          duration: "20 min",
          level: "Advanced",
          description: "Channel healing energy through body",
          completed: false,
          points: 70
        }
      ],
      color: "from-green-400 to-teal-500"
    },
    {
      id: 3,
      category: "Spirit",
      title: "Spiritual Connection",
      icon: "✨",
      practices: [
        {
          name: "Soul Alignment",
          duration: "35 min",
          level: "Intermediate",
          description: "Connect with your true essence",
          completed: false,
          points: 80
        },
        {
          name: "Chakra Balancing",
          duration: "40 min",
          level: "All Levels",
          description: "Align and balance energy centers",
          completed: false,
          points: 90
        },
        {
          name: "Higher Self Connection",
          duration: "45 min",
          level: "Advanced",
          description: "Commune with your higher wisdom",
          completed: false,
          points: 100
        }
      ],
      color: "from-pink-400 to-rose-500"
    }
  ];

  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWrapper>
        {userProgress && (
          <UserProgress
            activeCourse={userProgress.activeCourse}
            hearts={userProgress.hearts}
            points={userProgress.points}
            hasActiveSubscription={isPro}
          />
        )}
      </StickyWrapper>

      <FeedWrapper>
        <div className="w-full flex flex-col items-center">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-neutral-700 mb-2">
              🧘 Mind Body Spirit Integration
            </h1>
            <p className="text-gray-600">Holistic wellness through integrated practices</p>
          </div>

          {/* Progress Overview */}
          <div className="bg-white rounded-xl p-6 shadow-lg mb-8 w-full max-w-4xl">
            <h2 className="text-xl font-bold text-gray-800 mb-4">📈 Today's Progress</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {Object.entries(todayProgress).map(([key, progress]) => {
                const percentage = (progress.completed / progress.total) * 100;
                return (
                  <div key={key} className="text-center">
                    <div className="relative w-20 h-20 mx-auto mb-3">
                      <svg className="w-20 h-20 transform -rotate-90">
                        <circle
                          cx="40"
                          cy="40"
                          r="30"
                          stroke="#e5e7eb"
                          strokeWidth="6"
                          fill="transparent"
                        />
                        <circle
                          cx="40"
                          cy="40"
                          r="30"
                          stroke={key === 'mind' ? '#8b5cf6' : key === 'body' ? '#10b981' : '#ec4899'}
                          strokeWidth="6"
                          fill="transparent"
                          strokeDasharray={`${percentage * 1.88} 188`}
                          strokeLinecap="round"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-sm font-bold text-gray-700">{progress.completed}/{progress.total}</span>
                      </div>
                    </div>
                    <h3 className="font-semibold text-gray-800 capitalize">{key}</h3>
                    <p className="text-sm text-gray-600">{progress.streak} day streak</p>
                  </div>
                );
              })}
            </div>
          </div>

          <LunaCompanion />

          <div className="space-y-8 w-full max-w-4xl">
            {practices.map((section) => (
              <div key={section.id} className="space-y-4">
                <div className={`bg-gradient-to-r ${section.color} rounded-xl p-6 text-white`}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl">{section.icon}</span>
                    <div>
                      <h2 className="text-2xl font-bold">{section.category}</h2>
                      <p className="text-white/90">{section.title}</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {section.practices.map((practice, index) => (
                    <div
                      key={index}
                      className={`rounded-lg p-4 shadow-md hover:shadow-lg transition-all cursor-pointer border-2 ${practice.completed
                          ? 'bg-green-50 border-green-200'
                          : 'bg-white border-gray-200 hover:border-gray-300'
                        }`}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-semibold text-gray-800">{practice.name}</h3>
                        {practice.completed && (
                          <span className="text-green-500 text-lg">✓</span>
                        )}
                      </div>

                      <p className="text-sm text-gray-600 mb-3">{practice.description}</p>

                      <div className="flex justify-between items-center text-sm text-gray-600 mb-3">
                        <span>🕰️ {practice.duration}</span>
                        <span className="bg-gray-100 px-2 py-1 rounded-full text-xs">
                          {practice.level}
                        </span>
                      </div>

                      <div className="flex justify-between items-center mb-3">
                        <span className="text-sm text-yellow-600 font-medium">
                          ⭐ {practice.points} points
                        </span>
                        {practice.completed && (
                          <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded-full">
                            Completed
                          </span>
                        )}
                      </div>

                      <button className={`w-full px-3 py-2 rounded-lg text-sm font-medium transition-colors ${practice.completed
                          ? 'bg-green-100 text-green-700 hover:bg-green-200'
                          : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                        }`}>
                        {practice.completed ? '🎆 Practice Again' : '🎧 Start Practice'}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </FeedWrapper>
    </div>
  );
};

export default MindBodySpiritPage;