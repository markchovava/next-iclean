import { useNavStore } from '@/app/_data/store/useNavStore'
import { AnimatePresence, motion } from 'motion/react'
import React from 'react'
import IconDefault from '../icons/IconDefault'

export default function ButtonMenu() {
    const { navlist, toggleMenu, setToggleMenu, setNavlist, setIsActive } = useNavStore()
    return (
        <>
            <button
                onClick={() => setToggleMenu()}
                className={`h-11 w-11 rounded-full hover:bg-gray-100 cursor-pointer 
                text-gray-700 flex items-center justify-center ease-in-out duration-200 
                transition-all`} >
                <AnimatePresence mode="wait" initial={false}>
                    <motion.span
                        key={toggleMenu ? "menu" : "close"}
                        initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
                        animate={{ opacity: 1, rotate: 0, scale: 1 }}
                        exit={{ opacity: 0, rotate: 90, scale: 0.6 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                    >
                        {toggleMenu ? (
                            <IconDefault type="close" css="text-2xl" />
                        ) : (
                            <IconDefault type="menu" css="text-xl" />
                        )}
                    </motion.span>
                </AnimatePresence>
            </button>
        </>
    )
}
