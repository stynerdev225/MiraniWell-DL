'use client'

import { motion } from 'framer-motion'
import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react'

import { AnimatedTitle } from '@/components/motion/AnimatedTitle'
import { Button } from '@/components/ui/button'

const contactMethods = [
    {
        icon: Mail,
        title: 'Email Us',
        description: 'Send us an email and we will get back to you within 24 hours',
        contact: 'support@mirianiwell.com',
        action: 'mailto:support@mirianiwell.com',
        color: 'text-blue-600',
        bgColor: 'bg-blue-100',
    },
    {
        icon: MessageCircle,
        title: 'Live Chat',
        description: 'Chat with our support team in real-time',
        contact: 'Available 24/7',
        action: '#',
        color: 'text-green-600',
        bgColor: 'bg-green-100',
    },
    {
        icon: Phone,
        title: 'Call Us',
        description: 'Speak directly with our support team',
        contact: '+1 (555) 123-4567',
        action: 'tel:+15551234567',
        color: 'text-purple-600',
        bgColor: 'bg-purple-100',
    },
    {
        icon: MapPin,
        title: 'Visit Us',
        description: 'Come visit our headquarters',
        contact: 'San Francisco, CA',
        action: '#',
        color: 'text-orange-600',
        bgColor: 'bg-orange-100',
    },
]

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
}

const itemVariants = {
    hidden: {
        opacity: 0,
        y: 30,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring' as const,
            stiffness: 100,
            damping: 12,
        },
    },
}

export function Contact() {
    return (
        <section id="contact" className="py-16 md:py-20 lg:py-24 bg-white dark:bg-gray-900">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <AnimatedTitle>
                    <h2 className="heading-section">
                        Get in{' '}
                        <span className="text-primary">Touch</span>
                    </h2>
                </AnimatedTitle>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="mt-6 text-center text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
                >
                    Have questions about Miriani Well? Need help with your wellness journey? Want to partner with us?
                    We would love to hear from you!
                </motion.p>

                {/* Contact Methods */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                    className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {contactMethods.map((method, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg text-center"
                        >
                            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${method.bgColor} mb-6`}>
                                <method.icon className={`h-8 w-8 ${method.color}`} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                {method.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                                {method.description}
                            </p>
                            <a
                                href={method.action}
                                className={`font-semibold ${method.color} hover:underline`}
                            >
                                {method.contact}
                            </a>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mt-20 max-w-2xl mx-auto"
                >
                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
                        <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
                            Send us a Message
                        </h3>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                                        placeholder="John"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                                        placeholder="Doe"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                                    placeholder="How can we help you?"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={6}
                                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-700 dark:text-white resize-none"
                                    placeholder="Tell us more about your inquiry..."
                                ></textarea>
                            </div>
                            <div className="text-center">
                                <Button
                                    type="submit"
                                    size="lg"
                                    className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3"
                                >
                                    Send Message
                                </Button>
                            </div>
                        </form>
                    </div>
                </motion.div>

                {/* FAQ Link */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="mt-16 text-center"
                >
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                        Looking for quick answers? Check out our frequently asked questions.
                    </p>
                    <Button variant="primaryOutline" size="lg">
                        View FAQ
                    </Button>
                </motion.div>
            </div>
        </section>
    )
}
