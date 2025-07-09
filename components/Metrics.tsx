'use client'

import { type PropsWithChildren, useRef } from 'react'

import { useScroll } from 'framer-motion'

import { MetricsItem } from '@/components/landing/MetricsItem'
import { AnimatedTitle } from '@/components/motion/AnimatedTitle'

export function Metrics({ children }: PropsWithChildren) {
    const ref = useRef<HTMLUListElement>(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start'],
    })

    return (
        <section className="pb-8 pt-16 md:py-20">
            <AnimatedTitle>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center text-gray-900 dark:text-white mb-8">
                    <span className="text-green-600 dark:text-green-400">Lingo</span> by the{' '}
                    <span className="text-blue-600 dark:text-blue-400 underline decoration-wavy underline-offset-4 md:underline-offset-8">
                        numbers
                    </span>
                </h2>
            </AnimatedTitle>
            <ul ref={ref} className="relative mt-24 grid grid-cols-12 pb-40 sm:grid-cols-6 lg:px-[5%]">
                <li className="sticky top-[10%] col-start-1 col-end-13 pb-8 sm:col-start-1 sm:col-end-7 sm:pb-16 lg:top-[5%] lg:pb-40 z-10">
                    <MetricsItem
                        className="bg-blue-500 text-white"
                        number={1000}
                        description="hours of fun content"
                        offset={20}
                        progress={scrollYProgress}
                    />
                </li>
                <li className="sticky top-[15%] col-start-1 col-end-13 pb-8 sm:col-start-1 sm:col-end-7 sm:pb-16 lg:pb-40 z-20">
                    <MetricsItem
                        className="bg-green-500 text-white"
                        number={23}
                        description="language courses"
                        offset={22.5}
                        progress={scrollYProgress}
                    />
                </li>
                <li className="sticky top-[20%] col-start-1 col-end-13 pb-8 sm:col-start-1 sm:col-end-7 sm:pb-16 lg:pb-40 z-30">
                    <MetricsItem
                        className="bg-orange-500 text-white"
                        number={6}
                        prefix="~"
                        suffix="M"
                        description="users globally"
                        offset={25}
                        progress={scrollYProgress}
                    />
                </li>
                <li className="sticky top-[25%] col-start-1 col-end-13 pb-8 sm:col-start-1 sm:col-end-7 sm:pb-16 lg:top-[25%] lg:pb-40 z-40">
                    <MetricsItem
                        className="bg-gradient-to-b from-purple-500 to-purple-700 text-white"
                        number={93}
                        suffix="%"
                        description="fluency in two months"
                        offset={20}
                        progress={scrollYProgress}
                        last
                    />
                </li>
                <li className="relative col-start-1 col-end-13 sm:col-end-10 mt-96 pt-20 z-50">
                    <div className="bg-background/95 backdrop-blur-sm rounded-lg p-6 px-8 mx-4 shadow-lg max-w-5xl">{children}</div>
                </li>
            </ul>
        </section>
    )
}
