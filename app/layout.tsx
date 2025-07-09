import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata, Viewport } from "next";
import dynamic from "next/dynamic";
import { Nunito } from "next/font/google";

import { Toaster } from "@/components/ui/sonner";
import { siteConfig } from "@/config";
import { LanguageProvider } from "@/contexts/LanguageContext";

import "./globals.css";

const font = Nunito({
  subsets: ["latin"],
  display: 'swap', // Improve font loading performance
  preload: true,
});

// Dynamically load modals to reduce initial bundle size
const ExitModal = dynamic(() => import("@/components/modals/exit-modal").then(mod => ({ default: mod.ExitModal })), { ssr: false });
const HeartsModal = dynamic(() => import("@/components/modals/hearts-modal").then(mod => ({ default: mod.HeartsModal })), { ssr: false });
const PracticeModal = dynamic(() => import("@/components/modals/practice-modal").then(mod => ({ default: mod.PracticeModal })), { ssr: false });

export const viewport: Viewport = {
  themeColor: "#22C55E",
};

export const metadata: Metadata = siteConfig;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        layout: {
          logoImageUrl: "/favicon.ico",
        },
        variables: {
          colorPrimary: "#22C55E",
        },
      }}
      afterSignInUrl="/daily-checkin"
      afterSignUpUrl="/daily-checkin"
      afterSignOutUrl="/"
    >
      <html lang="en">
        <body className={font.className}>
          <LanguageProvider>
            <Toaster theme="light" richColors closeButton />
            <ExitModal />
            <HeartsModal />
            <PracticeModal />
            {children}
          </LanguageProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
