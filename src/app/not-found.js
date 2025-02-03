import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <div>
        <h2 className="text-4xl font-bold text-center">404 - Page Not Found</h2>
        <p className="text-center"><Link href={'/home'}>Go Back Home</Link></p>
    </div>
  )
}
