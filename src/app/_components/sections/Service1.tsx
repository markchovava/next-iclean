'use client';

import { useServiceStore } from '@/app/_data/store/useServiceStore';
import { motion } from 'motion/react';



import { FaWindowMaximize, FaBuilding, FaCouch, FaHome, FaBriefcase, FaTools, FaTree, FaRoad, FaSun } from 'react-icons/fa';
import { FadeIn } from '../effects/FadeIn';
import { StaggerContainer, StaggerItem } from '../effects/StaggerContainer';



const services = [
    { id: 'window', name: 'Window Cleaning', description: 'Crystal clear windows that sparkle', icon: 'FaWindowMaximize' },
    { id: 'office', name: 'Office Cleaning', description: 'Professional workspace maintenance', icon: 'FaBuilding' },
    { id: 'carpet', name: 'Carpet/Upholstery', description: 'Deep cleaning for fabrics and carpets', icon: 'FaCouch' },
    { id: 'residential', name: 'Residential/Move-in', description: 'Complete home cleaning solutions', icon: 'FaHome' },
    { id: 'corporate', name: 'Corporate/Events', description: 'Event and corporate space cleaning', icon: 'FaBriefcase' },
    { id: 'construction', name: 'Post-Construction', description: 'Clean up after renovations', icon: 'FaTools' },
    { id: 'yard', name: 'Yard Maintenance', description: 'Outdoor cleaning and maintenance', icon: 'FaTree' },
    { id: 'pavement', name: 'Pavement/Driveway', description: 'Pressure washing and sealing', icon: 'FaRoad' },
    { id: 'solar', name: 'Solar Cleaning', description: 'Solar panel maintenance and cleaning', icon: 'FaSun' },
];

const iconMap = {
    FaWindowMaximize,
    FaBuilding,
    FaCouch,
    FaHome,
    FaBriefcase,
    FaTools,
    FaTree,
    FaRoad,
    FaSun,
};

export function Service1() {
    const { openModal } = useServiceStore();

    return (
        <section id="services" className="py-24 relative">
            <div className="absolute inset-0 bg-linear-to-b from-transparent via-blue-500/5 to-transparent pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <FadeIn>
                    <div className="text-center mb-20">
                        <h2 className="text-4xl sm:text-5xl font-bold mb-6 gradient-text">
                            Our Premium Services
                        </h2>
                        <p className="text-xl text-slate-700 max-w-2xl mx-auto leading-relaxed">
                            Comprehensive cleaning solutions tailored to your needs. Expert care for every space.
                        </p>
                    </div>
                </FadeIn>

                <StaggerContainer>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service) => {
                            const IconComponent = iconMap[service.icon as keyof typeof iconMap];
                            return (
                                <StaggerItem key={service.id}>
                                    <motion.div
                                        className="group glass-dark rounded-2xl p-8 cursor-pointer border-0 hover:border-cyan-500/50 transition-all duration-300 h-full"
                                        whileHover={{ y: -8, scale: 1.02 }}
                                        onClick={() => openModal(service.name)}
                                    >
                                        <div className="relative mb-6">
                                            <div className="absolute inset-0 bg-linear-to-r from-blue-500 to-cyan-500 rounded-xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                                            <div className="relative w-14 h-14 bg-linear-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center group-hover:shadow-2xl group-hover:shadow-blue-500/50 transition-all duration-300">
                                                <IconComponent className="w-7 h-7 text-gray-700" />
                                            </div>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-700 mb-3 group-hover:text-cyan-400 transition-colors">
                                            {service.name}
                                        </h3>
                                        <p className="text-slate-300 leading-relaxed group-hover:text-slate-100 transition-colors">{service.description}</p>
                                        <div className="mt-6 flex items-center text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <span className="text-sm font-semibold">Book Now</span>
                                            <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                    </motion.div>
                                </StaggerItem>
                            );
                        })}
                    </div>
                </StaggerContainer>
            </div>
        </section>
    );
}