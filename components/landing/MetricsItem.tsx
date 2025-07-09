'use client'

import { useRef } from 'react'

import { motion, useScroll, useSpring, useTransform, type MotionValue } from 'framer-motion'

import { AnimatedNumber, type AnimatedNumberProps } from '@/components/motion/AnimatedNumber'

type MetricsItemProps = {
    description: string
    progress: MotionValue<number>
    last?: boolean
    offset?: number
    className?: string
}

export function MetricsItem({
    description,
    offset = 0,
    suffix = '+',
    ...rest
}: MetricsItemProps & AnimatedNumberProps) {
    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start 0.9', 'end 0.1'],
    })

    // STACKED CARDS EFFECT - Perfect card stacking animation
    const y = useSpring(
        useTransform(scrollYProgress, [0, 0.5, 1], [200, 0, -(offset || 0) * 20]),
        {
            stiffness: 800,
            damping: 80,
            restDelta: 0.001
        }
    )

    const scale = useSpring(
        useTransform(scrollYProgress, [0, 0.3, 1], [0.8, 1, 1 - (offset || 0) * 0.05]),
        {
            stiffness: 600,
            damping: 60,
            restDelta: 0.001
        }
    )

    const opacity = useSpring(
        useTransform(scrollYProgress, [0, 0.2, 1], [0, 1, 1]),
        {
            stiffness: 400,
            damping: 40,
            restDelta: 0.001
        }
    )

    // Card rotation for stacking effect
    const rotateX = useSpring(
        useTransform(scrollYProgress, [0, 0.5, 1], [25, 0, -(offset || 0) * 2]),
        {
            stiffness: 500,
            damping: 50,
            restDelta: 0.001
        }
    )

    const rotateY = useSpring(
        useTransform(scrollYProgress, [0, 0.5, 1], [15, 0, (offset || 0) * 1]),
        {
            stiffness: 500,
            damping: 50,
            restDelta: 0.001
        }
    )

    // Perfect stacking Z-index
    const zIndex = useTransform(scrollYProgress, [0, 0.5, 1], [1, 100 + (offset || 0), 100 + (offset || 0)])

    return (
        <motion.div
            ref={ref}
            style={{
                y,
                scale,
                opacity,
                rotateX,
                rotateY,
                zIndex,
                transformStyle: "preserve-3d",
                transformOrigin: "center bottom",
            }}
            className="sticky top-[10vh] will-change-transform"
            initial={{
                scale: 0.9,
                opacity: 0,
                y: 100,
                rotateX: 15,
                rotateY: 10
            }}
            whileInView={{
                scale: 1,
                opacity: 1,
                y: 0,
                rotateX: 0,
                rotateY: 0,
                transition: {
                    type: "spring",
                    stiffness: 600,
                    damping: 60,
                    delay: (offset || 0) * 0.1,
                    duration: 1
                }
            }}
            viewport={{ once: true, margin: "-10%" }}
            whileHover={{
                scale: 1.02,
                rotateY: 5,
                transition: { duration: 0.3, type: "spring", stiffness: 400 }
            }}
        >
            <div
                className={`
                    relative w-80 h-96 rounded-3xl flex flex-col items-center justify-center text-center 
                    shadow-2xl transform-gpu backdrop-blur-lg border border-white/20
                    transition-all duration-500 ease-out
                    ${getCircleClasses(offset || 0)}
                `}
            >
                {/* Card depth effect */}
                <div className={`absolute inset-0 rounded-3xl ${getCircleClasses(offset || 0)} opacity-50 blur-sm brightness-75`} />

                {/* Card number indicator */}
                <div className="absolute top-6 left-6 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-sm backdrop-blur-sm">
                    {(offset || 0) + 1}
                </div>

                {/* Main card content */}
                <div className="relative z-10 text-white p-8">
                    <div className="font-mono text-6xl font-black mb-6 drop-shadow-2xl">
                        <AnimatedNumber suffix={suffix} once={false} {...rest} />
                    </div>
                    <div className="text-xl font-semibold drop-shadow-lg max-w-64 text-balance leading-tight">
                        {description}
                    </div>
                </div>

                {/* Card shine effect */}
                <div className="absolute top-0 left-0 right-0 h-32 rounded-t-3xl bg-gradient-to-b from-white/20 via-white/5 to-transparent" />

                {/* Card corner highlights */}
                <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-white/30" />
                <div className="absolute bottom-4 left-4 w-2 h-2 rounded-full bg-white/20" />

                {/* Stacking indicator lines */}
                <div className="absolute -bottom-1 left-2 right-2 h-1 rounded-full bg-black/20 scale-x-95" />
                <div className="absolute -bottom-2 left-4 right-4 h-1 rounded-full bg-black/10 scale-x-90" />
            </div>
        </motion.div>
    )
}

// Helper function to get CSS classes for each circle
function getCircleClasses(index: number): string {
    const classes = [
        "bg-gradient-to-br from-blue-500 to-blue-700", // Blue
        "bg-gradient-to-br from-green-500 to-green-700", // Green  
        "bg-gradient-to-br from-orange-500 to-orange-700", // Orange
        "bg-gradient-to-br from-purple-500 to-purple-700", // Purple
    ]
    return classes[index % classes.length]
}
