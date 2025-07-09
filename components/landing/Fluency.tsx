'use client'

import { useRef } from 'react'

import { motion, useInView } from 'framer-motion'

import { cn } from '@/lib/utils'

export function Fluency() {
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, { margin: '-20% 0px -20% 0px', once: true })

    return (
        <div ref={ref} className="mx-auto max-w-[42rem] px-4 py-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease: [0, 0.55, 0.45, 1] }}
                className="flex max-w-full flex-col items-center justify-center gap-4 text-center"
            >
                <h2
                    className={cn(
                        'heading-lg bg-gradient-to-r from-primary-depth to-primary bg-clip-text font-bold text-transparent'
                    )}
                >
                    Fluency, guaranteed.
                </h2>
                <p className="max-w-[30rem] text-lg text-neutral-600">
                    Our bite-sized lessons are effective - research shows that learning in short bursts helps
                    information move from short-term to long-term memory.
                </p>
            </motion.div>
        </div>
    )
}
