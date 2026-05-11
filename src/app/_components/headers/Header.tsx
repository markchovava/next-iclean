"use client"

import { AppInfoData } from "@/app/_data/sample/AppInfoData"
import { useNavStore } from "@/app/_data/store/useNavStore"
import Link from "next/link"
import IconDefault from "../icons/IconDefault"
import { motion, AnimatePresence } from "motion/react";
import Logo from "../logos/Logo"
import HeaderResponsive from "./HeaderResponsive"
import ButtonMenu from "../buttons/ButtonMenu"


export default function Header() {
    const { navlist, toggleMenu, setToggleMenu, setNavlist, setIsActive } = useNavStore()
    return (
        <>
            <header className="lg:block hidden w-full py-3 bg-white drop-shadow-lg">
                <div className='container__primary flex items-center justify-between'>
                    {/* LOGO */}
                    <Logo />
                    {/* NAVIGATION */}
                    <ul className="flex items-center justify-end gap-6">
                        {navlist.map((i, key) => (
                            <Link key={key} href={i.href} className="group">
                                <li className="flex flex-col items-center justify-center text-slate-700 font-semibold text-lg gap-1">
                                    {i.name}
                                    <span className={`h-1 w-0 group-hover:w-full bg-linear-to-r from-cyan-500 to-blue-800 duration-300 ease-in-out transition-all`} />
                                </li>
                            </Link>
                        ))}
                    </ul>
                </div>
            </header>


            <section className="lg:hidden block">
                <header className="w-full py-3 bg-white drop-shadow-lg">
                    <div className="container__primary gap-5 flex items-center justify-between">
                        <Logo />
                        <ButtonMenu
                            aria-label="Close navigation menu"
                        />
                    </div>
                </header>
                <HeaderResponsive />
            </section>


        </>
    )
}
