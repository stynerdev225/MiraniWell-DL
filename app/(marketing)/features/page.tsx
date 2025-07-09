import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { AnimatedTitle } from "@/components/motion/AnimatedTitle";

export const metadata: Metadata = {
    title: "Features - Miriani Well | Luna AI Wellness Companion Features",
    description: "Discover Luna AI's powerful wellness features: 24/7 emotional support, elemental healing rituals, mood tracking, personalized affirmations, and guided spiritual growth.",
    keywords: ["Luna AI features", "wellness companion", "emotional support AI", "healing rituals", "mood tracking", "personalized affirmations", "spiritual growth", "AI wellness platform"],
    openGraph: {
        title: "Features - Miriani Well | Luna AI Wellness Companion Features",
        description: "Discover Luna AI's powerful wellness features: 24/7 emotional support, elemental healing rituals, mood tracking, and personalized spiritual growth.",
        type: "website",
        url: "https://mirianiwell.com/features",
        images: [
            {
                url: "/og-features.png",
                width: 1200,
                height: 630,
                alt: "Miriani Well Luna AI Features",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Features - Miriani Well | Luna AI Wellness Companion Features",
        description: "Discover Luna AI's powerful wellness features for your spiritual growth journey.",
        images: ["/og-features.png"],
    },
};

const features = [
    {
        title: "24/7 Luna AI Companion",
        description: "Your personal AI wellness companion Luna is available around the clock to provide emotional support, guidance, and healing wisdom whenever you need it.",
        icon: (
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
        ),
        color: "text-pink-600",
        bgColor: "bg-pink-100",
    },
    {
        title: "Elemental Healing Rituals",
        description: "Harness the power of the four elements - Earth, Water, Fire, and Air - through personalized healing rituals designed to restore balance and harmony.",
        icon: (
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
            </svg>
        ),
        color: "text-orange-600",
        bgColor: "bg-orange-100",
    },
    {
        title: "Intelligent Mood Tracking",
        description: "Advanced AI-powered mood analysis that learns your emotional patterns and provides personalized insights for better mental wellness.",
        icon: (
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
        ),
        color: "text-blue-600",
        bgColor: "bg-blue-100",
    },
    {
        title: "Personalized Affirmations",
        description: "Daily affirmations tailored to your unique journey, created by Luna AI to empower your mind and strengthen your spiritual connection.",
        icon: (
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
        ),
        color: "text-green-600",
        bgColor: "bg-green-100",
    },
    {
        title: "Guided Meditation & Breathing",
        description: "Immersive meditation sessions and breathing exercises guided by Luna AI, designed to center your mind and align your chakras.",
        icon: (
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1a3 3 0 000-6h-1m4 6h1a3 3 0 000-6h-1m-2 8v2a3 3 0 003 3h1a3 3 0 003-3v-2m-5-2h5" />
            </svg>
        ),
        color: "text-purple-600",
        bgColor: "bg-purple-100",
    },
    {
        title: "Spiritual Growth Tracking",
        description: "Monitor your spiritual journey with detailed analytics on your progress, breakthrough moments, and areas for continued growth.",
        icon: (
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
        color: "text-yellow-600",
        bgColor: "bg-yellow-100",
    },
];

export default function FeaturesPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="pt-8 pb-16 bg-gradient-to-br from-green-50 to-blue-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-center items-center w-full">
                        <div className="text-center max-w-5xl -ml-8">
                            <AnimatedTitle className="!left-0 !transform-none !relative !block">
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 text-center">
                                    Discover Luna AI&apos;s
                                    <span className="text-green-600"> Powerful Features</span>
                                </h1>
                            </AnimatedTitle>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                                Your journey to wellness is unique. Luna AI adapts to your needs with intelligent features
                                designed to support your emotional, spiritual, and mental growth.
                            </p>
                            <div className="flex justify-center">
                                <Image
                                    src="/mascot.svg"
                                    alt="Luna AI Mascot"
                                    width={200}
                                    height={200}
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Everything You Need for Your Wellness Journey
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Luna AI combines ancient wisdom with modern technology to create a truly personalized wellness experience.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                            >
                                <div className={`inline-flex items-center justify-center w-16 h-16 ${feature.bgColor} rounded-lg mb-4`}>
                                    <div className={feature.color}>
                                        {feature.icon}
                                    </div>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="mt-24 py-8 md:py-10 lg:py-12 bg-gradient-to-r from-green-600 to-blue-600">
                <div className="h-16 md:h-24 lg:h-32"></div>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Ready to Experience Luna AI?
                    </h2>
                    <p className="text-xl text-green-100 mb-8">
                        Start your personalized wellness journey today with your AI companion Luna.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/sign-up">
                            <button className="bg-white text-green-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors">
                                Get Started Free
                            </button>
                        </Link>
                        <Link href="/about">
                            <button className="border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-green-600 transition-colors">
                                Learn More
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
            {/* Add white space below the gradient section */}
            <div className="bg-white h-16 md:h-24 lg:h-32 w-full"></div>
        </div>
    );
}
