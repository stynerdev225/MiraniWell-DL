"use client";

import { useState } from "react";

import { useUser } from "@clerk/nextjs";
import { Star, Sparkles, SkipForward } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

const wellnessQuestions = [
  {
    id: 1,
    question: "How are you feeling emotionally today?",
    type: "mood",
    options: [
      { id: "great", text: "Amazing! Full of joy", emoji: "😊", points: 5, color: "bg-green-400" },
      { id: "good", text: "Pretty good", emoji: "🙂", points: 4, color: "bg-blue-400" },
      { id: "okay", text: "Just okay", emoji: "😐", points: 3, color: "bg-yellow-400" },
      { id: "low", text: "Feeling low", emoji: "😔", points: 2, color: "bg-orange-400" },
      { id: "struggling", text: "Really struggling", emoji: "😢", points: 1, color: "bg-red-400" }
    ],
    image: "/hero.svg"
  },
  {
    id: 2,
    question: "What's your energy level right now?",
    type: "energy",
    options: [
      { id: "high", text: "Bursting with energy!", emoji: "⚡", points: 5, color: "bg-yellow-400" },
      { id: "good", text: "Feeling energized", emoji: "💪", points: 4, color: "bg-green-400" },
      { id: "moderate", text: "Moderate energy", emoji: "👍", points: 3, color: "bg-blue-400" },
      { id: "low", text: "Feeling drained", emoji: "😮‍💨", points: 2, color: "bg-orange-400" },
      { id: "exhausted", text: "Completely exhausted", emoji: "😴", points: 1, color: "bg-red-400" }
    ],
    image: "/bulb.svg"
  },
  {
    id: 3,
    question: "How stressed are you feeling today?",
    type: "stress",
    options: [
      { id: "calm", text: "Completely calm", emoji: "🧘", points: 5, color: "bg-green-400" },
      { id: "relaxed", text: "Pretty relaxed", emoji: "😌", points: 4, color: "bg-blue-400" },
      { id: "neutral", text: "Neither stressed nor calm", emoji: "😐", points: 3, color: "bg-yellow-400" },
      { id: "stressed", text: "Somewhat stressed", emoji: "😰", points: 2, color: "bg-orange-400" },
      { id: "overwhelmed", text: "Very overwhelmed", emoji: "😵‍💫", points: 1, color: "bg-red-400" }
    ],
    image: "/voice.svg"
  },
  {
    id: 4,
    question: "What are three things you're grateful for today?",
    type: "gratitude",
    isInput: true,
    image: "/heart.svg"
  },
  {
    id: 5,
    question: "What's your intention for today?",
    type: "intention",
    isInput: true,
    image: "/learn.svg"
  },
  {
    id: 6,
    question: "Which element is calling to you today?",
    type: "element",
    options: [
      { id: "earth", text: "Earth - I need grounding & stability", emoji: "🌱", points: 5, color: "bg-green-500" },
      { id: "water", text: "Water - I need emotional healing", emoji: "💧", points: 5, color: "bg-blue-500" },
      { id: "fire", text: "Fire - I need energy & transformation", emoji: "🔥", points: 5, color: "bg-red-500" },
      { id: "air", text: "Air - I need mental clarity", emoji: "💨", points: 5, color: "bg-gray-400" }
    ],
    image: "/hero.svg"
  },
  {
    id: 7,
    question: "How connected do you feel to your body right now?",
    type: "body_awareness",
    options: [
      { id: "very_connected", text: "Very connected & aware", emoji: "🧘‍♀️", points: 5, color: "bg-green-400" },
      { id: "somewhat", text: "Somewhat connected", emoji: "😌", points: 4, color: "bg-blue-400" },
      { id: "neutral", text: "Neutral awareness", emoji: "😐", points: 3, color: "bg-yellow-400" },
      { id: "disconnected", text: "Feeling disconnected", emoji: "😕", points: 2, color: "bg-orange-400" },
      { id: "very_disconnected", text: "Very disconnected", emoji: "😵", points: 1, color: "bg-red-400" }
    ],
    image: "/voice.svg"
  },
  {
    id: 8,
    question: "What are three things you're grateful for today?",
    type: "gratitude",
    isInput: true,
    image: "/heart.svg"
  },
  {
    id: 9,
    question: "What's your intention for today?",
    type: "intention",
    isInput: true,
    image: "/learn.svg"
  },
  {
    id: 10,
    question: "How would you rate your spiritual connection today?",
    type: "spiritual",
    options: [
      { id: "deeply_connected", text: "Deeply connected to my higher self", emoji: "✨", points: 5, color: "bg-purple-500" },
      { id: "connected", text: "Feeling spiritually aligned", emoji: "😇", points: 4, color: "bg-indigo-400" },
      { id: "neutral", text: "Neutral spiritual state", emoji: "😐", points: 3, color: "bg-yellow-400" },
      { id: "seeking", text: "Seeking deeper connection", emoji: "😔", points: 2, color: "bg-orange-400" },
      { id: "lost", text: "Feeling spiritually lost", emoji: "😢", points: 1, color: "bg-red-400" }
    ],
    image: "/mascot.svg"
  },
  {
    id: 11,
    question: "Take a moment to reflect and journal your thoughts",
    type: "journal",
    isTextarea: true,
    image: "/bulb.svg"
  }
];

const inspirationalQuotes = [
  "Your mind is a garden, your thoughts are the seeds. Plant positive thoughts and watch your life bloom. 🌸",
  "The body benefits from movement, the mind benefits from stillness, the soul benefits from connection. ✨",
  "Healing is not about becoming someone else, it's about becoming who you truly are. 🦋",
  "Every breath is a new beginning, every heartbeat a fresh start. 💫",
  "Your wellness journey is unique to you. Honor your pace, celebrate your progress. 🌟",
  "In the quiet moments, your soul speaks the loudest. Listen with love. 🕯️",
  "Balance is not something you find, it's something you create daily. ⚖️",
  "Earth grounds you, Water cleanses you, Fire transforms you, Air clarifies you. 🌍",
  "Your body is your temple, your mind is your sanctuary, your spirit is your guide. 🏠",
  "Gratitude turns what we have into enough, and more. It turns denial into acceptance. 🙏",
  "The elements within you mirror the elements around you. Find harmony in both. 🌀"
];

const elementalGuidance = {
  earth: "Today, focus on grounding practices. Feel your feet on the earth, breathe deeply, and find your center. 🌱",
  water: "Let emotions flow like water today. Practice emotional release and cleansing rituals. 💧",
  fire: "Ignite your inner fire today. Focus on transformation and burning away what no longer serves you. 🔥",
  air: "Breathe deeply and seek mental clarity today. Let fresh perspectives flow through you. 💨"
};

export default function DailyCheckinPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, { points?: number; skipped?: boolean;[key: string]: unknown }>>({});
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState("");
  const [gratitudeItems, setGratitudeItems] = useState(["", "", ""]);
  const [showResult, setShowResult] = useState(false);
  const [totalPoints, setTotalPoints] = useState(0);
  const [showGreeting, setShowGreeting] = useState(true);
  const { user } = useUser();
  const router = useRouter();

  const firstName = user?.firstName || "Friend";
  const todayQuote = inspirationalQuotes[Math.floor(Math.random() * inspirationalQuotes.length)];

  // Mock journal stats
  const journalStats = {
    streak: 7,
    totalEntries: 23,
    weeklyMood: [4, 3, 5, 4, 5, 3, 4], // Last 7 days mood scores
    elementalBalance: {
      earth: 3,
      water: 4,
      fire: 2,
      air: 5
    }
  };

  const progress = ((currentQuestion + 1) / wellnessQuestions.length) * 100;
  const question = wellnessQuestions[currentQuestion];

  const handleOptionSelect = (option: { id: string }) => {
    setSelectedOption(option.id);
  };

  const handleNext = () => {
    let answerData;

    if (question.type === 'gratitude') {
      if (gratitudeItems.filter(item => item.trim()).length < 3) return;
      answerData = { gratitude: gratitudeItems.filter(item => item.trim()), points: 5 };
    } else if (question.isInput || question.isTextarea) {
      if (!inputValue.trim()) return;
      answerData = { [question.type]: inputValue.trim(), points: 5 };
    } else {
      if (!selectedOption || !question.options) return;
      answerData = question.options.find(opt => opt.id === selectedOption) || { points: 0 };
    }

    const newAnswers = { ...answers, [question.id]: answerData };
    setAnswers(newAnswers);

    if (currentQuestion < wellnessQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
      setInputValue("");
      setGratitudeItems(["", "", ""]);
    } else {
      const points = Object.values(newAnswers).reduce((sum: number, answer) => sum + (answer.points || 0), 0);
      setTotalPoints(points);
      setShowResult(true);
    }
  };

  const handleSkipQuestion = () => {
    const newAnswers = { ...answers, [question.id]: { skipped: true, points: 0 } };
    setAnswers(newAnswers);

    if (currentQuestion < wellnessQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
      setInputValue("");
      setGratitudeItems(["", "", ""]);
    } else {
      const points = Object.values(newAnswers).reduce((sum: number, answer) => sum + (answer.points || 0), 0);
      setTotalPoints(points);
      setShowResult(true);
    }
  };

  const handleSkipCheckin = () => {
    router.push('/learn');
  };

  const handleGratitudeChange = (index: number, value: string) => {
    const newItems = [...gratitudeItems];
    newItems[index] = value;
    setGratitudeItems(newItems);
  };

  const getWellnessMessage = (points: number) => {
    if (points >= 45) return { message: "You're thriving in perfect harmony! ✨", color: "text-green-600", stars: 5 };
    if (points >= 35) return { message: "You're doing amazing! 🌟", color: "text-blue-600", stars: 4 };
    if (points >= 25) return { message: "You're on a beautiful path! 💫", color: "text-yellow-600", stars: 3 };
    if (points >= 15) return { message: "Let's nurture your wellness journey 🌱", color: "text-orange-600", stars: 2 };
    return { message: "Luna is here to guide and support you 💜", color: "text-purple-600", stars: 1 };
  };

  // Greeting Screen
  if (showGreeting) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-100 to-blue-100 flex flex-col">
        {/* Skip Check-in Button */}
        <div className="absolute top-4 right-4 z-10">
          <Button
            onClick={handleSkipCheckin}
            variant="secondary"
            size="sm"
            className="bg-white/90 border-2 border-gray-300 text-gray-700 hover:bg-white hover:border-gray-400 shadow-lg"
          >
            Skip Check-in
          </Button>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-white/30 h-2">
          <div className="h-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-full" style={{ width: '0%' }} />
        </div>

        <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
          <div className="mb-8">
            <Image
              src="/mascot.svg"
              alt="Luna waving"
              width={200}
              height={200}
              className="mx-auto animate-bounce"
            />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Hello, {firstName}! 👋
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-md">
            Ready for your daily wellness check-in with Luna AI by Miriani Well?
          </p>

          <Button
            onClick={() => setShowGreeting(false)}
            className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-8 py-4 text-lg rounded-2xl"
          >
            Let&#39;s Begin! ✨
          </Button>
        </div>
      </div>
    );
  }

  if (showResult) {
    const result = getWellnessMessage(totalPoints);
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-100 to-pink-100 flex flex-col">
        {/* Progress Bar */}
        <div className="w-full bg-white/30 h-2">
          <div className="h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" style={{ width: '100%' }} />
        </div>

        <div className="flex-1 flex flex-col items-center justify-center p-8 text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <Image src="/mascot.svg" alt="Luna celebrating" width={200} height={200} className="mx-auto animate-bounce" />
          </div>

          <h2 className="text-4xl font-bold text-gray-800 mb-4">Amazing work, {firstName}!</h2>
          <p className={`text-2xl font-semibold mb-8 ${result.color}`}>{result.message}</p>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 w-full">
            {/* Wellness Score */}
            <div className="bg-white/80 rounded-2xl p-4 backdrop-blur-sm">
              <p className="text-sm text-gray-600 mb-2">Today&#39;s Score</p>
              <p className="text-2xl font-bold text-purple-600">{totalPoints}/55</p>
              <div className="flex justify-center mt-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={`w-4 h-4 mx-1 ${i < result.stars ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
                ))}
              </div>
            </div>

            {/* Journal Stats */}
            <div className="bg-white/80 rounded-2xl p-4 backdrop-blur-sm">
              <p className="text-sm text-gray-600 mb-2">Journal Stats</p>
              <p className="text-xl font-bold text-green-600">{journalStats.streak} day streak</p>
              <p className="text-xs text-gray-500">{journalStats.totalEntries} total entries</p>
            </div>

            {/* Weekly Mood */}
            <div className="bg-white/80 rounded-2xl p-4 backdrop-blur-sm">
              <p className="text-sm text-gray-600 mb-2">Weekly Mood</p>
              <div className="flex justify-center items-end gap-1 h-8">
                {journalStats.weeklyMood.map((mood, i) => (
                  <div key={i} className="bg-blue-400 rounded-t" style={{ height: `${mood * 15}%`, width: '8px' }} />
                ))}
              </div>
              <p className="text-xs text-gray-500 mt-1">Last 7 days</p>
            </div>

            {/* Elemental Balance */}
            <div className="bg-white/80 rounded-2xl p-4 backdrop-blur-sm">
              <p className="text-sm text-gray-600 mb-2">Element Balance</p>
              <div className="grid grid-cols-2 gap-1 text-xs">
                <div className="flex items-center gap-1">
                  <span>🌱</span>
                  <span>{journalStats.elementalBalance.earth}</span>
                </div>
                <div className="flex items-center gap-1">
                  <span>💧</span>
                  <span>{journalStats.elementalBalance.water}</span>
                </div>
                <div className="flex items-center gap-1">
                  <span>🔥</span>
                  <span>{journalStats.elementalBalance.fire}</span>
                </div>
                <div className="flex items-center gap-1">
                  <span>💨</span>
                  <span>{journalStats.elementalBalance.air}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Elemental Guidance */}
          {answers[6] && (
            <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-2xl p-6 mb-6 w-full">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">🌍 Elemental Guidance</h3>
              <p className="text-gray-700">{elementalGuidance[answers[6].id as keyof typeof elementalGuidance]}</p>
            </div>
          )}

          {/* Daily Inspiration */}
          <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-2xl p-6 mb-8 w-full">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">✨ Daily Inspiration</h3>
            <p className="text-gray-700 italic">{todayQuote}</p>
          </div>

          <Button
            onClick={() => router.push('/learn')}
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 text-lg rounded-2xl"
          >
            Continue to Dashboard ✨
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 flex flex-col">
      {/* Skip Check-in Button */}
      <div className="absolute top-4 right-4 z-10">
        <Button
          onClick={handleSkipCheckin}
          variant="secondary"
          size="sm"
          className="bg-white/90 border-2 border-gray-300 text-gray-700 hover:bg-white hover:border-gray-400 shadow-lg"
        >
          Skip Check-in
        </Button>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-white/30 h-2">
        <div
          className="h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="flex-1 flex flex-col items-center justify-center p-8">
        {/* Animated Character */}
        <div className="mb-8">
          <Image
            src={question.image}
            alt="Wellness Character"
            width={250}
            height={250}
            className="mx-auto animate-pulse hover:animate-bounce transition-all duration-300"
          />
        </div>

        {/* Question */}
        <div className="text-center mb-12 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{question.question}</h2>
          <p className="text-lg text-gray-600">Question {currentQuestion + 1} of {wellnessQuestions.length}</p>
        </div>

        {/* Answer Options or Input Fields */}
        <div className="w-full max-w-4xl mb-12">
          {question.type === 'gratitude' ? (
            <div className="space-y-4">
              {gratitudeItems.map((item, index) => (
                <div key={index} className="bg-white/80 rounded-2xl p-4 backdrop-blur-sm">
                  <input
                    type="text"
                    placeholder={`Gratitude ${index + 1}...`}
                    value={item}
                    onChange={(e) => handleGratitudeChange(index, e.target.value)}
                    className="w-full p-4 text-lg border-2 border-gray-200 rounded-xl focus:border-purple-400 focus:outline-none"
                  />
                </div>
              ))}
            </div>
          ) : question.isTextarea ? (
            <div className="bg-white/80 rounded-2xl p-4 backdrop-blur-sm">
              <textarea
                placeholder="Share your thoughts and reflections..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                rows={6}
                className="w-full p-4 text-lg border-2 border-gray-200 rounded-xl focus:border-purple-400 focus:outline-none resize-none"
              />
            </div>
          ) : question.isInput ? (
            <div className="bg-white/80 rounded-2xl p-4 backdrop-blur-sm">
              <input
                type="text"
                placeholder="Enter your intention..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="w-full p-4 text-lg border-2 border-gray-200 rounded-xl focus:border-purple-400 focus:outline-none"
              />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {question.options?.map((option) => (
                <button
                  key={option.id}
                  onClick={() => handleOptionSelect(option)}
                  className={`p-6 rounded-2xl border-3 transition-all duration-300 text-left hover:scale-105 ${selectedOption === option.id
                      ? `${option.color} border-white text-white shadow-2xl transform scale-105`
                      : 'bg-white/80 border-gray-200 hover:border-gray-300 hover:shadow-xl backdrop-blur-sm'
                    }`}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-4xl">{option.emoji}</span>
                    <span className="text-lg font-medium">{option.text}</span>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 items-center">
          <Button
            onClick={handleSkipQuestion}
            variant="secondary"
            className="bg-white border-2 border-gray-400 text-gray-700 hover:bg-gray-50 hover:border-gray-500 px-6 py-3 rounded-2xl shadow-md font-medium"
          >
            <SkipForward className="w-4 h-4 mr-2" />
            Skip Question
          </Button>

          <Button
            onClick={handleNext}
            disabled={
              question.type === 'gratitude'
                ? gratitudeItems.filter(item => item.trim()).length < 3
                : question.isInput || question.isTextarea
                  ? !inputValue.trim()
                  : !selectedOption
            }
            className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 disabled:opacity-50 disabled:cursor-not-allowed text-white px-8 py-4 text-lg rounded-2xl"
          >
            {currentQuestion < wellnessQuestions.length - 1 ? 'Next Question' : 'Complete Check-in'}
            <Sparkles className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}