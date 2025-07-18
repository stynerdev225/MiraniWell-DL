import Image from "next/image";

import { FeedWrapper } from "@/components/feed-wrapper";
import { LanguageToggle } from "@/components/language-toggle";
import { Promo } from "@/components/promo";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { Progress } from "@/components/ui/progress";
import { UserProgress } from "@/components/user-progress";
import { QUESTS } from "@/constants";

// Mock data for quests page
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

const QuestsPage = () => {
  const userProgress = mockUserProgress;
  const userSubscription = mockUserSubscription;

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
      </StickyWrapper>

      <FeedWrapper>
        <div className="flex w-full flex-col items-center">
          <div className="sticky top-0 mb-5 flex w-full items-center justify-between border-b-2 bg-white pb-3 text-neutral-400 lg:z-50 lg:mt-[-28px] lg:pt-[28px]">
            <div aria-hidden />
            <h1 className="text-lg font-bold text-neutral-800">Quests</h1>
            <LanguageToggle />
          </div>

          <Image src="/quests.svg" alt="Quests" height={90} width={90} />

          <p className="mb-6 text-center text-lg text-muted-foreground">
            Complete quests by earning points.
          </p>

          <ul className="w-full">
            {QUESTS.map((quest) => {
              const progress = (userProgress.points / quest.value) * 100;

              return (
                <li
                  className="flex w-full items-center gap-x-4 border-t-2 p-4"
                  key={quest.title}
                >
                  <Image
                    src="/points.svg"
                    alt="Points"
                    width={60}
                    height={60}
                  />

                  <div className="flex w-full flex-col gap-y-2">
                    <p className="text-xl font-bold text-neutral-700">
                      {quest.title}
                    </p>

                    <Progress value={progress} className="h-3" />
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </FeedWrapper>
    </div>
  );
};

export default QuestsPage;
