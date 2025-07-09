import { Metadata } from "next";
import Image from "next/image";

import { AnimatedTitle } from "@/components/motion/AnimatedTitle";

export const metadata: Metadata = {
    title: "About - Miriani Well | AI-Powered Wellness & Spiritual Growth",
    description: "Learn about Miriani Well's mission to transform global wellness through AI-powered spiritual guidance. Meet Luna, your AI wellness companion, and discover our elemental healing approach.",
    keywords: ["about Miriani Well", "wellness mission", "Luna AI companion", "spiritual growth platform", "Dr. Uzo Nwankpa", "AI wellness technology", "elemental healing"],
    openGraph: {
        title: "About - Miriani Well | AI-Powered Wellness & Spiritual Growth",
        description: "Learn about Miriani Well's mission to transform global wellness through AI-powered spiritual guidance with Luna, your AI wellness companion.",
        type: "website",
        url: "https://mirianiwell.com/about",
        images: [
            {
                url: "/og-about.png",
                width: 1200,
                height: 630,
                alt: "About Miriani Well",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "About - Miriani Well | AI-Powered Wellness & Spiritual Growth",
        description: "Learn about Miriani Well's mission to transform global wellness through AI-powered spiritual guidance.",
        images: ["/og-about.png"],
    },
};

const team = [
    {
        name: "Dr. Uzo Nwankpa",
        role: "Founder & CEO",
        image: "/mascot.svg",
        bio: "Wellness pioneer and spiritual guide with over 15 years of experience in holistic healing. Dr. Uzo combines ancient wisdom with modern technology to make wellness accessible to everyone.",
        expertise: ["Holistic Healing", "Spiritual Guidance", "Wellness Leadership"],
    },
    {
        name: "Luna AI",
        role: "AI Wellness Companion",
        image: "/mascot.svg",
        bio: "Your personal AI wellness companion, powered by advanced AI technology. Luna provides 24/7 support, personalized guidance, and compassionate care for your healing journey.",
        expertise: ["AI Guidance", "Emotional Support", "Personalized Healing"],
    },
    {
        name: "StynerDev Team",
        role: "CTO & Development",
        image: "/mascot.svg",
        bio: "Full-stack development team specializing in AI-powered wellness platforms. Expert in creating seamless user experiences that support personal transformation.",
        expertise: ["AI Development", "Platform Engineering", "User Experience"],
    },
];

const milestones = [
    {
        year: "2023",
        title: "Foundation",
        description: "Miriani Well was founded with a vision to democratize wellness through AI technology.",
    },
    {
        year: "2024",
        title: "Luna AI Launch",
        description: "Launched Luna, our revolutionary AI wellness companion with elemental healing capabilities.",
    },
    {
        year: "2024",
        title: "Global Expansion",
        description: "Expanded to serve users worldwide with multilingual support and cultural adaptation.",
    },
    {
        year: "2025",
        title: "Advanced Features",
        description: "Introduced advanced mood tracking, personalized affirmations, and family wellness plans.",
    },
];

const values = [
    {
        title: "Accessibility",
        description: "Making wellness and spiritual growth accessible to everyone, regardless of background or location.",
        icon: "🌍",
    },
    {
        title: "Innovation",
        description: "Combining ancient wisdom with cutting-edge AI technology for personalized healing experiences.",
        icon: "🚀",
    },
    {
        title: "Compassion",
        description: "Providing empathetic, non-judgmental support for every step of your wellness journey.",
        icon: "💝",
    },
    {
        title: "Authenticity",
        description: "Staying true to proven wellness practices while embracing technological advancement.",
        icon: "🌟",
    },
];

export default function AboutPage() {
    return (
        <>
            {/* Hero Section - Matching homepage style */}
            <div className="mx-auto flex w-full max-w-[988px] flex-1 flex-col items-center justify-center gap-2 p-4 lg:flex-row">
                <div className="relative mb-8 h-[240px] w-[240px] lg:mb-0 lg:h-[424px] lg:w-[424px]">
                    <Image
                        src="/hero.svg"
                        alt="About Miriani Well"
                        fill
                        priority
                        sizes="(max-width: 768px) 240px, 424px"
                        className="object-contain"
                    />
                </div>

                <div className="flex flex-col items-center gap-y-8">
                    <AnimatedTitle className="max-w-[480px] text-center text-xl font-bold text-neutral-600 lg:text-3xl">
                        Transforming Global Wellness Through AI-Powered Spiritual Guidance
                    </AnimatedTitle>
                    <p className="text-center text-muted-foreground max-w-[480px]">
                        Meet Luna, your AI wellness companion, and discover how we&apos;re revolutionizing personal transformation through innovative technology and ancient wisdom.
                    </p>
                </div>
            </div>

            {/* Mission Section - Following homepage style */}
            <section className="py-8 md:py-12 lg:py-16 bg-blue-50/50 relative overflow-hidden rounded-3xl mx-4 md:mx-8 my-8 shadow-xl">
                {/* 3D effect layers */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-white/30 to-transparent opacity-80 transform rotate-3 scale-105"></div>
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-blue-100/20 to-purple-100/20 transform -rotate-1"></div>
                <div className="absolute inset-0 rounded-3xl border border-white/20 transform -rotate-1 scale-[1.01]"></div>

                <div className="mx-auto max-w-[1300px] px-4 sm:px-8 lg:px-12 relative z-10">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white">
                            Our <span className="text-green-500 dark:text-green-400">Mission</span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 mx-auto mt-4 rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
                        <div className="space-y-6">
                            <p className="text-lg text-gray-700 leading-relaxed">
                                At Miriani Well, we believe that wellness should be accessible to everyone, everywhere. Our mission is to democratize spiritual growth and emotional healing through cutting-edge AI technology.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                We combine ancient wisdom with modern innovation to create personalized wellness experiences that adapt to your unique journey. Our AI companion, Luna, provides 24/7 support, guidance, and compassionate care.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <div className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                                    AI-Powered
                                </div>
                                <div className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                                    Accessible
                                </div>
                                <div className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                                    Personalized
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
                                <div className="relative h-48 w-full rounded-xl overflow-hidden">
                                    <Image
                                        src="/mascot.svg"
                                        alt="Luna AI Companion"
                                        fill
                                        className="object-contain"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                </div>
                                <div className="mt-4 text-center">
                                    <h3 className="text-lg font-semibold text-gray-900">Meet Luna</h3>
                                    <p className="text-gray-600 text-sm">Your AI Wellness Companion</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Miriani Well Section - Following homepage style */}
            <section className="py-8 md:py-12 lg:py-16 bg-purple-50/50 relative overflow-hidden rounded-3xl mx-4 md:mx-8 my-8 shadow-xl">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-white/30 to-transparent opacity-80 transform rotate-3 scale-105"></div>
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-purple-100/20 to-green-100/20 transform -rotate-1"></div>
                <div className="absolute inset-0 rounded-3xl border border-white/20 transform -rotate-1 scale-[1.01]"></div>

                {/* Decorative floating elements */}
                <div className="absolute -left-12 top-1/4 transform hover:scale-110 transition-transform animate-float">
                    <div className="bg-gradient-to-br from-purple-400 to-purple-600 text-white p-3 rounded-2xl shadow-2xl transform rotate-12 hover:rotate-6 transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                    </div>
                </div>

                <div className="absolute -right-12 top-1/2 transform hover:scale-110 transition-transform animate-float-slow">
                    <div className="bg-gradient-to-br from-green-400 to-green-600 text-white p-3 rounded-2xl shadow-2xl transform -rotate-12 hover:-rotate-6 transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                    </div>
                </div>

                <div className="mx-auto max-w-[1300px] px-4 sm:px-8 lg:px-12 relative z-10">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
                            Why Choose <span className="text-purple-500">Miriani Well</span>?
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 via-green-500 to-blue-500 mx-auto mt-4 rounded-full"></div>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
                            Discover what makes Miriani Well the leading choice for AI-powered wellness transformation
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Unique AI Technology */}
                        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 group text-center">
                            <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Advanced AI Technology</h3>
                            <p className="text-gray-600 text-sm">
                                Luna uses cutting-edge AI to provide personalized wellness coaching that adapts to your unique needs and learns from your progress.
                            </p>
                        </div>

                        {/* 24/7 Support */}
                        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 group text-center">
                            <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Availability</h3>
                            <p className="text-gray-600 text-sm">
                                Unlike human coaches, Luna is available whenever you need support - whether it&apos;s 3 AM or during your lunch break.
                            </p>
                        </div>

                        {/* Holistic Approach */}
                        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 group text-center">
                            <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Holistic Wellness</h3>
                            <p className="text-gray-600 text-sm">
                                We address mind, body, and spirit through elemental healing, combining ancient wisdom with modern science.
                            </p>
                        </div>

                        {/* Affordable Access */}
                        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 group text-center">
                            <div className="w-16 h-16 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Affordable Wellness</h3>
                            <p className="text-gray-600 text-sm">
                                Premium wellness coaching at a fraction of the cost of traditional therapy or personal coaching sessions.
                            </p>
                        </div>

                        {/* Privacy & Security */}
                        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 group text-center">
                            <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-red-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Privacy First</h3>
                            <p className="text-gray-600 text-sm">
                                Your wellness journey is private and secure. We use enterprise-grade encryption to protect your personal data.
                            </p>
                        </div>

                        {/* Proven Results */}
                        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 group text-center">
                            <div className="w-16 h-16 bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven Results</h3>
                            <p className="text-gray-600 text-sm">
                                Thousands of users have transformed their lives with measurable improvements in stress, anxiety, and overall well-being.
                            </p>
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="mt-12 text-center">
                        <div className="bg-gradient-to-r from-purple-500 to-green-500 rounded-2xl p-8 shadow-xl">
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                Ready to Transform Your Life?
                            </h3>
                            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                                Join thousands of people who have discovered peace, balance, and purpose with Luna as their guide.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a href="/pricing" className="inline-flex items-center px-6 py-3 bg-white text-purple-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors">
                                    Start Your Journey
                                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </a>
                                <a href="/#features" className="inline-flex items-center px-6 py-3 bg-transparent text-white font-semibold rounded-xl border-2 border-white hover:bg-white hover:text-purple-600 transition-colors">
                                    Explore Features
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section - Matching homepage style */}
            <section className="pb-8 pt-16 md:py-20">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center text-gray-900 dark:text-white mb-8">
                    <span className="text-green-600 dark:text-green-400">Our</span> Core{' '}
                    <span className="text-blue-600 dark:text-blue-400 underline decoration-wavy underline-offset-4 md:underline-offset-8">
                        Values
                    </span>
                </h2>

                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, index) => (
                            <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 text-center group">
                                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                                    {value.icon}
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                    {value.title}
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section - Following homepage style */}
            <section className="py-8 md:py-12 lg:py-16 bg-green-50/50 relative overflow-hidden rounded-3xl mx-4 md:mx-8 my-8 shadow-xl">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-white/30 to-transparent opacity-80 transform rotate-3 scale-105"></div>
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-green-100/20 to-blue-100/20 transform -rotate-1"></div>
                <div className="absolute inset-0 rounded-3xl border border-white/20 transform -rotate-1 scale-[1.01]"></div>

                <div className="mx-auto max-w-[1300px] px-4 sm:px-8 lg:px-12 relative z-10">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
                            Meet Our <span className="text-green-500">Team</span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {team.map((member, index) => (
                            <div key={index} className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 text-center group">
                                <div className="relative h-32 w-32 mx-auto mb-4 rounded-full overflow-hidden">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform"
                                        sizes="128px"
                                    />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                                    {member.name}
                                </h3>
                                <p className="text-green-600 font-medium mb-3">
                                    {member.role}
                                </p>
                                <p className="text-gray-600 text-sm mb-4">
                                    {member.bio}
                                </p>
                                <div className="flex flex-wrap gap-2 justify-center">
                                    {member.expertise.map((skill, skillIndex) => (
                                        <span key={skillIndex} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Journey Timeline - Following homepage style */}
            <section className="pb-8 pt-16 md:py-20">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center text-gray-900 dark:text-white mb-8">
                    <span className="text-green-600 dark:text-green-400">Our</span> Journey{' '}
                    <span className="text-blue-600 dark:text-blue-400 underline decoration-wavy underline-offset-4 md:underline-offset-8">
                        Timeline
                    </span>
                </h2>

                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                    <div className="relative">
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-green-500 to-blue-500"></div>

                        <div className="space-y-8">
                            {milestones.map((milestone, index) => (
                                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                                    <div className="w-1/2 px-6">
                                        <div className={`bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                                            <div className="text-2xl font-bold text-green-600 mb-2">
                                                {milestone.year}
                                            </div>
                                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                                {milestone.title}
                                            </h3>
                                            <p className="text-gray-600 text-sm">
                                                {milestone.description}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="w-4 h-4 bg-gradient-to-r from-green-500 to-blue-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                                    <div className="w-1/2"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
