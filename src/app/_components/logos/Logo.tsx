"use client"
import { AppInfoData } from '@/app/_data/sample/AppInfoData'
import Link from 'next/link'
import LogoImage from './LogoImage'




export default function Logo() {
    return (
        <Link href='/'>
            <div className="flex items-center justify-start gap-2">
                <LogoImage />
                <p className="text-3xl font-bold text-blue-900">
                    {AppInfoData.name}
                </p>
            </div>
        </Link>

    )
}
