'use client'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Image from 'next/image'
import Link from 'next/link'
import React, { useLayoutEffect, useRef } from 'react'
import main_content from '../assets/main-content.png'
import image_sponsor_first from '../assets/about-con-first.png'
import image_sponsor_second from '../assets/about-con-sec.png'
import image_sponsor_third from '../assets/about-con-thir.png'
import image_sponsor_fourth from '../assets/about-con-fourth.png'
import image_sponsor_fifth from '../assets/about-con-fifth.png'
import image_sponsor_sixth from '../assets/about-con-sixth.png'
import ServiceWork from './serviceAndWork'
import MembersOfTeam from './memberTeam'


gsap.registerPlugin(ScrollTrigger)



export default function Main() {
    const el = useRef()

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.main-starter', {
                x: -300, opacity: 0, duration: .9, ease: 'power1', scrollTrigger: {
                    trigger: '.left-delivery',
                    start: 'top 50%'
                }
            }, {
                x: 0,
                opacity: 1
            })
            gsap.from('.right-delivery', {
                x: 300, opacity: 0, duration: .9, ease: 'power1', 
                scrollTrigger: {
                    trigger: '.right-delivery',
                    start: 'top 35%'
                }
            })
        }, el.current)
    }, [])
    return (
        <main>
            <div className="main-starter mt-[20px]">
                <h1 className='text-left text-[45px] font-[600] leading-none md:text-[58px] md:w-4/5 md:text-center md:mx-auto lg:text-[68px] lg:text-balance'>Krate design and motion studio</h1>
            </div>
            <div className="main-content">
                <Image src={main_content} alt='main content' className='rounded-md mt-[15px] h-[327px] lg:h-full lg:mt-[40px]' />
            </div>
            <section className='about-section lg:flex md:justify-between md:items-center lg:mt-[40px]'>
                <div className="left-about lg:w-2/3">
                    <h2 className='text-[20px] font-[600] text-[#F2F2F2] mt-[20px]'>
                        We are passionate about creating visually stunning and functional solutions that communicate effectively. I have a keen eye for detail and a deep understanding of design principles, which I use to deliver projects that exceed my clients&apos; expectations.
                    </h2>
                </div>
                <div className="right-about grid grid-cols-2 mt-[20px] gap-y-3 lg:gap-x-[30px]">
                    <Link href={'/'} className='flex justify-center items-center'>
                        <Image src={image_sponsor_first} alt='photo of sponsor' />
                    </Link>
                    <Link href={'/'} className='flex justify-center items-center'>
                        <Image src={image_sponsor_second} alt='photo of sponsor' />

                    </Link>
                    <Link href={'/'} className='flex justify-center items-center'>
                        <Image src={image_sponsor_third} alt='photo of sponsor' />

                    </Link>
                    <Link href={'/'} className='flex justify-center items-center'>
                        <Image src={image_sponsor_fourth} alt='photo of sponsor' />

                    </Link>
                    <Link href={'/'} className='flex justify-center items-center'>
                        <Image src={image_sponsor_fifth} alt='photo of sponsor' />

                    </Link>
                    <Link href={'/'} className='flex justify-center items-center'>
                        <Image src={image_sponsor_sixth} alt='photo of sponsor' />
                    </Link>
                </div>
            </section>
            <ServiceWork />
            <MembersOfTeam/>
        </main>
    )
}
