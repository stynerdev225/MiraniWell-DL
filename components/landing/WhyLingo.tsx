'use client'

import { motion } from 'framer-motion'
import { Award, BookOpen, Globe, Target, Users, Zap } from 'lucide-react'
import Image from 'next/image'

import { AnimatedTitle } from '@/components/motion/AnimatedTitle'

const highlights = [
    {
        icon: BookOpen,
        title: 'Interactive Lessons',
        description: 'Engaging exercises that make learning fun and memorable',
        className: 'text-white bg-blue-500 hover:bg-blue-600 dark:hover:bg-blue-400',
        image: '/learn.svg',
    },
    {
        icon: Target,
        title: 'Personalized Learning',
        description: 'AI-powered lessons adapted to your pace and style',
        className: 'text-white bg-green-500 hover:bg-green-600 dark:hover:bg-green-400',
        image: '/hero.svg',
    },
    {
        icon: Globe,
        title: 'Global Community',
        description: 'Connect with millions of learners worldwide',
        className: 'text-white bg-orange-500 hover:bg-orange-600 dark:hover:bg-orange-400',
        image: '/voice.svg',
    },
    {
        icon: Award,
        title: 'Proven Results',
        description: 'Research-backed methods with measurable progress',
        className: 'text-white bg-purple-500 hover:bg-purple-600 dark:hover:bg-purple-400',
        image: '/reward.svg',
    },
    {
        icon: Zap,
        title: 'Quick & Effective',
        description: 'See real progress in just 15 minutes a day',
        className: 'text-white bg-pink-500 hover:bg-pink-600 dark:hover:bg-pink-400',
        image: '/bulb.svg',
    },
    {
        icon: Users,
        title: 'Expert Content',
        description: 'Courses designed by language education specialists',
        className: 'text-white bg-indigo-500 hover:bg-indigo-600 dark:hover:bg-indigo-400',
        image: '/mascot.svg',
    },
]

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3,
        },
    },
}

const itemVariants = {
    hidden: {
        opacity: 0,
        y: 50,
        scale: 0.8,
        rotateX: -15,
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        rotateX: 0,
        transition: {
            type: 'spring' as const,
            stiffness: 100,
            damping: 12,
            duration: 0.8,
        },
    },
}

export function WhyLingo() {
    return (
        <motion.section
            id="why-lingo"
            className="relative py-4 md:py-6 overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 rounded-3xl mx-4 lg:mx-8 shadow-2xl border border-gray-200/50 dark:border-gray-700/50"
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{
                scale: 1.01,
                y: -8,
                transition: { type: "spring", stiffness: 300, damping: 20 }
            }}
        >
            {/* FLOATING ELEMENTS - HIGHEST Z-INDEX TO BE VISIBLE */}
            <div className="absolute top-1/6 left-1/6 w-12 h-12 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full opacity-90 animate-float shadow-xl flex items-center justify-center" style={{zIndex: 9999}}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            </div>
            <div className="absolute top-1/3 right-1/6 w-14 h-14 bg-gradient-to-br from-green-300 to-green-500 rounded-full opacity-90 animate-float-slow shadow-xl flex items-center justify-center" style={{zIndex: 9999}}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div className="absolute bottom-1/4 left-1/4 w-10 h-10 bg-gradient-to-br from-purple-300 to-purple-500 rounded-full opacity-90 animate-float-medium shadow-xl flex items-center justify-center" style={{zIndex: 9999}}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <div className="absolute bottom-1/6 right-1/4 w-16 h-16 bg-gradient-to-br from-blue-300 to-blue-500 rounded-full opacity-90 animate-float shadow-xl flex items-center justify-center" style={{zIndex: 9999}}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            {/* Enhanced background images with better visibility */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Central hero image - large and prominent */}
                <motion.div
                    initial={{ scale: 0.7, opacity: 0, rotate: -10 }}
                    animate={{ scale: 1, opacity: 0.95, rotate: 0 }}
                    transition={{ duration: 2.5, ease: "easeOut" }}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] z-0"
                >
                    <div className="relative w-full h-full">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl"></div>
                        <Image
                            src="/hero.svg"
                            alt="Background decoration"
                            width={600}
                            height={600}
                            className="w-full h-full object-contain filter drop-shadow-2xl"
                        />
                    </div>
                </motion.div>

                {/* Top-left mascot - highly visible */}
                <motion.div
                    initial={{ scale: 0.5, opacity: 0, x: -100, y: -100 }}
                    animate={{ scale: 1, opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 3, delay: 0.8, ease: "easeOut" }}
                    className="absolute top-4 left-4 md:top-8 md:left-8 w-32 h-32 md:w-48 md:h-48 z-5"
                >
                    <div className="relative w-full h-full">
                        <div className="absolute inset-0 bg-gradient-to-br from-green-200/40 to-yellow-200/40 rounded-full blur-2xl"></div>
                        <Image
                            src="/mascot.svg"
                            alt="Background mascot"
                            width={192}
                            height={192}
                            className="w-full h-full object-contain filter drop-shadow-xl"
                        />
                    </div>
                </motion.div>



                {/* Top-right learn - floating animation */}
                <motion.div
                    initial={{ scale: 0.4, opacity: 0, x: 100, y: -100 }}
                    animate={{ scale: 1, opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 3.5, delay: 1.6, ease: "easeOut" }}
                    className="absolute top-8 right-8 md:top-12 md:right-12 w-28 h-28 md:w-40 md:h-40 z-5"
                >
                    <motion.div
                        animate={{
                            y: [-5, 5],
                            rotate: [-2, 2]
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut"
                        }}
                        className="relative w-full h-full"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-200/40 to-blue-200/40 rounded-full blur-xl"></div>
                        <Image
                            src="/learn.svg"
                            alt="Background learn"
                            width={160}
                            height={160}
                            className="w-full h-full object-contain filter drop-shadow-lg"
                        />
                    </motion.div>
                </motion.div>



                {/* Additional smaller decorative images for more richness - hidden on mobile for cleaner look */}
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 2, delay: 2.5, ease: "easeOut" }}
                    className="hidden md:block absolute top-1/4 right-1/4 w-24 h-24 z-5"
                >
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                        <Image
                            src="/bulb.svg"
                            alt="Background bulb"
                            width={96}
                            height={96}
                            className="w-full h-full object-contain filter drop-shadow-md opacity-60"
                        />
                    </motion.div>
                </motion.div>


            </div>

            {/* Background decorative elements */}
            <div className="absolute inset-0 pointer-events-none">
                <motion.div
                    initial={{ rotate: 0, opacity: 0.6 }}
                    animate={{ rotate: 360, opacity: 1 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute top-5 left-5 w-32 h-32"
                >
                    <svg viewBox="0 0 100 100" className="w-full h-full text-blue-600">
                        <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="4" strokeDasharray="5,5" />
                        <circle cx="50" cy="50" r="25" fill="currentColor" opacity="0.8" />
                    </svg>
                </motion.div>

                <motion.div
                    initial={{ rotate: 0, opacity: 0.6 }}
                    animate={{ rotate: -360, opacity: 1 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute top-5 right-5 w-28 h-28"
                >
                    <svg viewBox="0 0 100 100" className="w-full h-full text-green-600">
                        <polygon points="50,10 80,80 20,80" fill="currentColor" opacity="0.9" />
                        <polygon points="50,20 70,70 30,70" fill="none" stroke="currentColor" strokeWidth="4" />
                    </svg>
                </motion.div>

                <motion.div
                    initial={{ scale: 0.8, opacity: 0.6 }}
                    animate={{ scale: 1.2, opacity: 0.9 }}
                    transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                    className="absolute bottom-5 left-5 w-30 h-30"
                >
                    <svg viewBox="0 0 100 100" className="w-full h-full text-purple-600">
                        <rect x="20" y="20" width="60" height="60" fill="currentColor" opacity="0.8" rx="10" />
                        <rect x="30" y="30" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="4" rx="5" />
                    </svg>
                </motion.div>

                <motion.div
                    initial={{ y: 0, opacity: 0.6 }}
                    animate={{ y: -10, opacity: 1 }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                    className="absolute bottom-5 right-5 w-26 h-26"
                >
                    <svg viewBox="0 0 100 100" className="w-full h-full text-orange-600">
                        <circle cx="50" cy="50" r="30" fill="currentColor" opacity="0.9" />
                        <path d="M35 50 L50 35 L65 50 L50 65 Z" fill="none" stroke="currentColor" strokeWidth="5" />
                    </svg>
                </motion.div>
            </div>

            <AnimatedTitle>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center text-gray-900 dark:text-white mb-4 relative z-10">
                    Why choose{' '}
                    <span className="text-green-600 dark:text-green-400">Lingo</span>
                    <span className="text-blue-600 dark:text-blue-400">?</span>
                </h2>
            </AnimatedTitle>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                className="relative z-10 mt-6 grid grid-cols-1 gap-4 px-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 lg:px-[5%] xl:px-[10%]"
            >
                {highlights.map((highlight, index) => (
                    <motion.div
                        key={highlight.title}
                        variants={itemVariants}
                        whileHover={{
                            scale: 1.05,
                            rotate: [0, -2, 2, 0],
                            transition: {
                                scale: { type: "spring", stiffness: 300 },
                                rotate: { type: "tween", duration: 0.3 }
                            }
                        }}
                        className={`group relative rounded-2xl p-6 transition-all duration-300 shadow-lg hover:shadow-xl ${highlight.className} overflow-hidden`}
                    >
                        {/* Enhanced card background decoration */}
                        <div className="absolute inset-0 opacity-20">
                            <motion.div
                                initial={{ scale: 0, rotate: -45 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{ delay: index * 0.2 + 0.3, type: "spring", stiffness: 100 }}
                                className="absolute -top-6 -right-6 w-20 h-20"
                            >
                                <svg viewBox="0 0 100 100" className="w-full h-full text-white">
                                    <circle cx="50" cy="50" r="45" fill="currentColor" opacity="0.8" />
                                    <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="3" strokeDasharray="5,5" />
                                    <circle cx="50" cy="50" r="15" fill="currentColor" opacity="0.6" />
                                </svg>
                            </motion.div>

                            <motion.div
                                initial={{ scale: 0, rotate: 45 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{ delay: index * 0.2 + 0.5, type: "spring", stiffness: 80 }}
                                className="absolute -bottom-4 -left-4 w-16 h-16"
                            >
                                <svg viewBox="0 0 100 100" className="w-full h-full text-white">
                                    <polygon points="50,10 90,90 10,90" fill="currentColor" opacity="0.6" />
                                    <polygon points="50,25 75,75 25,75" fill="none" stroke="currentColor" strokeWidth="2" />
                                </svg>
                            </motion.div>
                        </div>

                        {/* Image Section - Enhanced visibility */}
                        <motion.div
                            className="relative z-10 mb-4 flex justify-center"
                            initial={{ scale: 0.8, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 + 0.7, type: "spring", stiffness: 200 }}
                            whileHover={{
                                scale: 1.15,
                                rotate: [0, -5, 5, 0],
                                transition: { duration: 0.4, type: "tween" }
                            }}
                        >
                            <div className="relative w-24 h-24 bg-white/40 rounded-2xl p-4 backdrop-blur-md border-2 border-white/30 shadow-xl">
                                {/* Glow effect behind image */}
                                <div className="absolute inset-0 bg-white/20 rounded-2xl blur-sm"></div>
                                <Image
                                    src={highlight.image}
                                    alt={highlight.title}
                                    width={64}
                                    height={64}
                                    className="relative z-10 w-full h-full object-contain filter brightness-0 invert drop-shadow-lg"
                                />
                            </div>
                        </motion.div>

                        {/* Icon (smaller, as accent) */}
                        <motion.div
                            className="relative z-10 mb-3 flex justify-center"
                            whileHover={{ rotate: [0, -10, 10, 0], transition: { duration: 0.5, type: "tween" } }}
                        >
                            <highlight.icon className="h-8 w-8" strokeWidth={1.5} />
                        </motion.div>

                        <h3 className="relative z-10 mb-2 text-xl font-bold text-center">
                            {highlight.title}
                        </h3>
                        <p className="relative z-10 text-sm opacity-90 text-center">
                            {highlight.description}
                        </p>
                    </motion.div>
                ))}
            </motion.div>



        </motion.section>
    )
}
