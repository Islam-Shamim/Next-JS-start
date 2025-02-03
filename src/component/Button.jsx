"use client"
import React from 'react'

export default function Button() {
    return (
        <div className='text-center my-5'>
            <button onClick={() => console.log("Clicked button")} className='btn btn-secondary text-xl'>Click Here</button>
        </div>
    )
}
