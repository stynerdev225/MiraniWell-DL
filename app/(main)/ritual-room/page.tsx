import { FeedWrapper } from "@/components/feed-wrapper";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { UserProgress } from "@/components/user-progress";
import { LunaCompanion } from "@/components/luna-companion";
import { getUserProgress, getUserSubscription } from "@/db/queries";
import { redirect } from "next/navigation";

const RitualRoomPage = async () => {
  const userProgress = await getUserProgress();
  const userSubscription = await getUserSubscription();

  if (!userProgress || !userProgress.activeCourse) {
    redirect("/courses");
  }

  const isPro = !!userSubscription?.isActive;

  const rituals = [
    {
      id: 1,
      title: "Morning Earth Grounding",
      element: "🌱",
      duration: "10 min",
      description: "Connect with earth energy to start your day centered",
      color: "from-green-400 to-emerald-500",
      steps: [
        "Find a quiet outdoor space or sit near a plant",
        "Place your feet firmly on the ground",
        "Breathe deeply and visualize roots growing from your feet",
        "Feel the earth's stable, nurturing energy",
        "Set your intention for the day"
      ],
      benefits: ["Increased stability", "Reduced anxiety", "Enhanced focus"]
    },
    {
      id: 2,
      title: "Water Cleansing Ritual",
      element: "💧",
      duration: "15 min", 
      description: "Release emotional blockages with flowing water energy",
      color: "from-blue-400 to-cyan-500",
      steps: [
        "Prepare a bowl of clean water",
        "Light a white or blue candle",
        "Hold your hands over the water",
        "Visualize negative emotions flowing away",
        "Splash water gently on your face and hands"
      ],
      benefits: ["Emotional release", "Mental clarity", "Renewed energy"]
    },
    {
      id: 3,
      title: "Fire Transformation",
      element: "🔥",
      duration: "12 min",
      description: "Ignite your inner power and transform limiting beliefs",
      color: "from-red-400 to-orange-500",
      steps: [
        "Light a red or orange candle safely",
        "Write down limiting beliefs on paper",
        "Focus on the flame's transformative power",
        "Visualize burning away old patterns",
        "Safely burn the paper (optional)"
      ],
      benefits: ["Personal power", "Confidence boost", "Breaking patterns"]
    },
    {
      id: 4,
      title: "Air Clarity Breathing",
      element: "💨",
      duration: "8 min",
      description: "Clear mental fog with sacred breathwork practices",
      color: "from-gray-300 to-slate-400",
      steps: [
        "Sit comfortably with spine straight",
        "Inhale for 4 counts through your nose",
        "Hold breath for 4 counts",
        "Exhale for 6 counts through your mouth",
        "Repeat while focusing on mental clarity"
      ],
      benefits: ["Mental clarity", "Stress relief", "Enhanced focus"]
    }
  ];

  const dailyRituals = [
    { time: "6:00 AM", ritual: "Morning Earth Grounding", status: "completed" },
    { time: "12:00 PM", ritual: "Air Clarity Breathing", status: "pending" },
    { time: "6:00 PM", ritual: "Water Cleansing Ritual", status: "pending" },
    { time: "9:00 PM", ritual: "Fire Transformation", status: "locked" }
  ];

  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWrapper>
        <UserProgress
          activeCourse={userProgress.activeCourse}
          hearts={userProgress.hearts}
          points={userProgress.points}
          hasActiveSubscription={isPro}
        />
      </StickyWrapper>
      
      <FeedWrapper>
        <div className="w-full flex flex-col items-center">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-neutral-700 mb-2">
              🕯️ Sacred Ritual Room
            </h1>
            <p className="text-gray-600">Connect with elemental energies through guided rituals</p>
          </div>
          
          <LunaCompanion />
          
          {/* Daily Ritual Schedule */}
          <div className="bg-white rounded-xl p-6 shadow-lg mb-8 w-full max-w-4xl">
            <h2 className="text-xl font-bold text-gray-800 mb-4">📅 Today's Ritual Schedule</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {dailyRituals.map((item, index) => (
                <div key={index} className={`p-4 rounded-lg border-2 ${
                  item.status === 'completed' ? 'bg-green-50 border-green-200' :
                  item.status === 'pending' ? 'bg-blue-50 border-blue-200' :
                  'bg-gray-50 border-gray-200'
                }`}>
                  <div className="text-sm font-medium text-gray-600">{item.time}</div>
                  <div className="text-sm text-gray-800">{item.ritual}</div>
                  <div className={`text-xs mt-1 ${
                    item.status === 'completed' ? 'text-green-600' :
                    item.status === 'pending' ? 'text-blue-600' :
                    'text-gray-500'
                  }`}>
                    {item.status === 'completed' ? '✓ Complete' :
                     item.status === 'pending' ? '○ Ready' : '🔒 Locked'}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Ritual Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
            {rituals.map((ritual) => (
              <div key={ritual.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
                <div className={`bg-gradient-to-r ${ritual.color} p-6 text-white`}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl">{ritual.element}</span>
                    <div>
                      <h3 className="text-xl font-bold">{ritual.title}</h3>
                      <p className="text-white/80 text-sm">{ritual.duration}</p>
                    </div>
                  </div>
                  <p className="text-white/90">{ritual.description}</p>
                </div>
                
                <div className="p-6">
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Ritual Steps:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {ritual.steps.map((step, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-gray-400 mt-1">•</span>
                          {step}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Benefits:</h4>
                    <div className="flex flex-wrap gap-2">
                      {ritual.benefits.map((benefit, index) => (
                        <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <button className={`w-full bg-gradient-to-r ${ritual.color} text-white py-3 rounded-lg font-medium hover:opacity-90 transition-opacity`}>
                    🎧 Begin Guided Ritual
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </FeedWrapper>
    </div>
  );
};

export default RitualRoomPage;