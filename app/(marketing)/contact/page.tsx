import { Metadata } from "next";
import Image from "next/image";

import { AnimatedTitle } from "@/components/motion/AnimatedTitle";

export const metadata: Metadata = {
    title: "Contact - Miriani Well | Get In Touch With Our Wellness Team",
    description: "Contact Miriani Well for support, questions, or to learn more about Luna, your AI wellness companion. We're here to help you on your healing journey.",
    keywords: ["contact Miriani Well", "wellness support", "Luna AI support", "customer service", "wellness questions", "spiritual guidance help", "AI wellness contact"],
    openGraph: {
        title: "Contact - Miriani Well | Get In Touch With Our Wellness Team",
        description: "Contact Miriani Well for support, questions, or to learn more about Luna, your AI wellness companion. We're here to help you on your healing journey.",
        type: "website",
        url: "https://mirianiwell.com/contact",
        images: [
            {
                url: "/og-contact.png",
                width: 1200,
                height: 630,
                alt: "Contact Miriani Well",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Contact - Miriani Well | Get In Touch With Our Wellness Team",
        description: "Contact Miriani Well for support, questions, or to learn more about Luna, your AI wellness companion.",
        images: ["/og-contact.png"],
    },
};

const contactMethods = [
    {
        title: 'Email Support',
        description: 'Send us an email and we&apos;ll get back to you within 24 hours',
        contact: 'support@mirianiwell.com',
        action: 'mailto:support@mirianiwell.com',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
        color: 'text-blue-600',
        bgColor: 'bg-blue-100',
    },
    {
        title: 'Live Chat',
        description: 'Chat with Luna or our support team in real-time',
        contact: 'Available 24/7',
        action: '#',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
        ),
        color: 'text-green-600',
        bgColor: 'bg-green-100',
    },
    {
        title: 'Phone Support',
        description: 'Speak directly with our wellness specialists',
        contact: '+1 (555) LUNA-WELL',
        action: 'tel:+15558629935',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
        ),
        color: 'text-purple-600',
        bgColor: 'bg-purple-100',
    },
    {
        title: 'Community',
        description: 'Join our wellness community and connect with others',
        contact: 'Discord & Forums',
        action: '#',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        ),
        color: 'text-orange-600',
        bgColor: 'bg-orange-100',
    },
];

export default function ContactPage() {
    return (
        <>
            {/* Hero Section - Matching homepage style */}
            <div className="mx-auto flex w-full max-w-[988px] flex-1 flex-col items-center justify-center gap-2 p-4 lg:flex-row">
                <div className="relative mb-8 h-[240px] w-[240px] lg:mb-0 lg:h-[424px] lg:w-[424px]">
                    <Image
                        src="/hero.svg"
                        alt="Contact Miriani Well"
                        fill
                        priority
                        sizes="(max-width: 768px) 240px, 424px"
                        className="object-contain"
                    />
                </div>

                <div className="flex flex-col items-center gap-y-8">
                    <AnimatedTitle className="max-w-[480px] text-center text-xl font-bold text-neutral-600 lg:text-3xl">
                        Get In Touch With Our Wellness Team
                    </AnimatedTitle>
                    <p className="text-center text-muted-foreground max-w-[480px]">
                        Have questions about Luna or need support on your wellness journey? We&apos;re here to help you every step of the way.
                    </p>
                </div>
            </div>

            {/* Contact Methods Section - Following homepage style */}
            <section className="py-8 md:py-12 lg:py-16 bg-blue-50/50 relative overflow-hidden rounded-3xl mx-4 md:mx-8 my-8 shadow-xl">
                {/* 3D effect layers */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-white/30 to-transparent opacity-80 transform rotate-3 scale-105"></div>
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-blue-100/20 to-purple-100/20 transform -rotate-1"></div>
                <div className="absolute inset-0 rounded-3xl border border-white/20 transform -rotate-1 scale-[1.01]"></div>

                {/* Decorative floating elements */}
                <div className="absolute -left-12 top-1/4 transform hover:scale-110 transition-transform animate-float">
                    <div className="bg-gradient-to-br from-blue-400 to-blue-600 text-white p-3 rounded-2xl shadow-2xl transform rotate-12 hover:rotate-6 transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                    </div>
                </div>

                <div className="absolute -right-12 top-1/2 transform hover:scale-110 transition-transform animate-float-slow">
                    <div className="bg-gradient-to-br from-green-400 to-green-600 text-white p-3 rounded-2xl shadow-2xl transform -rotate-12 hover:-rotate-6 transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                    </div>
                </div>

                <div className="mx-auto max-w-[1300px] px-4 sm:px-8 lg:px-12 relative z-10">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white">
                            How Can We <span className="text-blue-500 dark:text-blue-400">Help You</span>?
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 mx-auto mt-4 rounded-full"></div>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
                            Choose the best way to reach out to our wellness support team
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {contactMethods.map((method, index) => (
                            <a
                                key={index}
                                href={method.action}
                                className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 group text-center block hover:-translate-y-1"
                            >
                                <div className={`w-16 h-16 ${method.bgColor} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                                    <div className={method.color}>
                                        {method.icon}
                                    </div>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                    {method.title}
                                </h3>
                                <p className="text-gray-600 text-sm mb-3">
                                    {method.description}
                                </p>
                                <p className={`font-medium ${method.color}`}>
                                    {method.contact}
                                </p>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form Section - Following homepage style */}
            <section className="py-8 md:py-12 lg:py-16 bg-green-50/50 relative overflow-hidden rounded-3xl mx-4 md:mx-8 my-8 shadow-xl">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-white/30 to-transparent opacity-80 transform rotate-3 scale-105"></div>
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-green-100/20 to-blue-100/20 transform -rotate-1"></div>
                <div className="absolute inset-0 rounded-3xl border border-white/20 transform -rotate-1 scale-[1.01]"></div>

                <div className="mx-auto max-w-[1300px] px-4 sm:px-8 lg:px-12 relative z-10">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
                            Send Us a <span className="text-green-500">Message</span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                Ready to Start Your Wellness Journey?
                            </h3>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Whether you have questions about Luna, need technical support, or want to learn more about our wellness programs, we&apos;re here to help.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                                        <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <span className="text-gray-700">24/7 support available</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                                        <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <span className="text-gray-700">Quick response within 24 hours</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                                        <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <span className="text-gray-700">Personalized wellness guidance</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20">
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                                            First Name
                                        </label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            name="firstName"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                                            placeholder="Your first name"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                                            Last Name
                                        </label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            name="lastName"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                                            placeholder="Your last name"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                                        placeholder="your@email.com"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                                        placeholder="How can we help you?"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors resize-none"
                                        placeholder="Tell us more about your question or how we can help..."
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold py-3 px-6 rounded-xl hover:from-green-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
                                >
                                    Send Message
                                </button>
                            </form>
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
                                How quickly will I receive a response?
                            </h3>
                            <p className="text-gray-600">
                                We typically respond to all inquiries within 24 hours during business days. For urgent matters, please use our live chat feature for immediate assistance.
                            </p>
                        </div>

                        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                Can I speak with Luna directly?
                            </h3>
                            <p className="text-gray-600">
                                Yes! Luna is available 24/7 through our app and website chat feature. For technical support or billing questions, our human support team is also available.
                            </p>
                        </div>

                        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                Do you offer phone support?
                            </h3>
                            <p className="text-gray-600">
                                Phone support is available for premium subscribers during business hours (9 AM - 6 PM PST, Monday-Friday). All users can access email and chat support 24/7.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
