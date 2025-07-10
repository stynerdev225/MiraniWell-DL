import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import { LanguageToggle } from "@/components/language-toggle";
import { Button } from "@/components/ui/button";

type HeaderProps = {
  title: string;
};

export const Header = ({ title }: HeaderProps) => {
  return (
    <div className="sticky top-0 mb-5 flex items-center justify-between border-b-2 bg-white pb-3 text-neutral-400 lg:z-50 lg:mt-[-28px] lg:pt-[28px] overflow-visible">
      <Link href="/courses">
        <Button size="sm" variant="ghost">
          <ArrowLeft className="h-5 w-5 stroke-2 text-neutral-400" />
        </Button>
      </Link>

      <h1 className="text-lg font-bold">{title}</h1>

      <div className="relative z-[99999] overflow-visible">
        <LanguageToggle />
      </div>
    </div>
  );
};
