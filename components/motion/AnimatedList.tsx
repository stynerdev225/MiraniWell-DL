"use client";

import { ReactNode } from "react";

import { HTMLMotionProps, motion, Variants } from "framer-motion";

interface AnimatedListProps extends HTMLMotionProps<"ul"> {
    children: ReactNode;
    variants?: Variants;
    staggerChildren?: number;
    delayChildren?: number;
}

interface AnimatedListItemProps extends HTMLMotionProps<"li"> {
    children: ReactNode;
    variants?: Variants;
}

// Default animation variants for the list container
const defaultListVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

// Default animation variants for list items
const defaultItemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            mass: 0.8,
            stiffness: 100,
            damping: 15,
        },
    },
};

export function AnimatedList({
    children,
    variants = defaultListVariants,
    staggerChildren,
    delayChildren,
    ...props
}: AnimatedListProps) {
    // If custom stagger or delay values are provided, modify the variants
    if (staggerChildren !== undefined || delayChildren !== undefined) {
        const customVariants = { ...variants };

        if (typeof customVariants.visible === 'object' && customVariants.visible !== null) {
            customVariants.visible = {
                ...customVariants.visible,
                transition: {
                    when: "beforeChildren",
                    ...(staggerChildren !== undefined ? { staggerChildren } : { staggerChildren: 0.1 }),
                    ...(delayChildren !== undefined ? { delayChildren } : { delayChildren: 0.2 }),
                }
            };
        }

        variants = customVariants;
    }

    return (
        <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={variants}
            {...props}
        >
            {children}
        </motion.ul>
    );
}

export function AnimatedListItem({
    children,
    variants = defaultItemVariants,
    ...props
}: AnimatedListItemProps) {
    return (
        <motion.li
            variants={variants}
            {...props}
        >
            {children}
        </motion.li>
    );
}
