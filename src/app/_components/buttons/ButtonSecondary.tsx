"use client"
import { motion } from 'motion/react'



interface Props {
    name: string
}

export default function ButtonSecondary({ name }: Props) {
    return (
        <>
            <motion.button
                className="cursor-pointer border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 font-bold py-4 px-12 rounded-full text-lg transition-all duration-300"
                whileHover={{ scale: 1.05, translateY: -2 }}
                whileTap={{ scale: 0.95 }}>
                {name}
            </motion.button>
        </>
    )
}
