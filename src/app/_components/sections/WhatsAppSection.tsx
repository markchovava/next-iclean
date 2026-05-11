'use client';

import { AppInfoData } from '@/app/_data/sample/AppInfoData';
import { motion } from 'motion/react';
import Link from 'next/link';

export function WhatsAppSection() {
    return (
        <motion.div
            className="fixed bottom-8 right-8 z-50"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 1, type: 'spring', stiffness: 200, damping: 15 }}
        >
            <Link
                href={AppInfoData.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group block"
                aria-label="Contact us on WhatsApp"
            >
                {/* Ping animation */}
                <div className="absolute inset-0 bg-green-500 rounded-full animate-pulse"></div>

                {/* Main button */}
                <div className="relative bg-linear-to-br from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white rounded-full p-5 shadow-xl shadow-green-500/50 hover:shadow-2xl hover:shadow-green-500/75 transition-all duration-300 cursor-pointer w-16 h-16 flex items-center justify-center group-hover:scale-110">
                    <motion.svg
                        className="w-8 h-8 text-white drop-shadow-lg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        animate={{ rotate: [0, -5, 5, -5, 0] }}
                        transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                    >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                    </motion.svg>
                </div>

                {/* Tooltip */}
                <div className="absolute right-20 bottom-0 bg-slate-900 text-white px-4 py-2 rounded-lg whitespace-nowrap text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-lg">
                    Chat with us!
                </div>
            </Link>
        </motion.div>
    );
}