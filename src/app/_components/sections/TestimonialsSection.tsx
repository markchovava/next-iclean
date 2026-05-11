'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { FadeIn } from '../effects/FadeIn';
import { TestimonialData } from '@/app/_data/sample/TestimonialData';





export function TestimonialsSection() {
    return (
        <section id="testimonial" className="py-24 relative bg-blue-950">
            <div className="absolute inset-0 bg-linear-to-b from-cyan-500/5 via-transparent to-blue-500/5 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <FadeIn>
                    <div className="text-center mb-20">
                        <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
                            What Our Clients Say
                        </h2>
                        <p className="text-xl text-slate-300">
                            Trusted by thousands of satisfied customers
                        </p>
                    </div>
                </FadeIn>

                <div className="">
                    <Swiper
                        modules={[Autoplay, Pagination]}
                        spaceBetween={30}
                        slidesPerView={1}
                        autoplay={{ delay: 5000 }}
                        pagination={{ clickable: true }}
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 }
                        }} >
                        {TestimonialData.map((testimonial) => (
                            <SwiperSlide key={testimonial.id}>
                                <div className="glass-dark rounded-2xl p-8 h-full border-0 hover:border-cyan-500/50 transition-all duration-300">
                                    <div className="flex mb-6">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <p className="text-slate-200 text-lg mb-6 italic leading-relaxed">"{testimonial.message}"</p>
                                    <div className="border-t border-blue-500/20 pt-6">
                                        <p className="font-bold text-white text-lg">{testimonial.name}</p>
                                        {testimonial.company && (
                                            <p className="text-cyan-400 text-sm mt-1">{testimonial.company}</p>
                                        )}
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/*  <FadeIn>
                    <div className="text-center mb-16">
                        <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4 gradient-text">
                            Transformations
                        </h3>
                        <p className="text-slate-300">See the difference our expert cleaning makes</p>
                    </div>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {beforeAfterImages.map((item) => (
                        <div key={item.id} className="group">
                            <div className="grid grid-cols-2 gap-4 mb-4 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500/10 to-cyan-500/10 p-4">
                                <div className="aspect-square bg-linear-to-br from-slate-700 to-slate-800 rounded-lg flex items-center justify-center group-hover:from-blue-600/50 group-hover:to-cyan-600/50 transition-all duration-300">
                                    <span className="text-slate-400 font-semibold">Before</span>
                                </div>
                                <div className="aspect-square bg-linear-to-br from-slate-700 to-slate-800 rounded-lg flex items-center justify-center group-hover:from-blue-600/50 group-hover:to-cyan-600/50 transition-all duration-300">
                                    <span className="text-slate-400 font-semibold">After</span>
                                </div>
                            </div>
                            <p className="text-center text-slate-300 font-semibold group-hover:text-cyan-400 transition-colors">{item.service}</p>
                        </div>
                    ))}
                </div> */}
            </div>
        </section>
    );
}