"use client"
import Title from '../titles/Title'
import { StepData } from '@/app/_data/sample/StepData'

export default function StepsSection() {
    return (
        <>
            <section id='steps' className='py-24 bg-gray-100'>
                <Title
                    title='How It Works'
                    subtitle='Simple steps to transform your space.' />
                <div className='mx-auto w-[80%] grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6'>
                    {StepData.map((i, key) => (
                        <div className="relative z-10">
                            <div className="flex flex-col items-center">
                                <div className="relative mb-8">
                                    <div className="absolute inset-0 bg-linear-to-r from-blue-500 to-cyan-500 rounded-full blur-lg opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
                                    <div className="relative w-20 h-20 bg-linear-to-br from-blue-500 to-cyan-500 text-white rounded-full flex items-center justify-center text-3xl font-bold group-hover:shadow-2xl group-hover:shadow-blue-500/50 transition-all duration-300">
                                        {key + 1}
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold text-black mb-3 group-hover:text-cyan-400 transition-colors text-center">
                                    {i.name}
                                </h3>
                                <p className="tetx-lg text-slate-700 text-center leading-relaxed group-hover:text-slate-100 transition-colors">
                                    {i.details}
                                </p>
                            </div>
                        </div>

                    ))}

                </div>
            </section>
        </>
    )
}
