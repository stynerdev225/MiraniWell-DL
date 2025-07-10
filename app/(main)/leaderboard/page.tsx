import Image from "next/image";
import { redirect } from "next/navigation";

import { FeedWrapper } from "@/components/feed-wrapper";
import { LanguageToggle } from "@/components/language-toggle";
import { Promo } from "@/components/promo";
import { Quests } from "@/components/quests";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { UserProgress } from "@/components/user-progress";
import {
  getTopTenUsers,
  getUserProgress,
  getUserSubscription,
} from "@/db/queries";

type LeaderboardUser = {
  userId: string;
  userImageSrc: string;
  userName: string;
  points: number;
};

const LeaderboardPage = async () => {
  const userProgressData = getUserProgress();
  const userSubscriptionData = getUserSubscription();
  const leaderboardData = getTopTenUsers();

  const [userProgress, userSubscription, leaderboard] = await Promise.all([
    userProgressData,
    userSubscriptionData,
    leaderboardData,
  ]) as [
      Awaited<ReturnType<typeof getUserProgress>>,
      Awaited<ReturnType<typeof getUserSubscription>>,
      LeaderboardUser[]
    ];

  if (!userProgress || !userProgress.activeCourse) redirect("/courses");

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
