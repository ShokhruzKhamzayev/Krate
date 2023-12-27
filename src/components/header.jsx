import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '../assets/Branding.png'
import pencil from '../assets/dit.svg'
import calendar from '../assets/calendar.svg'
import bars from '../assets/Hamburger.svg'
import { UserButton, auth } from '@clerk/nextjs'

export default async function Header() {
    const { userId } = await auth()
    const isAuth = !!userId
    return (
        <header className='flex justify-between items-center my-3 border-2 border-[#282828] rounded-xl'>
            <div className="logo border-r border-[#282828] px-[16px] py-[10px] md:w-1/5 md:px-0 md:flex md:justify-center md:items-center md:py-[30px]">
                <Link href={'/'}>
                    <Image src={logo} alt='logo company' />
                </Link>
            </div>
            <div className="nav-panel md:w-4/5 md:flex md:flex-col">
                <div className="top-panel flex justify-between">
                    <nav className='hidden w-4/5 md:flex md:justify-center gap-5 py-3'>
                        <Link href={'/projects'} className='text-[14px] text-[#BDBDBD]'>Projects</Link>
                        <Link href={'/'} className='text-[14px] text-[#BDBDBD]'>About</Link>
                        <Link href={'/'} className='text-[14px] text-[#BDBDBD]'>Team</Link>
                        <Link href={'/'} className='text-[14px] text-[#BDBDBD]'>Contact</Link>
                    </nav>
                    <button className='px-[16px] py-[10px] md:border-l border-[#282828] md:w-1/5 md:flex md:justify-center md:items-center'>
                        {
                            !isAuth ? (
                                <div className="flex gap-3">
                                    <Link className="text-sm px-3 py-2 text-[#BDBDBD] md:px-5 md:py-2 rounded-md" href={'/sign-up'}>Sign Up</Link>
                                </div>
                            ) : (
                                <UserButton afterSignOutUrl="/" />
                            )
                        }
                    </button>
                </div>
                <div className="bottom-panel hidden md:flex md:justify-between md:items-center md:border-t border-[#282828] py-3">
                    <Link className='w-1/2 text-center border-r border-[#282828] flex justify-center items-center gap-1 text-[14px] text-[#BDBDBD]' href={'/'}>
                        <Image src={pencil} alt='icons'/>
                        Blog</Link>
                    <Link className='w-1/2 text-center flex justify-center items-center gap-1 text-[14px] text-[#BDBDBD]' href={'/'}>
                        <Image src={calendar} alt='icons'/>
                        Get in touch</Link>
                </div>
            </div>
        </header>
    )
}
