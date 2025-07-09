import { Metadata } from "next";
import Image from "next/image";

import { AnimatedTitle } from "@/components/motion/AnimatedTitle";

export const metadata: Metadata = {
    title: "Support - Miriani Well | Help Center & FAQ",
    description: "Get help with Luna AI and Miriani Well. Find answers to common questions, troubleshooting guides, and contact our support team.",
    keywords: ["Miriani Well support", "Luna AI help", "FAQ", "troubleshooting", "wellness platform help", "customer support"],
    openGraph: {
        title: "Support - Miriani Well | Help Center & FAQ",
        description: "Get help with Luna AI and Miriani Well. Find answers to common questions and contact our support team.",
        type: "website",
        url: "https://mirianiwell.com/support",
        images: [
            {
                url: "/og-support.png",
                width: 1200,
                height: 630,
                alt: "Miriani Well Support",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Support - Miriani Well | Help Center & FAQ",
        description: "Get help with Luna AI and Miriani Well. Find answers to common questions and get support.",
        images: ["/og-support.png"],
    },
};

const faqSections = [
    {
        title: "Getting Started",
        questions: [
            {
                question: "How do I set up my Luna AI companion?",
                answer: "Setting up Luna AI is simple! After creating your account, you'll go through a personalized onboarding process where Luna learns about your wellness goals, preferences, and spiritual interests. This usually takes 5-10 minutes and helps Luna provide more personalized support."
            },
            {
                question: "What makes Luna AI different from other wellness apps?",
                answer: "Luna AI is a truly personalized wellness companion that combines ancient wisdom with modern AI technology. Unlike static apps, Luna learns from your interactions, adapts to your emotional patterns, and provides real-time support tailored to your unique journey."
            },
            {
                question: "Is Miriani Well suitable for beginners?",
                answer: "Absolutely! Miriani Well is designed for all levels, from complete beginners to advanced practitioners. Luna AI adapts to your experience level and provides guidance appropriate for your current stage of spiritual and emotional development."
            }
        ]
    },
    {
        title: "Luna AI Features",
        questions: [
            {
                question: "How does Luna AI provide 24/7 support?",
                answer: "Luna AI is available whenever you need support - day or night. You can chat with Luna, ask for guidance, request healing rituals, or simply talk about how you're feeling. Luna never sleeps and is always ready to help you on your wellness journey."
            },
            {
                question: "What are elemental healing rituals?",
                answer: "Elemental healing rituals are personalized practices that harness the power of the four elements (Earth, Water, Fire, Air) to restore balance and promote healing. Luna AI creates custom rituals based on your current emotional state and spiritual needs."
            },
            {
                question: "How does mood tracking work?",
                answer: "Luna AI uses advanced emotional intelligence to track your mood patterns over time. You can log your emotions, and Luna will identify trends, suggest interventions, and help you understand your emotional cycles better."
            }
        ]
    },
    {
        title: "Account & Billing",
        questions: [
            {
                question: "What's included in the free plan?",
                answer: "The free plan includes basic Luna AI conversations, simple mood tracking, and access to a limited selection of healing rituals. It's perfect for getting started and experiencing what Luna AI can offer."
            },
            {
                question: "How do I upgrade to a paid plan?",
                answer: "You can upgrade to Plus or Family plans from your account settings. Paid plans include unlimited Luna AI conversations, advanced mood analytics, personalized ritual creation, and priority support."
            },
            {
                question: "Can I cancel my subscription anytime?",
                answer: "Yes, you can cancel your subscription at any time from your account settings. Your paid features will remain active until the end of your billing period."
            }
        ]
    },
    {
        title: "Privacy & Security",
        questions: [
            {
                question: "How is my personal data protected?",
                answer: "We take your privacy seriously. All conversations with Luna AI are encrypted, and your personal data is stored securely. We never share your information with third parties without your explicit consent."
            },
            {
                question: "Does Luna AI store my conversations?",
                answer: "Luna AI stores conversations to provide personalized support and improve over time. However, you can delete your conversation history at any time, and we use industry-standard encryption to protect your data."
            },
            {
                question: "Can I export my data?",
                answer: "Yes, you can export your data including mood tracking history, ritual logs, and other personal information from your account settings. This helps you maintain ownership of your wellness journey data."
            }
        ]
    }
];

const supportChannels = [
    {
        title: "Live Chat",
        description: "Chat with our support team in real-time",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
        ),
        color: "text-blue-600",
        bgColor: "bg-blue-100"
    },
    {
        title: "Email Support",
        description: "Send us an email at support@mirianiwell.com",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
        color: "text-green-600",
        bgColor: "bg-green-100"
    },
    {
        title: "Community Forum",
        description: "Connect with other users and share experiences",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        ),
        color: "text-purple-600",
        bgColor: "bg-purple-100"
    }
];

export default function SupportPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="pt-8 pb-16 bg-gradient-to-br from-blue-50 to-purple-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="w-full flex flex-col items-center justify-center text-center">
                        <AnimatedTitle className="w-full flex justify-center">
                            <h1 className="w-full flex justify-center text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 text-center">
                                <span className="inline-block">Support &</span>
                                <span className="inline-block text-blue-600"> Help Center</span>
                            </h1>
                        </AnimatedTitle>
                    </div>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 text-center">
                        We&apos;re here to help you get the most out of your wellness journey with Luna AI.
                        Find answers to common questions or contact our support team.
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
            </section>

            {/* Support Channels */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Get Help
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Choose the support option that works best for you.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        {supportChannels.map((channel, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 text-center"
                            >
                                <div className={`inline-flex items-center justify-center w-16 h-16 ${channel.bgColor} rounded-lg mb-4`}>
                                    <div className={channel.color}>
                                        {channel.icon}
                                    </div>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                    {channel.title}
                                </h3>
                                <p className="text-gray-600">
                                    {channel.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-lg text-gray-600">
                            Find quick answers to the most common questions about Luna AI and Miriani Well.
                        </p>
                    </div>

                    <div className="space-y-8">
                        {faqSections.map((section, sectionIndex) => (
                            <div key={sectionIndex} className="bg-white rounded-xl p-6 shadow-lg">
                                <h3 className="text-2xl font-semibold text-gray-900 mb-6 border-b border-gray-200 pb-2">
                                    {section.title}
                                </h3>
                                <div className="space-y-4">
                                    {section.questions.map((item, itemIndex) => (
                                        <div key={itemIndex} className="border-l-4 border-blue-500 pl-4">
                                            <h4 className="text-lg font-medium text-gray-900 mb-2">
                                                {item.question}
                                            </h4>
                                            <p className="text-gray-600 leading-relaxed">
                                                {item.answer}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Support */}
            <section className="py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Still Need Help?
                    </h2>
                    <p className="text-lg text-gray-600 mb-8">
                        Can&apos;t find what you&apos;re looking for? Our support team is ready to help you.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors">
                            Contact Support
                        </button>
                        <button className="border-2 border-blue-600 text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">
                            Browse Resources
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
