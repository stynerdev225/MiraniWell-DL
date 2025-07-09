'use client'

import { motion } from 'framer-motion'
import { Check, Star } from 'lucide-react'

import { AnimatedTitle } from '@/components/motion/AnimatedTitle'
import { Button } from '@/components/ui/button'

const plans = [
    {
        name: 'Free',
        price: '$0',
        period: 'forever',
        description: 'Perfect for getting started with language learning',
        features: [
            '5 lessons per day',
            'Basic exercises',
            'Limited hearts system',
            'Mobile app access',
            'Community support'
        ],
        buttonText: 'Get Started',
        buttonVariant: 'primaryOutline' as const,
        popular: false,
    },
    {
        name: 'Plus',
        price: '$6.99',
        period: 'per month',
        description: 'Unlock your full learning potential',
        features: [
            'Unlimited lessons',
            'No ads',
            'Unlimited hearts',
            'Offline lessons',
            'Progress tracking',
            'Personalized practice',
            'Mistake review'
        ],
        buttonText: 'Start Free Trial',
        buttonVariant: 'secondary' as const,
        popular: true,
    },
    {
        name: 'Family',
        price: '$9.99',
        period: 'per month',
        description: 'Perfect for families learning together',
        features: [
            'Everything in Plus',
            'Up to 6 accounts',
            'Family progress tracking',
            'Parental controls',
            'Family challenges',
            'Priority support'
        ],
        buttonText: 'Start Family Plan',
        buttonVariant: 'primary' as const,
        popular: false,
    },
]

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3,
        },
    },
}

const cardVariants = {
    hidden: {
        opacity: 0,
        y: 50,
        scale: 0.9,
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: 'spring' as const,
            stiffness: 100,
            damping: 15,
        },
    },
}

export function Pricing() {
    return (
        <section id="pricing" className="py-16 md:py-20 lg:py-24 bg-white dark:bg-gray-900">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <AnimatedTitle>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center text-gray-900 dark:text-white mb-8">
                        Choose your{' '}
                        <span className="text-green-600 dark:text-green-400">learning plan</span>
                    </h2>
                </AnimatedTitle>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                    className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3"
                >
                    {plans.map((plan) => (
                        <motion.div
                            key={plan.name}
                            variants={cardVariants}
                            whileHover={{
                                scale: 1.02,
                                transition: { type: "spring", stiffness: 300 }
                            }}
                            className={`relative rounded-2xl p-8 shadow-xl ${plan.popular
                                ? 'bg-white border-2 border-green-500 dark:bg-slate-800'
                                : 'bg-white dark:bg-slate-800 border border-gray-200 dark:border-gray-700'
                                }`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                    <div className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-1">
                                        <Star className="h-4 w-4 fill-current" />
                                        Most Popular
                                    </div>
                                </div>
                            )}

                            <div className="text-center">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                                    {plan.name}
                                </h3>
                                <div className="mt-4">
                                    <span className="text-4xl font-bold text-gray-900 dark:text-white">
                                        {plan.price}
                                    </span>
                                    <span className="text-gray-500 dark:text-gray-400 ml-2">
                                        {plan.period}
                                    </span>
                                </div>
                                <p className="mt-4 text-gray-600 dark:text-gray-300">
                                    {plan.description}
                                </p>
                            </div>

                            <ul className="mt-8 space-y-4">
                                {plan.features.map((feature, featureIndex) => (
                                    <li key={featureIndex} className="flex items-center">
                                        <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                                        <span className="ml-3 text-gray-600 dark:text-gray-300">
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-8">
                                <Button
                                    variant={plan.buttonVariant}
                                    size="lg"
                                    className={`w-full transform transition-all duration-200 hover:scale-105 hover:shadow-2xl ${plan.buttonText === 'Get Started'
                                            ? 'shadow-xl hover:shadow-green-200/50 active:scale-95 border border-green-200 bg-gradient-to-r from-white to-green-50 hover:from-green-50 hover:to-green-100 text-green-700 font-semibold'
                                            : 'shadow-lg hover:shadow-xl'
                                        }`}
                                    style={{
                                        boxShadow: plan.buttonText === 'Get Started'
                                            ? '0 10px 25px -5px rgba(34, 197, 94, 0.3), 0 8px 10px -6px rgba(34, 197, 94, 0.1)'
                                            : undefined
                                    }}
                                >
                                    {plan.buttonText}
                                </Button>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Money-back guarantee */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-12 text-center"
                >
                    <p className="text-gray-600 dark:text-gray-400">
                        ✨ 14-day free trial • Cancel anytime • 30-day money-back guarantee
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
