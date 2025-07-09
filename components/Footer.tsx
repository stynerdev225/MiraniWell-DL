'use client'

import { ClerkLoaded, SignedIn, SignedOut, SignUpButton } from '@clerk/nextjs'
import { motion } from 'framer-motion'
import { Asterisk, ArrowDown } from 'lucide-react'
import Image from 'next/image'
import NextLink from 'next/link'

import { AnimatedTitle } from '@/components/motion/AnimatedTitle'

function StartCTA() {
    return (
        <span className="group relative block size-20 rounded-inherit sm:size-28 sm:text-lg lg:size-32">
            <span className="absolute inset-0 animate-footer-pulse rounded-inherit bg-green-500 group-hover:paused" />
            <span className="absolute inset-0 flex items-center justify-center font-bold uppercase underline decoration-wavy underline-offset-2 transition-transform duration-300 ease-out group-hover:scale-125 text-white">
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
                className="relative mx-auto flex h-80 flex-col justify-between overflow-hidden rounded-4xl bg-white text-gray-800 border-2 border-gray-200 shadow-xl sm:h-96 lg:h-[26rem]"
            >
                <div className="flex border-b-2 border-gray-200 max-md:flex-col-reverse">
                    <div className="group flex w-full flex-1 gap-12 overflow-hidden whitespace-nowrap py-2 text-xl font-bold capitalize max-md:border-t-2 max-md:border-gray-200 sm:text-3xl md:border-r-2 md:border-gray-200 md:py-4">
                        <p className="flex animate-footer-marquee items-center gap-12 group-hover:paused">
                            <span className="text-gray-800">start your language journey here.</span>
                            <ArrowDown className="h-[1.5em] w-[1.5em]" aria-hidden="true" strokeWidth={2.25} />
                            <span className="text-green-600 font-extrabold">learn anytime, learn anywhere.</span>
                            <Asterisk className="h-[1.5em] w-[1.5em]" aria-hidden="true" strokeWidth={2.25} />
                        </p>
                        <p
                            className="flex animate-footer-marquee items-center gap-12 group-hover:paused"
                            aria-hidden="true"
                        >
                            <span className="text-gray-800">start your language journey here.</span>
                            <ArrowDown className="h-[1.5em] w-[1.5em]" aria-hidden="true" strokeWidth={2.25} />
                            <span className="text-green-600 font-extrabold">learn anytime, learn anywhere.</span>
                            <Asterisk className="h-[1.5em] w-[1.5em]" aria-hidden="true" strokeWidth={2.25} />
                        </p>
                        <p
                            className="flex animate-footer-marquee items-center gap-12 group-hover:paused"
                            aria-hidden="true"
                        >
                            <span className="text-gray-800">start your language journey here.</span>
                            <ArrowDown className="h-[1.5em] w-[1.5em]" aria-hidden="true" strokeWidth={2.25} />
                            <span className="text-green-600 font-extrabold">learn anytime, learn anywhere.</span>
                            <Asterisk className="h-[1.5em] w-[1.5em]" aria-hidden="true" strokeWidth={2.25} />
                        </p>
                    </div>
                </div>
                <div className="flex-grow select-none overflow-hidden">
                    <AnimatedTitle className="md:absolute md:-bottom-1/4 md:left-0 md:translate-x-0">
                        <p className="pr-6 font-display text-[min(37vw,300px)] -tracking-widest text-gray-700">
                            Lingo
                        </p>
                    </AnimatedTitle>
                    <motion.div
                        className="relative ml-auto flex h-full w-1/3 flex-col justify-end max-md:hidden"
                        initial={{ y: '95%', x: '2%' }}
                        whileInView={{ y: '15%' }}
                        transition={{ type: 'spring', duration: 1.2 }}
                        viewport={{ margin: '10% 0% 0% 0%' }}
                    >
                        <div className="drop-shadow-lg">
                            <Image
                                src="/logo.svg"
                                alt="Lingo Logo"
                                width={200}
                                height={200}
                                className="w-full h-auto"
                            />
                        </div>
                    </motion.div>
                </div>
                <ClerkLoaded>
                    <div className="absolute right-1/4 top-1/3 md:right-1/3 md:top-[30%]">
                        <SignedOut>
                            <SignUpButton mode="modal">
                                <button className="rounded-full" aria-label="Start your language journey">
                                    <StartCTA />
                                </button>
                            </SignUpButton>
                        </SignedOut>
                        <SignedIn>
                            <NextLink href="/learn" className="rounded-full">
                                <StartCTA />
                            </NextLink>
                        </SignedIn>
                    </div>
                </ClerkLoaded>
            </motion.div>
            <p className="text-center text-2xl">{`{◕ ◡ ◕}`}</p>
        </footer>
    )
}
