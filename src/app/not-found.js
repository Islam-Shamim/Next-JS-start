"use client"
import React from 'react'

export default function NotFound() {
  return (
    <div>
        <h2 className="text-4xl font-bold text-center">404 - Page Not Found</h2>
        <div className='text-center my-5'>
            <button onClick={()=>console.log("Clicked button")} className='btn btn-secondary text-xl'>Click Here</button>
        </div>
    </div>
  )
}
