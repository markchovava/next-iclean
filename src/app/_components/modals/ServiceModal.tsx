"use client"

import React, { useState } from 'react'
import { AnimatePresence, motion, Variants } from 'framer-motion';
import { useServiceStore } from '@/app/_data/store/useServiceStore';
import ButtonClose from '../buttons/ButtonClose';
import TextInput from '../forms/inputs/TextInput';
import Button from '../buttons/Button';
import { useBookingStore } from '@/app/_data/store/useBookingStore';
import SelectInput from '../forms/selects/SelectInput';
import { PropertySizeData } from '@/app/_data/sample/PropertySizeData';
import { toast } from 'react-toastify';
import { emailServiceAction } from '@/app/_data/api/actions/ServiceActions';
import { formatDate } from '@/_utils/formatDate';




const title = "Book Your Service"


const variants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            type: 'spring',
            duration: 1,
        }
    },
}


export default function ServiceModal() {
    const {
        toggleModal,
        selectedData,
        setToggleModal,
        clearErrors,
    } = useServiceStore()

    const {
        data,
        errors,
        isSubmitting,
        setIsSubmitting,
        setInputValue,
        validateForm,
    } = useBookingStore()


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
                validation.errors.preferredDate ||
                validation.errors.propertySize;
            toast.warn(firstError);
            return;
        }
        setIsSubmitting(true);
        const formData = {
            service: selectedData.name,
            name: data.name,
            phone: data.phone,
            email: data.email,
            address: data.address,
            preferredDate: formatDate(data.preferredDate),
            propertySize: data.propertySize,
        }
        try {
            const res = await emailServiceAction(formData);
            console.log('res', res)
            const { status, message } = res
            switch (status) {
                case 1:
                    toast.success(message)
                    setIsSubmitting(false)
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
        <AnimatePresence>
            {toggleModal && (
                <motion.section
                    variants={variants}
                    initial='hidden'
                    animate='visible'
                    exit='hidden'
                    className={`w-screen h-screen fixed top-0 left-0 z-200 overflow-y-auto`}>
                    <div className='absolute z-0 top-0 left-0 w-full h-full bg-black opacity-40'></div>
                    <div className='w-full h-full absolute z-10 overflow-auto scroll__width py-24'>
                        <section className='mx-auto lg:w-[50%] w-[90%] bg-white text-black p-6 rounded-2xl'>
                            <div className='flex items-center justify-end'>
                                <ButtonClose onClick={() => setToggleModal()} />
                            </div>

                            <h3 className='text-4xl font-bold mb-4'>{title}</h3>
                            <hr className="w-full border-b border-gray-100 mb-4" />
                            <form onSubmit={handleSubmit} className='space-y-4'>

                                <p className='py-3 px-4 text-lg bg-gray-200'>
                                    Selected Service: <span className='font-bold'>{selectedData.name}</span>
                                </p>

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
                                    label='Phone'
                                    name='phone'
                                    type="text"
                                    value={data.phone}
                                    placeholder='Enter your phone.'
                                    onChange={setInputValue}
                                    error={errors.phone}
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
                                    label='Preferred Date'
                                    name='preferredDate'
                                    type="date"
                                    value={data.preferredDate}
                                    placeholder='Enter Preferred Date here.'
                                    onChange={setInputValue}
                                />

                                <SelectInput
                                    label='Property Size'
                                    name='propertySize'
                                    data={PropertySizeData}
                                    value={data.propertySize}
                                    onChange={setInputValue}
                                    error={errors.propertySize}
                                />

                                <div className='flex items-center justify-center'>
                                    <Button
                                        name='Submit'
                                        status={isSubmitting}
                                        type='submit'
                                    />
                                </div>
                            </form>
                        </section>
                    </div>
                </motion.section>
            )}
        </AnimatePresence>
    )
}