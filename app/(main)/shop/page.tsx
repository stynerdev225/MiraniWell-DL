import Image from "next/image";

import { FeedWrapper } from "@/components/feed-wrapper";
import { LanguageToggle } from "@/components/language-toggle";
import { Quests } from "@/components/quests";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { UserProgress } from "@/components/user-progress";

import { Items } from "./items";

// Mock data for shop page
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

const ShopPage = () => {
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

        <Quests points={userProgress.points} />
      </StickyWrapper>

      <FeedWrapper>
        <div className="flex w-full flex-col items-center">
          <div className="sticky top-0 mb-5 flex w-full items-center justify-between border-b-2 bg-white pb-3 text-neutral-400 lg:z-50 lg:mt-[-28px] lg:pt-[28px]">
            <div aria-hidden />
            <h1 className="text-lg font-bold text-neutral-800">Shop</h1>
            <LanguageToggle />
          </div>

          <Image src="/shop.svg" alt="Shop" height={90} width={90} />

          <p className="mb-6 text-center text-lg text-muted-foreground">
            Spend your points on cool stuff.
          </p>

          <Items
            hearts={userProgress.hearts}
            points={userProgress.points}
            hasActiveSubscription={isPro}
          />
        </div>
      </FeedWrapper>
    </div>
  );
};

export default ShopPage;
