import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Header() {
    return (
        <header className='flex justify-between items-center my-3 border-2 border-[#282828] rounded-xl'>
            <div className="logo border-r border-[#282828] px-[16px] py-[10px] md:w-1/5 md:px-0 md:flex md:justify-center md:items-center">
                <Link href={'/'}>
                    <Image src={require('../assets/Branding.png')} alt='logo company' />
                </Link>
            </div>
            <div className="nav-panel md:w-4/5 md:flex md:flex-col">
                <div className="top-panel flex justify-between">
                    <nav className='hidden w-4/5 md:flex md:justify-center gap-5 py-3'>
                        <Link href={'/'} className='text-[14px] text-[#BDBDBD]'>Projects</Link>
                        <Link href={'/'} className='text-[14px] text-[#BDBDBD]'>About</Link>
                        <Link href={'/'} className='text-[14px] text-[#BDBDBD]'>Team</Link>
                        <Link href={'/'} className='text-[14px] text-[#BDBDBD]'>Contact</Link>
                    </nav>
                    <button className='px-[16px] py-[10px] md:border-l border-[#282828] md:w-1/5 md:flex md:justify-center md:items-center'>
                        <Image src={require('../assets/Hamburger.svg')} alt='menu icon' />
                    </button>
                </div>
                <div className="bottom-panel hidden md:flex md:justify-between md:items-center md:border-t border-[#282828] py-3">
                    <Link className='w-1/2 text-center border-r border-[#282828] flex justify-center items-center gap-1 text-[14px] text-[#BDBDBD]' href={'/'}>
                        <Image src={require('../assets/dit.svg')} alt='icons'/>
                        Blog</Link>
                    <Link className='w-1/2 text-center flex justify-center items-center gap-1 text-[14px] text-[#BDBDBD]' href={'/'}>
                        <Image src={require('../assets/calendar.svg')} alt='icons'/>
                        Get in touch</Link>
                </div>
            </div>
        </header>
    )
}
