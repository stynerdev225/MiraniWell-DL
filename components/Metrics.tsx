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
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 165 165" className="w-full h-auto">
                            <path fill="currentColor" d="M120.63 54.3c-11.36.29-30.74-3.47-31.52 13.31H75.76c-.78-16.78-20.18-13.02-31.52-13.31-13.57.5-14.45 12.89-13.71 23.55.41 17.15 20.05 13.46 31.54 13.71 9.29.09 14.89-8.63 13.71-17.3h13.31c-1.6 20.72 17.57 17.22 31.54 17.3 13.57-.5 14.45-12.89 13.71-23.55 0-7.57-6.14-13.71-13.71-13.71Z" />
                            <path fill="currentColor" d="M33.88 58.12c-1.5-.63-3.72-1.14-4.49.8-.64 1.87-3.4 5.76-.32 6.91 1.53.78 3.88 1.42 4.68-.66.62-1.92 3.4-6.03.12-7.05ZM131.56 58.12c1.5-.63 3.72-1.14 4.49.8.64 1.87 3.4 5.76.32 6.91-1.53.78-3.88 1.42-4.68-.66-.62-1.92-3.4-6.03-.12-7.05Z" />
                            <path fill="currentColor" d="M29.39 58.92-.43 44.1v6.66l28.2 11.96 1.62-3.8zM135.38 58.92l30.06-14.69v6.67L137 62.72l-1.62-3.8zM65.15 116.21c16.27.14 33.82 1.35 49.04-5.22 2.7-1.58 5-3.66 7.53-5.47 17.73-11.9-2.02 22.3-17.53 24.89-13.62 3.38-29.48 4.91-42.66-.71-10.44-5.35-9.32-15.31 3.61-13.49Z" />
                        </svg>
                    </MetricsItem>
                </li>
                <li className="sticky top-[15%] col-start-1 col-end-13 pb-8 sm:col-start-1 sm:col-end-7 sm:pb-16 lg:pb-40 z-20">
                    <MetricsItem
                        className="bg-green-500 text-white"
                        number={23}
                        description="language courses"
                        offset={22.5}
                        progress={scrollYProgress}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 165 165" className="w-full h-auto">
                            <path fill="currentColor" d="M111.1 90.3c17.25 4.29-9.93 34.24-29.1 31.35-19.17 2.88-46.36-27.06-29.1-31.35h58.21ZM55.41 59.89c4.51 7.6-.3 12.93-8.45 10.86-7.33-.83-14.91.68-21.36 4.26-3.73 2.44-5.63-3.42-2.43-5.41 8.28-3.58 18.6-4.55 27.39-2.86 1.96.75 2.33-1.58 1.24-3-5.51-9.03-18.33-6.09-25.09-11.15-2.7-3.85 5.16-5.94 7.89-5.79 7.66.43 17.01 6.63 20.81 13.09ZM108.59 59.89c-4.51 7.6.3 12.93 8.45 10.86 7.33-.83 14.91.68 21.36 4.26 3.73 2.44 5.63-3.42 2.43-5.41-8.28-3.58-18.6-4.55-27.39-2.86-1.96.75-2.33-1.58-1.24-3 5.51-9.03 18.33-6.09 25.09-11.15 2.7-3.85-5.16-5.94-7.88-5.79-7.66.43-17.01 6.63-20.81 13.09Z" />
                        </svg>
                    </MetricsItem>
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
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 165 165" className="w-full h-auto">
                            <path fill="currentColor" d="M59.93 104.53c20.14 2.01 40.16 2.25 60.39-1.14 5.22-.88 9.23 3.18 5.46 7.92-16.65 15.03-42.57 10.49-63.2 9.13-6.97-1.17-23.84-5.11-24.38-14.37.69-6.75 17.07-1.1 21.74-1.54Z" />
                            <path fill="currentColor" d="M28.05 63.19c.47-27.37 41.18-27.36 41.64 0-.47 27.37-41.18 27.36-41.64 0Z" />
                            <path fill="currentColor" d="M39.55 63.19c-.18-12.09 18.81-12.09 18.63 0 .18 12.09-18.81 12.09-18.63 0Z" />
                            <path fill="currentColor" d="M95.79 63.19c.47-27.37 41.18-27.36 41.64 0-.47 27.37-41.18 27.36-41.64 0Z" />
                            <path fill="currentColor" d="M107.29 63.19c-.18-12.09 18.81-12.09 18.63 0 .18 12.09-18.81 12.09-18.63 0Z" />
                        </svg>
                    </MetricsItem>
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
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 165 165" className="w-full h-auto">
                            <path fill="currentColor" d="M25.09 65.55c-1.19-12.54 22.58-12.77 28.68-5.58.87.74 6.43 7.7 2.43 7.79-4.76-1.6-6.58-7.17-11.83-8.18-5.06-1.21-10.6.43-14.14 4.26-1.12 1.21-3.93 4.65-5.14 1.71ZM137.57 65.55c1.19-12.54-22.58-12.77-28.68-5.58-.87.74-6.43 7.7-2.43 7.79 4.76-1.6 6.58-7.17 11.83-8.18 5.06-1.21 10.6.43 14.14 4.26 1.12 1.21 3.93 4.65 5.14 1.71ZM49.12 96.68c27.8 9.21 61.58 6.27 85.49-11.4 1.94-1.5 5.5-4.64 7.77-1.72 2.43 6.59-5.76 11.79-10.22 15.32-12.55 9.17-28.05 13.59-43.42 14.6-18.82 1.23-38.29-1.96-54.81-11.37-4.63-2.88-12.07-6.21-11.31-12.69 4.08-8.41 19.56 6.7 26.5 7.25Z" />
                        </svg>
                    </MetricsItem>
                </li>
                <li className="relative col-start-1 col-end-13 sm:col-end-10 mt-96 pt-20 z-50">
                    <div className="bg-background/95 backdrop-blur-sm rounded-lg p-6 px-8 mx-4 shadow-lg max-w-5xl">{children}</div>
                </li>
            </ul>
        </section>
    )
}
