import React from 'react'

export default function Navber() {
  return (
    <div  class='bg-yellow-300 flex justify-between items-center p-4'>
      <h1 className='text-4xl font-semibold'>Next <span className='text-red-500'>Hero</span> </h1>
      <ul className='flex justify-between items-center space-x-2 text-xl font-semibold rounded'>
        <li className='hover:text-red-600 hover:bg-slate-300 rounded p-2'><a href="">Home</a></li>
        <li className='hover:text-red-600 hover:bg-slate-300 rounded p-2'><a href="">Photo</a></li>
        <li className='hover:text-red-600 hover:bg-slate-300 rounded p-2'><a href="">Contact</a></li>
      </ul>
    </div>
  )
}
