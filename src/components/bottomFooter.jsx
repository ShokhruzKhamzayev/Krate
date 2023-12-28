import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from '../assets/Branding.png'
import pencil from '../assets/dit.svg'
import fb from '../assets/facebook.svg'
import insta from '../assets/insta.svg'
import tw from '../assets/twit.svg'
import gm from '../assets/mail.svg'

export default function BottomFooter() {
  return (
      <div className="bottom-footer border border-[#282828] rounded-xl flex justify-between flex-col md:flex-row items-center mb-[30px] mt-[40px]">
          <div className="logo md:w-1/5 mx-auto md:border-r border-[#282828] py-10 md:py-[50px]">
              <Link href={'/'} className='flex justify-center items-center gap-3'>
                  <Image src={Logo} alt='our logo' />
                  <h3 className='text-[#BDBDBD] text-[27px]'>Clonify</h3>
              </Link>
          </div>
          <div className="panel-links md:w-4/5">
              <div className="top-panel flex items-center md:border-b border-[#282828] flex-col-reverse md:flex-row">
                  <nav className='flex md:w-1/2 gap-[16px] justify-center items-center py-[16px]'>
                      <Link href={'/projects'} className='text-[14px] font-[600] '>Projects</Link>
                      <Link href={'/about'} className='text-[14px] font-[600] '>About</Link>
                      <Link href={'/'} className='text-[14px] font-[600] '>Team</Link>
                      <Link href={'/contact'} className='text-[14px] font-[600] '>Contact</Link>
                  </nav>
                  <div className="contact-gmail w-full md:w-1/2 flex justify-center items-center md:border-l border-[#282828] border-y md:border-y-0">
                      <a href="#" className='text-[28px] font-[600] py-[16px]'>hello@clonify.io</a>
                  </div>
              </div>
              <div className="bottom-panel flex items-center flex-col justify-center md:flex-row">
                  <Link href={'/'} className='flex justify-center items-center gap-[4px] py-[24px] border-y border-[#282828] md:border-y-0 w-full md:w-1/3'>
                      <Image src={pencil} alt='pencil icon' />
                      <h3>Blog</h3>
                  </Link>
                  <div className="links-tree flex justify-center items-center gap-[16px] py-[16px] border-b md:border-b-0 w-full md:border-x border-[#282828] md:w-1/3">
                      <a href="#" className='bg-[#282828] px-[9px] py-[9px] rounded-[50%]'>
                          <Image src={fb} alt='facebook' />
                      </a>
                      <a href="#" className='bg-[#282828] px-[9px] py-[9px] rounded-[50%]'>
                          <Image src={insta} alt='instagram' />
                      </a>
                      <a href="#" className='bg-[#282828] px-[9px] py-[9px] rounded-[50%]'>
                          <Image src={tw} alt='twitter' />
                      </a>
                      <a href="#" className='bg-[#282828] px-[9px] py-[9px] rounded-[50%]'>
                          <Image src={gm} alt='gmail' />
                      </a>
                  </div>
                  <h3 className='md:w-1/3 flex justify-center items-center py-[16px] text-[14px] text-[#BDBDBD]'>© 2088 Nayzak Design</h3>
              </div>
          </div>
      </div>
  )
}
