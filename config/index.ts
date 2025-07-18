import type { Metadata } from "next";

export const siteConfig: Metadata = {
  title: "Miriani Well - AI Wellness Companion",
  description:
    "Your personalized AI wellness companion Luna provides 24/7 emotional support, elemental healing rituals, and guided spiritual growth. Combining ancient wisdom with modern AI technology.",
  openGraph: {
    type: "website",
    title: "Miriani Well - AI Wellness Companion with Luna",
    description: "Your personalized AI wellness companion Luna provides 24/7 emotional support, elemental healing rituals, and guided spiritual growth.",
    images: [
      {
        url: "/img_main.png",
        width: 1200,
        height: 630,
        alt: "Miriani Well - AI Wellness Companion with Luna"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Miriani Well - AI Wellness Companion with Luna",
    description: "Your personalized AI wellness companion Luna provides 24/7 emotional support, elemental healing rituals, and guided spiritual growth.",
    images: ["/img_main.png"],
  },
  keywords: [
    "reactjs",
    "nextjs",
    "vercel",
    "react",
    "ai-wellness-companion",
    "luna-ai",
    "elemental-healing",
    "mood-tracking",
    "guided-journaling",
    "personalized-affirmations",
    "emotional-support",
    "healing-rituals",
    "wellness-dashboard",
    "mindfulness",
    "meditation",
    "google-gemini-ai",
    "shadcn",
    "shadcn-ui",
    "radix-ui",
    "cn",
    "clsx",
    "lingo",
    "postgresql",
    "sonner",
    "drizzle",
    "zustand",
    "mysql",
    "lucide-react",
    "next-themes",
    "clerk-themes",
    "clerk",
    "postcss",
    "prettier",
    "react-dom",
    "tailwindcss",
    "tailwindcss-animate",
    "ui/ux",
    "js",
    "javascript",
    "typescript",
    "eslint",
    "html",
    "css",
  ] as Array<string>,
  authors: {
    name: "StynerDev",
    url: "https://styner.dev",
  },
} as const;

export const links = {
  sourceCode: "https://github.com/StynerDev/miriani-well-wellness-platform",
  email: "contact@styner.dev",
} as const;
