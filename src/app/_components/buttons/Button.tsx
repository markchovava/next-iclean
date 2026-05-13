"use client"
import { motion } from 'motion/react'



interface Props {
    name: string
    type?: 'submit' | 'button' | 'reset'
    status?: boolean
}

export default function Button({
    name,
    type = 'button',
    status = false
}: Props) {
    const effect = `bg-linear-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 shadow-blue-500/50 hover:shadow-2xl hover:shadow-cyan-500/50`
    return (
        <motion.button
            type={type}
            disabled={status}
            className={`${effect} cursor-pointer text-white font-bold py-4 px-12 rounded-full text-lg shadow-lg transition-all duration-300`}
            whileHover={{ scale: 1.05, translateY: -2 }}
            whileTap={{ scale: 0.95 }}>
            {status ? 'Processing' : name}
        </motion.button>
    )
}
