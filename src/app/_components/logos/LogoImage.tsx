"use client"
import { AppInfoData } from '@/app/_data/sample/AppInfoData'

export default function LogoImage() {
    return (
        <>
            <img src={AppInfoData.image} className="h-16 w-auto" alt='' />
        </>
    )
}
