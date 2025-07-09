'use client'

import { motion } from 'framer-motion'
import { Asterisk, ArrowDown } from 'lucide-react'
import Image from 'next/image'
import NextLink from 'next/link'

import { AnimatedTitle } from '@/components/motion/AnimatedTitle'
import { Button } from '@/components/ui/button'

function StartCTA() {
    return (
        <span className="group relative flex items-center justify-center rounded-full size-20 sm:size-28 lg:size-32 shadow-lg">
            <span className="absolute inset-0 animate-footer-pulse rounded-full bg-green-500 group-hover:paused" />
            <span className="relative z-10 flex items-center justify-center w-full h-full font-bold uppercase underline decoration-wavy underline-offset-2 transition-transform duration-300 ease-out group-hover:scale-125 text-white text-lg select-none">
                start
            </span>
        </span>
    )
}

export function Footer() {
    return (
        <footer className="space-y-4 px-1 pb-4">
            <motion.div
                initial={{ y: '10%', scale: 0.95, opacity: 0 }}
                whileInView={{ y: '0%', scale: 1, opacity: 1 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                className="relative mx-auto flex h-80 flex-col justify-between rounded-4xl bg-white text-gray-800 border-2 border-gray-200 shadow-xl sm:h-96 lg:h-[26rem]"
            >
                {/* Section 1: Top rotating text banner with marquee animation */}
                <div className="flex border-b-2 border-gray-200 max-md:flex-col-reverse">
                    <div className="group flex w-full flex-1 gap-12 overflow-hidden whitespace-nowrap py-2 text-xl font-bold capitalize max-md:border-t-2 max-md:border-gray-200 sm:text-3xl md:border-r-2 md:border-gray-200 md:py-4">
                        <p className="flex animate-footer-marquee items-center gap-12 group-hover:paused">
                            <span className="text-gray-800">start your Wellness journey here.</span>
                            <ArrowDown className="h-[1.5em] w-[1.5em]" aria-hidden="true" strokeWidth={2.25} />
                            <span className="text-green-600 font-extrabold">learn anytime, learn anywhere.</span>
                            <Asterisk className="h-[1.5em] w-[1.5em]" aria-hidden="true" strokeWidth={2.25} />
                        </p>
                        <p
                            className="flex animate-footer-marquee items-center gap-12 group-hover:paused"
                            aria-hidden="true"
                        >
                            <span className="text-gray-800">start your Wellness journey here.</span>
                            <ArrowDown className="h-[1.5em] w-[1.5em]" aria-hidden="true" strokeWidth={2.25} />
                            <span className="text-green-600 font-extrabold">learn anytime, learn anywhere.</span>
                            <Asterisk className="h-[1.5em] w-[1.5em]" aria-hidden="true" strokeWidth={2.25} />
                        </p>
                        <p
                            className="flex animate-footer-marquee items-center gap-12 group-hover:paused"
                            aria-hidden="true"
                        >
                            <span className="text-gray-800">start your Wellness journey here.</span>
                            <ArrowDown className="h-[1.5em] w-[1.5em]" aria-hidden="true" strokeWidth={2.25} />
                            <span className="text-green-600 font-extrabold">learn anytime, learn anywhere.</span>
                            <Asterisk className="h-[1.5em] w-[1.5em]" aria-hidden="true" strokeWidth={2.25} />
                        </p>
                    </div>
                </div>
                <div className="flex-grow select-none overflow-hidden flex flex-row items-stretch">
                    {/* Section 2: Large "Lingo" text with animated title */}
                    <div className="flex-1 flex items-center min-w-0">
                        <AnimatedTitle className="md:absolute md:-bottom-1/4 md:left-0 md:translate-x-0">
                            <p className="pr-6 font-display text-[min(37vw,300px)] -tracking-widest text-gray-700">
                                Miriani Well
                            </p>
                        </AnimatedTitle>
                    </div>
                    {/* Section 3: Logo image with spring animation */}
                    <motion.div
                        className="relative flex items-end justify-end w-[520px] min-w-[320px] max-w-[700px] h-full ml-4 mr-4 max-md:hidden"
                        initial={{ y: '95%', x: '2%' }}
                        whileInView={{ y: '15%' }}
                        transition={{ type: 'spring', duration: 1.2 }}
                        viewport={{ margin: '10% 0% 0% 0%' }}
                    >
                        <div className="drop-shadow-lg w-full h-full flex items-end">
                            <Image
                                src="/mascot.svg"
                                alt="Lingo Mascot"
                                width={600}
                                height={600}
                                className="object-contain w-full h-auto"
                            />
                        </div>
                    </motion.div>
                </div>
                {/* Section 4: START button - Circular animated button with pulsing green background */}
                <div className="absolute z-30 footer-start-btn-position">
                    <div className="pointer-events-auto">
                        <NextLink href="/sign-up" className="rounded-full" aria-label="Start your language journey">
                            <StartCTA />
                        </NextLink>
                    </div>
                </div>
            </motion.div>
            {/* Section 5: Cute face emoticon centered above the language flags */}
            <div className="w-full flex flex-col items-center">
                <p className="text-center text-2xl mb-2">{`{◕ ◡ ◕}`}</p>
                <div className="hidden h-20 w-full border-t-2 border-slate-200 p-2 lg:block">
                    <div className="mx-auto flex h-full max-w-screen-lg items-center justify-evenly">
                        <Button size="lg" variant="ghost" className="w-full cursor-default">
                            <Image
                                src="/hr.svg"
                                alt="Croatian"
                                height={32}
                                width={40}
                                className="mr-4 rounded-md"
                            />
                            Croatian
                        </Button>
                        <Button size="lg" variant="ghost" className="w-full cursor-default">
                            <Image
                                src="/es.svg"
                                alt="Spanish"
                                height={32}
                                width={40}
                                className="mr-4 rounded-md"
                            />
                            Spanish
                        </Button>
                        <Button size="lg" variant="ghost" className="w-full cursor-default">
                            <Image
                                src="/fr.svg"
                                alt="French"
                                height={32}
                                width={40}
                                className="mr-4 rounded-md"
                            />
                            French
                        </Button>
                        <Button size="lg" variant="ghost" className="w-full cursor-default">
                            <Image
                                src="/it.svg"
                                alt="Italian"
                                height={32}
                                width={40}
                                className="mr-4 rounded-md"
                            />
                            Italian
                        </Button>
                        <Button size="lg" variant="ghost" className="w-full cursor-default">
                            <Image
                                src="/jp.svg"
                                alt="Japanese"
                                height={32}
                                width={40}
                                className="mr-4 rounded-md"
                            />
                            Japanese
                        </Button>
                    </div>
                </div>
            </div>
        </footer>
    )
}
