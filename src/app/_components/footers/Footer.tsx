"use client"
import Link from 'next/link';
import LogoImage from '../logos/LogoImage';
import { AppInfoData } from '@/app/_data/sample/AppInfoData';
import { useNavStore } from '@/app/_data/store/useNavStore';
import IconDefault from '../icons/IconDefault';
import { ServiceData } from '@/app/_data/sample/ServiceData';



export function Footer() {
    const { navlist } = useNavStore()
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-linear-to-b from-slate-900 to-slate-950 text-white border-t border-blue-500/10">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-linear-to-r from-blue-500/5 via-transparent to-blue-500/5 pointer-events-none"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <Link href='/'>
                            <div className="flex items-center justify-start gap-2">
                                <LogoImage />
                                <p className="text-3xl font-bold text-white">
                                    {AppInfoData.name}
                                </p>
                            </div>
                        </Link>
                        <p className="text-slate-300 mb-6 leading-relaxed max-w-sm">
                            Professional cleaning services that transform your space. We're committed to delivering exceptional results with meticulous attention to detail.
                        </p>
                        <div className="flex space-x-6">
                            {AppInfoData.socials.map((i, key) => (
                                <Link key={key} target='_blank' href={i.href} className="w-10 h-10 rounded-lg bg-linear-to-br from-blue-500 to-blue-500 flex items-center justify-center hover:shadow-lg hover:shadow-blue-500/50 transition-all group">
                                    <IconDefault type={i.iconType} css='text-white text-2xl' />
                                </Link>

                            ))}

                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold text-white mb-8">Services</h4>
                        <ul className="space-y-4">
                            {ServiceData.map((i, key) => (
                                (key + 1) < 6 &&
                                <li key={key}><Link href="#service" className="text-slate-400 hover:text-blue-400 transition-colors flex items-center group">
                                    <span className="w-1.5 h-1.5 bg-linear-to-r from-blue-500 to-blue-500 rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                                    {i.name}
                                </Link></li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold text-white mb-8">Company</h4>
                        <ul className="space-y-4">
                            {navlist.map((i, key) => (
                                <li key={key}><Link href={i.href} className="text-slate-400 hover:text-blue-400 transition-colors flex items-center group">
                                    <span className="w-1.5 h-1.5 bg-linear-to-r from-blue-500 to-blue-500 rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                                    {i.name}
                                </Link></li>
                            ))}

                        </ul>
                    </div>
                </div>

                <div className="border-t border-blue-500/10 pt-8 text-center">
                    <p className="text-slate-400">
                        © {currentYear} {AppInfoData.name}. All rights reserved. |
                        Website is developed and Miantained By {AppInfoData.developer}
                    </p>
                </div>
            </div>
        </footer>
    );
}