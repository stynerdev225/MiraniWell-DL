'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

import { AnimatedTitle } from '@/components/motion/AnimatedTitle'

const team = [
    {
        name: 'Luis von Ahn',
        role: 'CEO & Co-founder',
        image: '/mascot.svg',
        description: 'Computer scientist and entrepreneur passionate about education.',
    },
    {
        name: 'Severin Hacker',
        role: 'CTO & Co-founder',
        image: '/hero.svg',
        description: 'Software engineer focused on making learning accessible to everyone.',
    },
    {
        name: 'Duo',
        role: 'Chief Owl Officer',
        image: '/learn.svg',
        description: 'Our beloved mascot who keeps millions motivated every day.',
    },
]



export function About() {
    return (
        <section id="about" className="py-16 md:py-20 lg:py-24 bg-white dark:bg-gray-900">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <AnimatedTitle>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center text-gray-900 dark:text-white mb-8">
                        About{' '}
                        <span className="text-green-600 dark:text-green-400">Lingo</span>
                    </h2>
                </AnimatedTitle>

                {/* Mission Statement */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="mt-16 text-center max-w-4xl mx-auto"
                >
                    <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                        Our mission is to make education free, fun, and accessible to everyone.
                        We believe that learning a new language should be an enjoyable journey,
                        not a chore. That&apos;s why we&apos;ve created bite-sized lessons that fit into
                        your daily routine.
                    </p>
                </motion.div>

                {/* Our Story */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20"
                >
                    <h3 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 dark:text-white mb-8 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                        Our Story
                    </h3>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                                Founded in 2011, Lingo started with a simple idea: make language learning
                                free and accessible to everyone, everywhere. What began as a passion project
                                has grown into the world&apos;s most popular way to learn a language.
                            </p>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                Today, we&apos;re proud to have helped over 500 million people discover the joy
                                of learning languages. Our bite-sized lessons make it easy to build a daily
                                habit, and our gamified approach keeps learners motivated and engaged.
                            </p>
                        </div>
                        <div className="relative h-64 lg:h-80 rounded-2xl overflow-hidden">
                            <Image
                                src="/hero.svg"
                                alt="Our story"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </motion.div>

                {/* Team */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20"
                >
                    <h3 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 dark:text-white mb-12 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                        Meet Our Team
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {team.map((member, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{
                                    y: -5,
                                    scale: 1.02,
                                    transition: { type: "spring", stiffness: 300 }
                                }}
                                className="text-center bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-xl"
                            >
                                <div className="relative w-24 h-24 mx-auto mb-6">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover rounded-full"
                                    />
                                </div>
                                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                    {member.name}
                                </h4>
                                <p className="text-green-600 font-medium mb-4">
                                    {member.role}
                                </p>
                                <p className="text-gray-600 dark:text-gray-300 text-sm">
                                    {member.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Values */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    whileHover={{
                        y: -5,
                        scale: 1.02,
                        transition: { type: "spring", stiffness: 300 }
                    }}
                    className="mt-20 text-center bg-gradient-to-r from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-12 shadow-xl"
                >
                    <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-12 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                        Our Values
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                                Accessibility
                            </h4>
                            <p className="text-gray-600 dark:text-gray-300">
                                Education should be free and available to everyone, regardless of background.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                                Fun Learning
                            </h4>
                            <p className="text-gray-600 dark:text-gray-300">
                                Learning is most effective when it&apos;s enjoyable and engaging.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                                Scientific Approach
                            </h4>
                            <p className="text-gray-600 dark:text-gray-300">
                                Our methods are backed by research and continuously improved.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
