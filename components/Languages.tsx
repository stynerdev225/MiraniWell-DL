import type { Variants } from 'framer-motion'
import NextImage from 'next/image'

import { AnimatedList, AnimatedListItem } from '@/components/motion/AnimatedList'
import { AnimatedTitle } from '@/components/motion/AnimatedTitle'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Button } from '@/components/ui/button'
import { languages } from '@/config/languages'

const list = {
    visible: {
        opacity: 1,
        transition: {
            when: 'beforeChildren',
            staggerChildren: 0.08,
        },
    },
    hidden: { opacity: 0 },
} satisfies Variants

const item = {
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            type: "spring",
            mass: 0.6,
            stiffness: 100,
            damping: 10,
            duration: 0.4
        }
    },
    hidden: { opacity: 0, scale: 0.4 },
} satisfies Variants

export function Languages() {
    return (
        <section id="languages" className="space-y-12 px-4 py-16 sm:px-[10%] md:py-24 bg-white dark:from-slate-900 dark:to-slate-800">
            <AnimatedTitle>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center text-gray-900 dark:text-white mb-8 leading-tight">
                    <span className="text-blue-600 dark:text-blue-400">Wellness courses</span> available in <span className="text-green-600 dark:text-green-400">12 languages</span>
                </h2>
            </AnimatedTitle>
            <div className="mx-auto max-w-6xl">
                <AnimatedList
                    className="grid grid-cols-2 gap-6 text-center sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
                    variants={list}
                >
                    {languages.map(({ flag, title }) => (
                        <AnimatedListItem key={title} variants={item}>
                            <Button
                                variant="ghost"
                                size="lg"
                                className="group h-auto w-full flex-col gap-4 rounded-xl bg-white p-6 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl dark:bg-slate-800 border-2 border-transparent hover:border-blue-200"
                            >
                                {/* Flag Display */}
                                <div className="relative w-full max-w-[80px] mx-auto">
                                    <AspectRatio ratio={3 / 2} className="w-full">
                                        <NextImage
                                            src={`/img/flags/${flag}.svg`}
                                            alt={`${title} flag`}
                                            fill
                                            className="object-cover rounded-lg shadow-md border border-gray-200 dark:border-gray-600"
                                        />
                                    </AspectRatio>
                                </div>

                                {/* Language Name */}
                                <span className="font-bold text-base text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                                    {title}
                                </span>
                            </Button>
                        </AnimatedListItem>
                    ))}
                </AnimatedList>
            </div>

            {/* Debug: Show languages count */}
            <div className="text-center text-sm text-gray-500 mt-8">
                Showing {languages.length} languages
            </div>
        </section>
    )
}
