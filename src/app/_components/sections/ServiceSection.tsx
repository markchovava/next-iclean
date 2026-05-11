"use client"
import { useServiceStore } from '@/app/_data/store/useServiceStore';
import { FadeIn } from '../effects/FadeIn'
import { StaggerContainer, StaggerItem } from '../effects/StaggerContainer';
import IconDefault from '../icons/IconDefault'
import { ServiceData } from '@/app/_data/sample/ServiceData'
import { motion } from 'motion/react';
import ServiceModal from '../modals/ServiceModal';
import Title from '../titles/Title';




export default function ServiceSection() {
    const { setSelectedData, setToggleModal } = useServiceStore()
    return (
        <>
            <section id='service' className='py-24'>
                <Title
                    title='Our Premium Services'
                    subtitle='Comprehensive cleaning solutions tailored to your needs. Expert care for every space.' />

                <p className='mb-4 font-medium italic text-sm text-end mx-auto w-[80%] text-gray-700'>
                    Click to Book a service.
                </p>
                <StaggerContainer>
                    <div className='mx-auto w-[80%] grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6'>
                        {ServiceData.map((i, key) => (
                            <StaggerItem key={key}>
                                <motion.section
                                    whileHover={{ y: -8, scale: 1.02 }}
                                    onClick={() => {
                                        setSelectedData(i)
                                        setToggleModal()
                                    }}
                                    className='cursor-pointer border bg-white border-gray-200 p-4 rounded-2xl overflow-hidden'>
                                    <div className='h-18 w-18 mb-4 rounded-full bg-blue-700 flex items-center justify-center'>
                                        <IconDefault type={i.iconType} css='text-3xl text-white' />
                                    </div>
                                    <div className='mb-4'>
                                        <p className='mb-2 text-xl font-bold text-gray-700'>
                                            {i.name}
                                        </p>
                                        <p className='text-gray-700 font-light text-lg'>
                                            {i.description}
                                        </p>
                                    </div>
                                </motion.section>
                            </StaggerItem>

                        ))}
                    </div>
                </StaggerContainer>
            </section>

            <ServiceModal />
        </>
    )
}
