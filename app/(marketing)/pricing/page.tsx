import { Metadata } from "next";
import Image from "next/image";

import { Pricing } from "@/components/landing/Pricing";

export const metadata: Metadata = {
    title: "Pricing - Miriani Well | AI-Powered Wellness Plans",
    description: "Choose your perfect wellness plan. Start your healing journey with our AI companion Luna. Free forever plan available, plus premium options for deeper transformation.",
    keywords: ["wellness pricing", "AI wellness plans", "Luna AI companion", "spiritual growth plans", "healing subscription", "mindfulness pricing", "Miriani Well plans"],
    openGraph: {
        title: "Pricing - Miriani Well | AI-Powered Wellness Plans",
        description: "Choose your perfect wellness plan. Start your healing journey with our AI companion Luna. Free forever plan available, plus premium options for deeper transformation.",
        type: "website",
        url: "https://mirianiwell.com/pricing",
        images: [
            {
                url: "/og-pricing.png",
                width: 1200,
                height: 630,
                alt: "Miriani Well Pricing Plans",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Pricing - Miriani Well | AI-Powered Wellness Plans",
        description: "Choose your perfect wellness plan. Start your healing journey with our AI companion Luna.",
        images: ["/og-pricing.png"],
    },
};

export default function PricingPage() {
    return (
        <>
            {/* Hero Section - Matching homepage style */}
            <div className="mx-auto flex w-full max-w-[988px] flex-1 flex-col items-center justify-center gap-2 p-4 lg:flex-row">
                <div className="relative mb-8 h-[240px] w-[240px] lg:mb-0 lg:h-[424px] lg:w-[424px]">
                    <Image
                        src="/logo.svg"
                        alt="Miriani Well Pricing"
                        fill
                        priority
                        sizes="(max-width: 768px) 240px, 424px"
                        className="object-contain"
                    />
                </div>

                <div className="flex flex-col items-center gap-y-8">
                    <h1 className="max-w-[480px] text-center text-xl font-bold text-neutral-600 lg:text-3xl">
                        Choose Your Perfect Wellness Plan with Luna
                    </h1>
                    <p className="text-center text-muted-foreground max-w-[480px]">
                        Transform your life with our AI-powered wellness companion. Start your healing journey today with plans designed for every stage of your wellness path.
                    </p>
                </div>
            </div>

            {/* Pricing Component */}
            <Pricing />

            {/* Why Choose Miriani Well Section - Following homepage style */}
            <section className="py-8 md:py-12 lg:py-16 bg-blue-50/50 relative overflow-hidden rounded-3xl mx-4 md:mx-8 my-8 shadow-xl">
                {/* 3D effect layers */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-white/30 to-transparent opacity-80 transform rotate-3 scale-105"></div>
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-blue-100/20 to-purple-100/20 transform -rotate-1"></div>
                <div className="absolute inset-0 rounded-3xl border border-white/20 transform -rotate-1 scale-[1.01]"></div>
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent transform -translate-y-1"></div>

                <div className="mx-auto max-w-[1300px] px-4 sm:px-8 lg:px-12 relative z-10">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white">
                            Why Choose <span className="text-green-500 dark:text-green-400">Miriani Well</span>?
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 mx-auto mt-4 rounded-full"></div>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
                            Join thousands of people who have transformed their lives with our AI-powered wellness platform
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto relative">
                        {/* Decorative floating icons */}
                        <div className="absolute -left-16 top-1/4 transform hover:scale-110 transition-transform animate-float">
                            <div className="bg-gradient-to-br from-green-400 to-green-600 text-white p-4 rounded-2xl shadow-2xl transform rotate-6 hover:rotate-12 transition-all duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                            </div>
                        </div>

                        <div className="text-center p-6 bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 group">
                            <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">AI-Powered Guidance</h3>
                            <p className="text-gray-600">Luna provides personalized wellness coaching tailored to your unique needs and goals</p>
                        </div>

                        <div className="text-center p-6 bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 group">
                            <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Elemental Healing</h3>
                            <p className="text-gray-600">Experience transformative healing through Earth, Water, Fire, and Air elements</p>
                        </div>

                        <div className="text-center p-6 bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 group">
                            <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Progress Tracking</h3>
                            <p className="text-gray-600">Monitor your wellness journey with comprehensive analytics and insights</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section - Following homepage style */}
            <section className="pb-8 pt-16 md:py-20">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center text-gray-900 dark:text-white mb-8">
                    <span className="text-green-600 dark:text-green-400">Frequently</span> Asked{' '}
                    <span className="text-blue-600 dark:text-blue-400 underline decoration-wavy underline-offset-4 md:underline-offset-8">
                        Questions
                    </span>
                </h2>

                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                    <div className="space-y-6">
                        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                Can I cancel my subscription at any time?
                            </h3>
                            <p className="text-gray-600">
                                Yes! You can cancel your subscription at any time. There are no cancellation fees, and you&apos;ll retain access to your premium features until the end of your current billing period.
                            </p>
                        </div>

                        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                What&apos;s included in the free trial?
                            </h3>
                            <p className="text-gray-600">
                                Your 14-day free trial includes full access to all Plus features: unlimited lessons with Luna, elemental healing rituals, mood tracking, personalized affirmations, and priority support.
                            </p>
                        </div>

                        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                How does the Family plan work?
                            </h3>
                            <p className="text-gray-600">
                                The Family plan supports up to 6 individual accounts under one subscription. Each member gets their own personalized Luna AI companion and progress tracking, with shared family challenges and parental controls.
                            </p>
                        </div>

                        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                Is my data secure?
                            </h3>
                            <p className="text-gray-600">
                                Absolutely. We use enterprise-grade encryption and security measures to protect your personal information and wellness data. Your privacy is our top priority.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
