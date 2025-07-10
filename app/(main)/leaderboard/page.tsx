import Image from "next/image";

import { FeedWrapper } from "@/components/feed-wrapper";
import { LanguageToggle } from "@/components/language-toggle";
import { Promo } from "@/components/promo";
import { Quests } from "@/components/quests";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { UserProgress } from "@/components/user-progress";

type LeaderboardUser = {
  userId: string;
  userImageSrc: string;
  userName: string;
  points: number;
};

// Mock data for leaderboard
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

const mockLeaderboard: LeaderboardUser[] = [
  {
    userId: "user_1",
    userImageSrc: "/boy.svg",
    userName: "Alex Chen",
    points: 1250,
  },
  {
    userId: "user_2",
    userImageSrc: "/girl.svg",
    userName: "Sarah Johnson",
    points: 1180,
  },
  {
    userId: "user_3",
    userImageSrc: "/man.svg",
    userName: "Michael Rodriguez",
    points: 1050,
  },
  {
    userId: "user_4",
    userImageSrc: "/face-1.svg",
    userName: "Emma Wilson",
    points: 980,
  },
  {
    userId: "user_5",
    userImageSrc: "/face-2.svg",
    userName: "David Kim",
    points: 875,
  },
  {
    userId: "user_6",
    userImageSrc: "/face-3.svg",
    userName: "Jessica Martinez",
    points: 720,
  },
  {
    userId: "user_7",
    userImageSrc: "/face-4.svg",
    userName: "Ryan Taylor",
    points: 650,
  },
  {
    userId: "user_8",
    userImageSrc: "/boy.svg",
    userName: "Sofia Anderson",
    points: 580,
  },
  {
    userId: "user_9",
    userImageSrc: "/girl.svg",
    userName: "Lucas Thompson",
    points: 420,
  },
  {
    userId: "user_10",
    userImageSrc: "/man.svg",
    userName: "Isabella Garcia",
    points: 380,
  },
];

const LeaderboardPage = () => {
  const userProgress = mockUserProgress;
  const userSubscription = mockUserSubscription;
  const leaderboard = mockLeaderboard;

  const isPro = !!userSubscription?.isActive;

  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWrapper>
        <UserProgress
          activeCourse={userProgress.activeCourse}
          hearts={userProgress.hearts}
          points={userProgress.points}
          hasActiveSubscription={isPro}
        />
        {!isPro && <Promo />}
        <Quests points={userProgress.points} />
      </StickyWrapper>

      <FeedWrapper>
        <div className="flex w-full flex-col items-center">
          <div className="sticky top-0 mb-5 flex w-full items-center justify-between border-b-2 bg-white pb-3 text-neutral-400 lg:z-50 lg:mt-[-28px] lg:pt-[28px]">
            <div aria-hidden />
            <h1 className="text-lg font-bold text-neutral-800">Leaderboard</h1>
            <LanguageToggle />
          </div>

          <Image
            src="/leaderboard.svg"
            alt="Leaderboard"
            height={90}
            width={90}
          />

          <p className="mb-6 text-center text-lg text-muted-foreground">
            See where you stand among other learners in the community.
          </p>

          <Separator className="mb-4 h-0.5 rounded-full" />
          {leaderboard.map((userProgress, i) => (
            <div
              key={userProgress.userId}
              className="flex w-full items-center rounded-xl p-2 px-4 hover:bg-gray-200/50"
            >
              <p className="mr-4 font-bold text-lime-700">{i + 1}</p>

              <Avatar className="ml-3 mr-6 h-12 w-12 border bg-green-500">
                <AvatarImage
                  src={userProgress.userImageSrc}
                  className="object-cover"
                />
              </Avatar>

              <p className="flex-1 font-bold text-neutral-800">
                {userProgress.userName}
              </p>
              <p className="text-muted-foreground">{userProgress.points} XP</p>
            </div>
          ))}
        </div>
      </FeedWrapper>
    </div>
  );
};

export default LeaderboardPage;
