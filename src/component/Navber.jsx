"use client"
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'
export default function Navber() {
  const pathName = usePathname();
  const router = useRouter();
  const links = [
    {
      title: "Home",
      path: "/"
    },
    {
      title: "About",
      path: "/about"
    },
    {
      title: "Blogs",
      path: "/blogs"
    },
    {
      title: "Contact",
      path: "/contact"
    }
  ]
  const handler = () => {
    router.push("/signIn")
  }
  if (pathName.includes("/about"))
    return (
      <div className='flex justify-between items-center bg-slate-500 text-pink-500 text-2xl font-semibold'>
        <div className='text-4xl text-center p-4'>Welcome to <span className='text-cyan-200'>our Website</span></div>
        <button className='bg-red-500 px-2 py-1 text-white rounded mr-4'><Link href="/home">Home</Link></button>
      </div>
    )
  return (
    <div className='sticky top-0 bg-yellow-300 flex justify-between items-center p-4'>
      <h1 className='text-4xl font-semibold'>Next <span className='text-red-500'>Hero</span> </h1>
      <ul className='flex justify-between items-center space-x-6 text-xl font-semibold rounded'>
        {
          links?.map((link) => <Link className={`${pathName === link.path && "hover:text-red-600 hover:bg-slate-300 rounded p-2"}`} key={link.path} href={link.path}>{link.title}</Link>)
        }
      </ul>
      <button onClick={handler} className='bg-cyan-500 rounded p-2'>Sign In</button>
    </div>
  )
}
