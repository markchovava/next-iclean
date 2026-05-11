'use client';

import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface StaggerContainerProps {
    children: ReactNode;
    staggerDelay?: number;
}

export function StaggerContainer({ children, staggerDelay = 0.1 }: StaggerContainerProps) {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={{
                hidden: {},
                visible: {
                    transition: {
                        staggerChildren: staggerDelay
                    }
                }
            }}
        >
            {children}
        </motion.div>
    );
}

export function StaggerItem({ children }: { children: ReactNode }) {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.5 }}
        >
            {children}
        </motion.div>
    );
}