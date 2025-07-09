import { Check } from "lucide-react";
import Image from "next/image";

import { cn } from "@/lib/utils";

type CardProps = {
  title: string;
  id: number;
  imageSrc: string;
  onClick: (id: number) => void;
  disabled?: boolean;
  isActive?: boolean;
};

export const Card = ({
  title,
  id,
  imageSrc,
  onClick,
  disabled,
  isActive,
}: CardProps) => {
  const getLanguageEmoji = (title: string) => {
    const language = title.toLowerCase();
    if (language.includes('spanish')) return '🇪🇸';
    if (language.includes('french')) return '🇫🇷';
    if (language.includes('german')) return '🇩🇪';
    if (language.includes('italian')) return '🇮🇹';
    if (language.includes('portuguese')) return '🇵🇹';
    if (language.includes('japanese')) return '🇯🇵';
    if (language.includes('chinese')) return '🇨🇳';
    if (language.includes('korean')) return '🇰🇷';
    if (language.includes('arabic')) return '🇸🇦';
    if (language.includes('hindi')) return '🇮🇳';
    if (language.includes('russian')) return '🇷🇺';
    if (language.includes('dutch')) return '🇳🇱';
    return '🇺🇸'; // Default to US flag for English
  };

  return (
    <div
      onClick={() => onClick(id)}
      className={cn(
        "group relative flex h-full min-h-[280px] min-w-[240px] cursor-pointer flex-col items-center justify-between rounded-2xl border-2 border-b-[6px] p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl",
        isActive 
          ? "bg-gradient-to-br from-green-50 to-emerald-50 border-green-400 border-b-green-500" 
          : "bg-gradient-to-br from-white to-gray-50 border-gray-200 border-b-gray-300 hover:from-blue-50 hover:to-purple-50",
        disabled && "pointer-events-none opacity-50"
      )}
    >
      {/* Active Badge */}
      <div className="flex min-h-[32px] w-full items-center justify-end">
        {isActive && (
          <div className="flex items-center justify-center rounded-full bg-green-500 p-2 shadow-lg animate-pulse">
            <Check className="h-5 w-5 stroke-[3] text-white" />
          </div>
        )}
      </div>

      {/* Language Flag */}
      <div className="text-6xl mb-4 group-hover:animate-bounce">
        {getLanguageEmoji(title)}
      </div>

      {/* Course Image */}
      <div className="relative mb-4">
        <Image
          src={imageSrc}
          alt={title}
          height={80}
          width={80}
          className="rounded-xl border-2 border-white object-cover drop-shadow-lg group-hover:drop-shadow-xl transition-all"
        />
        <div className="absolute -bottom-2 -right-2 bg-purple-500 rounded-full p-2">
          <span className="text-white text-xs font-bold">✨</span>
        </div>
      </div>

      {/* Title */}
      <div className="text-center">
        <p className="text-lg font-bold text-gray-800 mb-2">{title}</p>
        <p className="text-sm text-gray-600">Wellness & Healing Practices</p>
        {isActive && (
          <p className="text-xs text-green-600 font-medium mt-2">✓ Currently Active</p>
        )}
      </div>

      {/* Hover Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </div>
  );
};
