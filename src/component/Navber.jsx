"use client"
import Link from 'next/link'
import {usePathname, useRouter } from 'next/navigation'
import React from 'react'
export default function Navber() {
  const pathName = usePathname();
  const router = useRouter();
  const links = [
    {
      title : "Home",
      path : "/about"
    },
    {
      title : "Blogs",
      path : "/blogs"
    },
    {
      title : "Contact",
      path : "/contact"
    }
  ]
  const handler = () =>{
    router.push("/signIn")
  }
  return (
    <div  class='sticky top-0 bg-yellow-300 flex justify-between items-center p-4'>
      <h1 className='text-4xl font-semibold'>Next <span className='text-red-500'>Hero</span> </h1>
      <ul className='flex justify-between items-center space-x-6 text-xl font-semibold rounded'>
        {
          links?.map((link)=><Link className={`${pathName === link.path && "hover:text-red-600 hover:bg-slate-300 rounded p-2"}`} key={link.path} href={link.path}>{link.title}</Link>)
        }
      </ul>
      <button onClick={handler} className='bg-cyan-500 rounded p-2'>Sign In</button>
    </div>
  )
}
