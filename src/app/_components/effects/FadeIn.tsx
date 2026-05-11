'use client';

import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface FadeInProps {
    children: ReactNode;
    delay?: number;
    duration?: number;
    direction?: 'up' | 'down' | 'left' | 'right';
}

export function FadeIn({
    children,
    delay = 0,
    duration = 0.5,
    direction = 'up'
}: FadeInProps) {
    const directionVariants = {
        up: { y: 20 },
        down: { y: -20 },
        left: { x: 20 },
        right: { x: -20 }
    };

    return (
        <motion.div
            initial={{ opacity: 0, ...directionVariants[direction] }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration, delay }}
        >
            {children}
        </motion.div>
    );
}