import { Atom, Earth, Orbit, Trophy, Zap } from 'lucide-react'

import { ReasonsItem } from '@/components/landing/ReasonsItem'
import { AnimatedTitle } from '@/components/motion/AnimatedTitle'

export function Reasons() {
    return (
        <section className="px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl space-y-8">
                <AnimatedTitle>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center text-gray-900 dark:text-white mb-8">
                        The <span className="text-green-600 dark:text-green-400">future</span> of{' '}
                        <span className="text-blue-600 dark:text-blue-400">learning</span>
                    </h2>
                </AnimatedTitle>
                <ul className="space-y-1 text-2xl sm:text-3xl md:text-4xl">
                    <li>
                        <ReasonsItem
                            className="text-white bg-blue-500 hover:bg-blue-600 dark:hover:bg-blue-400"
                            reason="Learn 5x faster, 5x more fun"
                        >
                            <Zap />
                        </ReasonsItem>
                    </li>
                    <li>
                        <ReasonsItem
                            className="bg-green-100 text-green-800 hover:bg-green-200 dark:bg-green-800 dark:text-green-100 dark:hover:bg-green-700"
                            reason="Custom lessons backed by science"
                            delay={0.2}
                        >
                            <Atom />
                        </ReasonsItem>
                    </li>
                    <li>
                        <ReasonsItem
                            reason="Fun challenges to stay motivated"
                            className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200 dark:bg-yellow-800 dark:text-yellow-100 dark:hover:bg-yellow-700"
                            delay={0.3}
                        >
                            <Trophy />
                        </ReasonsItem>
                    </li>
                    <li>
                        <ReasonsItem
                            reason="Use Lingo wherever you go"
                            className="bg-purple-100 text-purple-800 hover:bg-purple-200 dark:bg-purple-800 dark:text-purple-100 dark:hover:bg-purple-700"
                            delay={0.4}
                        >
                            <Earth />
                        </ReasonsItem>
                    </li>
                    <li>
                        <ReasonsItem
                            reason="Connect, challenge and have fun"
                            className="bg-muted/80 text-muted-foreground hover:bg-muted/50 dark:bg-muted/60"
                            delay={0.5}
                        >
                            <Orbit />
                        </ReasonsItem>
                    </li>
                </ul>
            </div>
        </section>
    )
}
