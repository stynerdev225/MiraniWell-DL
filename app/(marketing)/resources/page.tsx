import { Metadata } from "next";
import Image from "next/image";

import { AnimatedTitle } from "@/components/motion/AnimatedTitle";

export const metadata: Metadata = {
    title: "Resources - Miriani Well | Wellness Guides & Educational Content",
    description: "Explore comprehensive wellness resources, guides, and educational content to enhance your spiritual growth journey with Luna AI and Miriani Well.",
    keywords: ["wellness resources", "spiritual growth guides", "Luna AI education", "healing resources", "wellness education", "mindfulness guides", "spiritual development"],
    openGraph: {
        title: "Resources - Miriani Well | Wellness Guides & Educational Content",
        description: "Explore comprehensive wellness resources and guides to enhance your spiritual growth journey with Luna AI.",
        type: "website",
        url: "https://mirianiwell.com/resources",
        images: [
            {
                url: "/og-resources.png",
                width: 1200,
                height: 630,
                alt: "Miriani Well Resources",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Resources - Miriani Well | Wellness Guides & Educational Content",
        description: "Explore comprehensive wellness resources and guides for your spiritual growth journey.",
        images: ["/og-resources.png"],
    },
};

const resourceCategories = [
    {
        title: "Getting Started",
        description: "Essential guides for beginning your wellness journey with Luna AI",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
        ),
        color: "text-blue-600",
        bgColor: "bg-blue-100",
        resources: [
            "How to Set Up Your Luna AI Companion",
            "Understanding Your Wellness Dashboard",
            "Creating Your First Healing Ritual",
            "Personalizing Your Affirmations"
        ]
    },
    {
        title: "Elemental Healing",
        description: "Deep dive into the four elements and their healing properties",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
            </svg>
        ),
        color: "text-orange-600",
        bgColor: "bg-orange-100",
        resources: [
            "Earth Element: Grounding and Stability",
            "Water Element: Emotional Flow and Healing",
            "Fire Element: Passion and Transformation",
            "Air Element: Mental Clarity and Communication"
        ]
    },
    {
        title: "Mindfulness & Meditation",
        description: "Techniques for centering your mind and connecting with your inner self",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1a3 3 0 000-6h-1m4 6h1a3 3 0 000-6h-1m-2 8v2a3 3 0 003 3h1a3 3 0 003-3v-2m-5-2h5" />
            </svg>
        ),
        color: "text-purple-600",
        bgColor: "bg-purple-100",
        resources: [
            "Beginner&apos;s Guide to Meditation",
            "Breathing Techniques for Stress Relief",
            "Chakra Alignment Meditation",
            "Daily Mindfulness Practices"
        ]
    },
    {
        title: "Emotional Wellness",
        description: "Tools and techniques for emotional balance and mental health",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
        ),
        color: "text-pink-600",
        bgColor: "bg-pink-100",
        resources: [
            "Understanding and Managing Emotions",
            "Building Emotional Resilience",
            "Self-Compassion Practices",
            "Dealing with Anxiety and Stress"
        ]
    },
    {
        title: "Spiritual Growth",
        description: "Advanced practices for deepening your spiritual connection",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
        color: "text-yellow-600",
        bgColor: "bg-yellow-100",
        resources: [
            "Developing Intuition and Inner Wisdom",
            "Energy Healing and Cleansing",
            "Sacred Rituals and Ceremonies",
            "Connecting with Higher Consciousness"
        ]
    },
    {
        title: "Luna AI Tips",
        description: "Maximizing your experience with your AI wellness companion",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
        ),
        color: "text-green-600",
        bgColor: "bg-green-100",
        resources: [
            "Advanced Luna AI Commands",
            "Customizing Your AI Companion",
            "Tracking Your Progress Effectively",
            "Troubleshooting Common Issues"
        ]
    }
];

export default function ResourcesPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="pt-8 pb-16 bg-[#F2FCF6]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-center items-center w-full">
                        <div className="text-center max-w-4xl w-full rounded-3xl shadow-2xl border-2 border-gray-200 bg-white/80 backdrop-blur-md p-8 md:p-12 mx-auto">
                            <AnimatedTitle className="!left-0 !transform-none !relative !block !text-center">
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 text-center">
                                    Wellness
                                    <span className="text-green-600"> Resources</span>
                                </h1>
                            </AnimatedTitle>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 text-center">
                                Comprehensive guides, tutorials, and educational content to support your spiritual growth
                                and wellness journey with Luna AI.
                            </p>
                            <div className="flex justify-center">
                                <Image
                                    src="/mascot.svg"
                                    alt="Luna AI Mascot"
                                    width={150}
                                    height={150}
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Resources Grid */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Explore Our Resource Library
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Everything you need to make the most of your wellness journey, organized by category.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {resourceCategories.map((category, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                            >
                                <div className={`inline-flex items-center justify-center w-14 h-14 ${category.bgColor} rounded-lg mb-4`}>
                                    <div className={category.color}>
                                        {category.icon}
                                    </div>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                    {category.title}
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    {category.description}
                                </p>
                                <ul className="space-y-2">
                                    {category.resources.map((resource, resourceIndex) => (
                                        <li key={resourceIndex} className="flex items-start">
                                            <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                                            <span className="text-gray-700 text-sm">{resource}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="py-16 mb-24 bg-[#F8F9FA] rounded-3xl shadow-2xl border-2 border-gray-200">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Stay Updated
                    </h2>
                    <p className="text-lg text-gray-600 mb-8">
                        Get the latest wellness resources, Luna AI updates, and spiritual growth insights delivered to your inbox.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                        <button className="bg-green-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-green-700 transition-colors">
                            Subscribe
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
