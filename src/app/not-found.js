import Button from '@/component/Button'
import React from 'react'
import Village1 from '../../public/image/vg1.jpg'
import Image from 'next/image'

export default function NotFound() {
    return (
        <div className='space-y-4 p-4'>
            <h2 className="text-4xl font-bold text-center">404 - Page Not Found</h2>
            <p className="text-center">The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
            <div className="flex justify-center items-center">
                <Image src={Village1} alt="Village" width={500} height={500} placeholder='blur' className="rounded-lg" />
            </div>
            <p className="text-center">Please try the following:</p>
            <Button />
        </div>
    )
}
