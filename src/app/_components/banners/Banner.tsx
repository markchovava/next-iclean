'use client';

import { FadeIn } from '../effects/FadeIn';
import Button from '../buttons/Button';
import ButtonSecondary from '../buttons/ButtonSecondary';
import Link from 'next/link';


export function Banner() {
    return (
        <section id="home" className="relative min-h-screen md:h-screen h-[115vh] flex items-center justify-center overflow-hidden">
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-linear-to-br from-slate-900 via-blue-900 to-slate-900"></div>

            {/* Animated orbs */}
            <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute top-1/3 -right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-1/4 left-1/3 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

            <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
                <FadeIn delay={0.2}>
                    <div className="inline-block mb-6 px-4 py-2 glass rounded-full">
                        <p className="text-blue-400 font-semibold text-sm">
                            ✨ Premium Cleaning Solutions
                        </p>
                    </div>
                </FadeIn>

                <FadeIn delay={0.3}>
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
                        <span className="text-cyan-400">
                            Transform Your Space
                        </span>
                        <span className="block text-slate-100 mt-3">
                            Into Pristine Beauty
                        </span>
                    </h1>
                </FadeIn>

                <FadeIn delay={0.4}>
                    <p className="text-lg sm:text-xl text-slate-200 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Expert cleaning services for homes and offices. Professional results, exceptional service, guaranteed satisfaction.
                    </p>
                </FadeIn>

                <FadeIn delay={0.6}>
                    <div className="mx-auto flex flex-col sm:w-auto w-[70%] sm:flex-row sm:gap-6 gap-8 justify-center">
                        <Link href="#contact">
                            <Button name='Get a Free Quote' />
                        </Link>
                        <Link href='#about'>
                            <ButtonSecondary name='Learn More' />
                        </Link>
                    </div>
                </FadeIn>


            </div>


        </section>
    );
}