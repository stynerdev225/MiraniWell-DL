import { InfinityIcon } from "lucide-react";
import Image from "next/image";

import { LanguageToggle } from "@/components/language-toggle-dropdown";
import { Progress } from "@/components/ui/progress";
import { useExitModal } from "@/store/use-exit-modal";

type HeaderProps = {
  hearts: number;
  percentage: number;
  hasActiveSubscription: boolean;
};

export const Header = ({
  hearts,
  percentage,
  hasActiveSubscription,
}: HeaderProps) => {
  const { open } = useExitModal();

  return (
    <header className="w-full pt-[20px] lg:pt-[30px] relative z-50 bg-white">
      {/* Top row with exit button and hearts */}
      <div className="mx-auto flex w-full max-w-[1140px] items-center justify-between px-4 sm:px-10 mb-4">
        <button
          onClick={open}
          className="cursor-pointer text-slate-500 transition hover:opacity-75 hover:text-slate-700 font-medium px-3 py-1 rounded-md border border-slate-200 hover:border-slate-300"
        >
          Exit
        </button>

        <div className="flex items-center gap-4">
          <div className="flex items-center font-bold text-rose-500">
            <Image
              src="/heart.svg"
              height={28}
              width={28}
              alt="Heart"
              className="mr-2"
            />
            {hasActiveSubscription ? (
              <InfinityIcon className="h-6 w-6 shrink-0 stroke-[3]" />
            ) : (
              hearts
            )}
          </div>
          <div className="relative">
            <LanguageToggle />
          </div>
        </div>
      </div>

      {/* Centered progress bar */}
      <div className="mx-auto w-full max-w-[600px] px-4 sm:px-10">
        <Progress value={percentage} />
      </div>
    </header>
  );
};
