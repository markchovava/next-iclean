'use client';

import { motion } from 'motion/react';
import { FadeIn } from '../effects/FadeIn';
import { useContactStore } from '@/app/_data/store/useContactStore';
import TextInput from '../forms/inputs/TextInput';
import Title from '../titles/Title';
import { AppInfoData } from '@/app/_data/sample/AppInfoData';
import IconDefault from '../icons/IconDefault';
import { emailRequestAction } from '@/app/_data/api/actions/ServiceActions';
import { toast } from 'react-toastify';

export function ContactSection() {
    const {
        data,
        isSubmitting,
        errors,
        clearErrors,
        validateForm,
        setInputValue,
        setIsSubmitting,
        resetData,
    } = useContactStore()


    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        clearErrors();
        e.preventDefault();
        // Validate form using store
        const validation = validateForm();
        if (!validation.isValid) {
            // Show the first error as toast
            const firstError = validation.errors.name ||
                validation.errors.phone ||
                validation.errors.email ||
                validation.errors.address
            toast.warn(firstError);
            return;
        }
        setIsSubmitting(true);
        const formData = {
            name: data.name,
            phone: data.phone,
            email: data.email,
            address: data.address,
        }
        try {
            const res = await emailRequestAction(formData);
            console.log('res', res)
            const { status, message } = res
            switch (status) {
                case 1:
                    toast.success(message)
                    setIsSubmitting(false)
                    resetData();
                    return
                case 0:
                    toast.warn(message)
                    setIsSubmitting(false)
                    return
                default:
                    toast.warn(ErrorData.error1)
                    setIsSubmitting(false)
                    return
            }
        } catch (error) {
            toast.error(ErrorData.error1);
            console.error('Error:', error);
            setIsSubmitting(false);
        }

    }


    return (
        <section id="contact" className="py-24 relative bg-gray-100">
            <div className="absolute inset-0 bg-linear-to-b from-transparent via-cyan-500/5 to-transparent pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <Title
                    title='Get In Touch'
                    subtitle='Ready for a transformation? Contact us today for a free consultation.' />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <FadeIn>
                        <div className="space-y-8">
                            <h3 className="text-3xl font-bold text-gray-700 mb-8">
                                Contact Information
                            </h3>

                            <div className="group">
                                <div className="flex items-start group-hover:translate-x-2 transition-transform duration-300">
                                    <div className="w-12 h-12 bg-linear-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0 mr-4 group-hover:shadow-lg group-hover:shadow-blue-500/50 transition-all">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-slate-700 font-medium text-sm">Phone</p>
                                        <p className="text-black font-semibold text-lg">
                                            {AppInfoData.phone}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="group">
                                <div className="flex items-start group-hover:translate-x-2 transition-transform duration-300">
                                    <div className="w-12 h-12 bg-linear-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0 mr-4 group-hover:shadow-lg group-hover:shadow-cyan-500/50 transition-all">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-slate-700 font-medium text-sm">Email</p>
                                        <p className="text-black font-semibold text-lg">
                                            {AppInfoData.email}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="group">
                                <div className="flex items-start group-hover:translate-x-2 transition-transform duration-300">
                                    <div className="w-12 h-12 bg-linear-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0 mr-4 group-hover:shadow-lg group-hover:shadow-cyan-500/50 transition-all">
                                        <IconDefault type='address' css='text-2xl text-white' />
                                    </div>
                                    <div>
                                        <p className="text-slate-700 font-medium text-sm">Address</p>
                                        <p className="text-black font-semibold text-lg">
                                            {AppInfoData.address}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="group">
                                <div className="flex items-start group-hover:translate-x-2 transition-transform duration-300">
                                    <div className="w-12 h-12 bg-linear-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0 mr-4 group-hover:shadow-lg group-hover:shadow-blue-500/50 transition-all">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-slate-700 font-medium text-sm">Business Hours</p>
                                        <p className="text-black font-semibold">Mon-Fri: 8AM-6PM</p>
                                        <p className="text-black font-semibold">Sat: 9AM-4PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <div className="glass-dark rounded-2xl">
                            <h3 className="text-3xl font-bold text-gray-700 mb-8">
                                Request a Callback
                            </h3>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <TextInput
                                    label='Name'
                                    name='name'
                                    type="text"
                                    value={data.name}
                                    placeholder='Enter your Name.'
                                    onChange={setInputValue}
                                    error={errors.name}
                                />
                                <TextInput
                                    label='Phone Number'
                                    name='phone'
                                    type="text"
                                    value={data.phone}
                                    placeholder='Enter your Name.'
                                    onChange={setInputValue}
                                    error={errors.phone}
                                />
                                <TextInput
                                    label='Email'
                                    name='email'
                                    type="text"
                                    value={data.email}
                                    placeholder='Enter your Email.'
                                    onChange={setInputValue}
                                    error={errors.email}
                                />
                                <TextInput
                                    label='Address'
                                    name='address'
                                    type="text"
                                    value={data.address}
                                    placeholder='Enter your Address.'
                                    onChange={setInputValue}
                                    error={errors.address}
                                />

                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-linear-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 disabled:from-blue-400 disabled:to-cyan-400 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 shadow-lg shadow-blue-500/50 hover:shadow-2xl hover:shadow-cyan-500/50"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    {isSubmitting ? 'Sending...' : 'Request Callback'}
                                </motion.button>
                            </form>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}