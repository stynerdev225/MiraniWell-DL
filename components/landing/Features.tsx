'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

import { AnimatedTitle } from '@/components/motion/AnimatedTitle'

const features = [
    {
        title: 'backed by science',
        description: 'We use a combination of research-backed teaching methods and delightful content to create courses that effectively teach reading, writing, listening, and speaking skills!',
        image: '/hero.svg',
        backgroundColor: 'bg-gradient-to-br from-blue-50 to-indigo-100',
        titleColor: 'text-blue-600',
    },
    {
        title: 'stay motivated',
        description: 'We make it easy to form a habit of language learning with game-like features, fun challenges, and reminders from our friendly mascot, Duo the owl.',
        image: '/mascot.svg',
        backgroundColor: 'bg-gradient-to-br from-green-50 to-emerald-100',
        titleColor: 'text-green-600',
    },
    {
        title: 'personalized learning',
        description: 'Combining the best of AI and language science, lessons are tailored to help you learn at just the right level and pace.',
        image: '/lang.svg',
        backgroundColor: 'bg-gradient-to-br from-purple-50 to-violet-100',
        titleColor: 'text-purple-600',
    },
]

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1,
        },
    },
}

const itemVariants = {
    hidden: {
        opacity: 0,
        y: 30,
        scale: 0.95,
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: 'spring' as const,
            stiffness: 100,
            damping: 12,
            duration: 0.6,
        },
    },
}

export function Features() {
    return (
        <section id="features" className="py-16 md:py-20 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                    className="grid gap-12 lg:gap-16"
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            variants={itemVariants}
                            className={`grid items-center gap-8 lg:gap-16 ${index % 2 === 0
                                ? 'lg:grid-cols-2'
                                : 'lg:grid-cols-2'
                                }`}
                        >
                            {/* Image */}
                            <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                                <div className={`relative mx-auto h-80 w-80 rounded-3xl ${feature.backgroundColor} p-8 lg:h-96 lg:w-96 shadow-lg`}>
                                    <div className="relative h-full w-full">
                                        <Image
                                            src={feature.image}
                                            alt={feature.title}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className={`space-y-6 text-center lg:text-left ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                                <AnimatedTitle>
                                    <h3 className={`text-3xl font-bold lg:text-4xl xl:text-5xl ${feature.titleColor}`}>
                                        {feature.title}
                                    </h3>
                                </AnimatedTitle>
                                <p className="text-lg text-gray-600 lg:text-xl leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
