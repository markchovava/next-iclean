"use client"

import { AppInfoData } from "@/app/_data/sample/AppInfoData"
import Title from "../titles/Title"

export default function AboutSection() {
    return (
        <>
            <section id="about" className="py-24">
                <Title
                    title='About Us'
                    subtitle='Who we are?' />
                <div className="mx-auto lg:w-[70%] w-[85%] text-center text-2xl font-light">
                    {AppInfoData.desc}
                </div>
            </section>
        </>
    )
}
