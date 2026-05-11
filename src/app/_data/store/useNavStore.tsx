"use client"

import { create } from "zustand"
import { NavInterface } from "../entity/NavEntity"
import { NavData } from "../sample/NavData"


interface Props {
    toggleMenu: boolean
    navlist: NavInterface[]
    setToggleMenu: () => void
    setNavlist: (i: NavInterface[]) => void
    setIsActive: (i: NavInterface) => void
}


export const useNavStore = create<Props>((set, get) => ({
    navlist: NavData,
    toggleMenu: false,
    setToggleMenu: () => {
        const i = get().toggleMenu
        set({
            toggleMenu: !i
        })
    },
    setNavlist: (i) => {
        set({
            navlist: i
        })
    },
    setIsActive: (data) => {
        const list = get().navlist
        set({
            navlist: list.map((i) => (
                i.id === data.id ?
                    { ...i, isActive: true } :
                    { ...i, isActive: false }

            ))
        })
    },
}))