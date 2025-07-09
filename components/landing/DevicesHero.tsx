'use client'

import { motion } from 'framer-motion'
import { Download, Play } from 'lucide-react'
import Image from 'next/image'

import { AnimatedTitle } from '@/components/motion/AnimatedTitle'
import { Button } from '@/components/ui/button'

const floatingIcons = [
    { icon: '/hero.svg', color: 'bg-green-500', position: 'top-16 left-16', delay: 0 },
    { icon: '/learn.svg', color: 'bg-blue-500', position: 'top-20 right-20', delay: 0.5 },
    { icon: '/reward.svg', color: 'bg-yellow-500', position: 'bottom-24 left-24', delay: 1 },
    { icon: '/heart.svg', color: 'bg-pink-500', position: 'bottom-16 right-16', delay: 1.5 },
    { icon: '/voice.svg', color: 'bg-purple-500', position: 'top-1/3 left-8', delay: 0.8 },
    { icon: '/bulb.svg', color: 'bg-orange-500', position: 'bottom-1/3 right-8', delay: 1.2 },
    { icon: '/mascot.svg', color: 'bg-emerald-500', position: 'top-1/2 left-1/4', delay: 0.3 },
    { icon: '/points.svg', color: 'bg-indigo-500', position: 'bottom-1/2 right-1/4', delay: 0.7 },
    { icon: '/shop.svg', color: 'bg-cyan-500', position: 'top-2/3 left-12', delay: 1.3 },
    { icon: '/unlimited.svg', color: 'bg-rose-500', position: 'bottom-2/3 right-12', delay: 0.9 },
    { icon: '/quests.svg', color: 'bg-violet-500', position: 'top-32 left-1/3', delay: 1.1 },
    { icon: '/leaderboard.svg', color: 'bg-amber-500', position: 'bottom-32 right-1/3', delay: 0.4 },
]

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3,
        },
    },
}

const iconVariants = {
    hidden: {
        opacity: 0,
        scale: 0,
        y: -50,
    },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            type: 'spring' as const,
            stiffness: 100,
            damping: 12,
        },
    },
}

const deviceVariants = {
    hidden: {
        opacity: 0,
        scale: 0.5,
        rotateX: -30,
    },
    visible: {
        opacity: 1,
        scale: 1,
        rotateX: 0,
        transition: {
            type: 'spring' as const,
            stiffness: 80,
            damping: 15,
        },
    },
}

export function DevicesHero() {
    return (
        <motion.section
            id="devices"
            className="relative pb-8 pt-16 md:py-20 overflow-hidden bg-gradient-to-br from-blue-50 to-slate-50 dark:from-slate-900 dark:to-slate-800 shadow-2xl border-t border-b border-gray-200 dark:border-gray-700"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{
                scale: 1.01,
                y: -5,
                transition: { type: "spring", stiffness: 300, damping: 20 }
            }}
        >
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-200/20 via-transparent to-transparent"></div>
            </div>

            {/* Floating icons background */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="absolute inset-0 pointer-events-none"
            >
                {floatingIcons.map((item, index) => (
                    <motion.div
                        key={index}
                        variants={iconVariants}
                        className={`absolute ${item.position} w-8 h-8 md:w-12 md:h-12 z-10 opacity-60`}
                        animate={{
                            y: [0, -10, 0],
                            rotate: [0, 5, 0],
                        }}
                        transition={{
                            duration: 3 + index * 0.5,
                            repeat: Infinity,
                            repeatType: "reverse" as const,
                            ease: "easeInOut",
                        }}
                    >
                        <div className={`${item.color} rounded-xl p-1 md:p-2 shadow-lg backdrop-blur-sm border border-white/20`}>
                            <Image
                                src={item.icon}
                                alt=""
                                width={32}
                                height={32}
                                className="w-full h-full object-contain filter brightness-0 invert"
                            />
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            <AnimatedTitle>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center text-gray-900 dark:text-white mb-8 relative z-10">
                    learn anytime,{" "}
                    <span className="text-green-600 dark:text-green-400">anywhere</span>
                </h2>
            </AnimatedTitle>

            {/* Main horizontal content grid - matching WhyLingo layout */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                className="relative z-10 mt-24 grid grid-cols-1 gap-6 px-4 sm:grid-cols-2 lg:grid-cols-3 lg:px-[5%] xl:px-[10%]"
            >
                {/* Phone Device Card */}
                <motion.div
                    variants={deviceVariants}
                    whileHover={{
                        scale: 1.08,
                        y: -10,
                        rotate: [0, -2, 2, 0],
                        transition: {
                            scale: { type: "spring", stiffness: 300 },
                            y: { type: "spring", stiffness: 300 },
                            rotate: { type: "tween", duration: 0.3 }
                        }
                    }}
                    className="group relative rounded-2xl p-6 transition-all duration-300 shadow-2xl hover:shadow-3xl bg-gradient-to-br from-blue-500 to-blue-600 text-white overflow-hidden border border-blue-400/30"
                >
                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute -top-6 -right-6 w-20 h-20">
                            <svg viewBox="0 0 100 100" className="w-full h-full text-white">
                                <circle cx="50" cy="50" r="45" fill="currentColor" opacity="0.8" />
                            </svg>
                        </div>
                    </div>

                    <motion.div
                        className="relative z-10 mb-4 flex justify-center"
                        whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                    >
                        <div className="w-16 h-28 bg-gradient-to-br from-white to-gray-100 rounded-2xl p-2 shadow-2xl border-2 border-white">
                            <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center">
                                <Image
                                    src="/mascot.svg"
                                    alt=""
                                    width={32}
                                    height={32}
                                    className="filter brightness-0 invert"
                                />
                            </div>
                        </div>
                    </motion.div>

                    <h3 className="relative z-10 mb-2 text-xl font-bold text-center">
                        On Your Phone
                    </h3>
                    <p className="relative z-10 text-sm opacity-90 text-center mb-4">
                        Learn during commutes, breaks, or whenever you have a few minutes
                    </p>

                    <Button
                        size="sm"
                        className="w-full bg-white/20 text-white hover:bg-white/30 border border-white/20 flex items-center gap-2"
                    >
                        <Download className="w-4 h-4" />
                        Mobile App
                    </Button>
                </motion.div>

                {/* Tablet Device Card */}
                <motion.div
                    variants={deviceVariants}
                    whileHover={{
                        scale: 1.08,
                        y: -10,
                        rotate: [0, -2, 2, 0],
                        transition: {
                            scale: { type: "spring", stiffness: 300 },
                            y: { type: "spring", stiffness: 300 },
                            rotate: { type: "tween", duration: 0.3 }
                        }
                    }}
                    className="group relative rounded-2xl p-6 transition-all duration-300 shadow-2xl hover:shadow-3xl bg-gradient-to-br from-green-500 to-green-600 text-white overflow-hidden border border-green-400/30"
                >
                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute -top-6 -right-6 w-20 h-20">
                            <svg viewBox="0 0 100 100" className="w-full h-full text-white">
                                <polygon points="50,10 80,80 20,80" fill="currentColor" opacity="0.8" />
                            </svg>
                        </div>
                    </div>

                    <motion.div
                        className="relative z-10 mb-4 flex justify-center"
                        whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                    >
                        <div className="w-32 h-24 bg-gradient-to-br from-white to-gray-100 rounded-2xl p-2 shadow-2xl border-2 border-white">
                            <div className="w-full h-full bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
                                <Image
                                    src="/learn.svg"
                                    alt=""
                                    width={28}
                                    height={28}
                                    className="filter brightness-0 invert"
                                />
                            </div>
                        </div>
                    </motion.div>

                    <h3 className="relative z-10 mb-2 text-xl font-bold text-center">
                        On Your Tablet
                    </h3>
                    <p className="relative z-10 text-sm opacity-90 text-center mb-4">
                        Perfect for interactive lessons and reading practice at home
                    </p>

                    <Button
                        size="sm"
                        className="w-full bg-white/20 text-white hover:bg-white/30 border border-white/20 flex items-center gap-2"
                    >
                        <Play className="w-4 h-4" />
                        Tablet Experience
                    </Button>
                </motion.div>

                {/* Laptop Device Card */}
                <motion.div
                    variants={deviceVariants}
                    whileHover={{
                        scale: 1.08,
                        y: -10,
                        rotate: [0, -2, 2, 0],
                        transition: {
                            scale: { type: "spring", stiffness: 300 },
                            y: { type: "spring", stiffness: 300 },
                            rotate: { type: "tween", duration: 0.3 }
                        }
                    }}
                    className="group relative rounded-2xl p-6 transition-all duration-300 shadow-2xl hover:shadow-3xl bg-gradient-to-br from-purple-500 to-purple-600 text-white overflow-hidden sm:col-span-2 lg:col-span-1 border border-purple-400/30"
                >
                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute -top-6 -right-6 w-20 h-20">
                            <svg viewBox="0 0 100 100" className="w-full h-full text-white">
                                <rect x="20" y="20" width="60" height="60" fill="currentColor" opacity="0.8" rx="10" />
                            </svg>
                        </div>
                    </div>

                    <motion.div
                        className="relative z-10 mb-4 flex justify-center"
                        whileHover={{ scale: 1.05 }}
                    >
                        <div className="w-40 h-24 bg-gradient-to-br from-white to-gray-100 rounded-t-2xl shadow-2xl border-2 border-white">
                            <div className="w-full h-full bg-gradient-to-br from-purple-400 to-purple-600 rounded-t-xl flex items-center justify-center relative">
                                <Image
                                    src="/hero.svg"
                                    alt=""
                                    width={32}
                                    height={32}
                                    className="filter brightness-0 invert"
                                />
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-white rounded-b-xl"></div>
                            </div>
                        </div>
                    </motion.div>

                    <h3 className="relative z-10 mb-2 text-xl font-bold text-center">
                        On Your Computer
                    </h3>
                    <p className="relative z-10 text-sm opacity-90 text-center mb-4">
                        Full-featured lessons with typing practice and detailed progress
                    </p>

                    <Button
                        size="sm"
                        className="w-full bg-white/20 text-white hover:bg-white/30 border border-white/20 flex items-center gap-2"
                    >
                        <Download className="w-4 h-4" />
                        Web Platform
                    </Button>
                </motion.div>
            </motion.div>
        </motion.section>
    )
}
