import React from 'react'
import { FadeIn } from '../effects/FadeIn'


interface Props {
    title: string
    subtitle: string
}

export default function Title({ title, subtitle }: Props) {
    return (
        <>
            <FadeIn>
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold mb-6 gradient-text">
                        {title}
                    </h2>
                    <p className="text-xl text-slate-700 max-w-2xl mx-auto leading-relaxed">
                        {subtitle}
                    </p>
                </div>
            </FadeIn>
        </>
    )
}
