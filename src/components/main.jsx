import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import main_content from '../assets/main-content.png'
import image_sponsor_first from '../assets/about-con-first.png'
import image_sponsor_second from '../assets/about-con-sec.png'
import image_sponsor_third from '../assets/about-con-thir.png'
import image_sponsor_fourth from '../assets/about-con-fourth.png'
import image_sponsor_fifth from '../assets/about-con-fifth.png'
import image_sponsor_sixth from '../assets/about-con-sixth.png'
import arrow_right from '../assets/arrow-right.png'
import ServiceWork from './serviceAndWork'
import member_one from '../assets/team-member-one.png'
import member_two from '../assets/team-member-two.png'
import member_three from '../assets/team-member-three.png'
import member_four from '../assets/team-member-four.png'
import member_five from '../assets/team-member-five.png'
import member_six from '../assets/team-member-six.png'

export default function Main() {
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
                        We are passionate about creating visually stunning and functional solutions that communicate effectively. I have a keen eye for detail and a deep understanding of design principles, which I use to deliver projects that exceed my clients' expectations.
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
            <ServiceWork/>
            <section className='team'>
                <div className="team-starter service-starter flex gap-2 items-center mt-[40px] mb-[20px]">
                    <Image src={arrow_right} alt='arrow right icon' />
                    <h3>
                        Our Works
                    </h3>
                </div>
                <div className="team-container grid grid-cols-1 gap-y-5 md:grid-cols-3 lg:grid-cols-4">
                    <h1 className='text-[32px] font-[600] mb-[20px] leading-none md:col-span-2'>We are passionate about creating visually stunning and functional solutions that communicate effectively.</h1>
                    <div className="team-member border border-[#282828] rounded-2xl">
                        <div className="img-member">
                            <Image src={member_one} alt='worker' className='w-full h-[300px] rounded-t-2xl md:w-'/>
                        </div>
                        <div className="info-member pl-3 py-3">
                            <h2 className='text-[18px] font-[600]'>Jocelyn Schleifer</h2>
                            <h3 className='text-[16px] text-[#9d9fa1] font-[600]'>Managing Director</h3>
                        </div>
                    </div>
                    <div className="team-member border border-[#282828] rounded-2xl">
                        <div className="img-member">
                            <Image src={member_two} alt='worker' className='w-full h-[300px] rounded-t-2xl' />
                        </div>
                        <div className="info-member pl-3 py-3">
                            <h2 className='text-[18px] font-[600]'>Jocelyn Schleifer</h2>
                            <h3 className='text-[16px] text-[#9d9fa1] font-[600]'>Managing Director</h3>
                        </div>
                    </div>
                    <div className="team-member border border-[#282828] rounded-2xl">
                        <div className="img-member">
                            <Image src={member_three} alt='worker' className='w-full h-[300px] rounded-t-2xl' />
                        </div>
                        <div className="info-member pl-3 py-3">
                            <h2 className='text-[18px] font-[600]'>Jocelyn Schleifer</h2>
                            <h3 className='text-[16px] text-[#9d9fa1] font-[600]'>Managing Director</h3>
                        </div>
                    </div>
                    <div className="team-member border border-[#282828] rounded-2xl">
                        <div className="img-member">
                            <Image src={member_four} alt='worker' className='w-full h-[300px] rounded-t-2xl' />
                        </div>
                        <div className="info-member pl-3 py-3">
                            <h2 className='text-[18px] font-[600]'>Jocelyn Schleifer</h2>
                            <h3 className='text-[16px] text-[#9d9fa1] font-[600]'>Managing Director</h3>
                        </div>
                    </div>
                    <div className="team-member border border-[#282828] rounded-2xl">
                        <div className="img-member">
                            <Image src={member_five} alt='worker' className='w-full h-[300px] rounded-t-2xl' />
                        </div>
                        <div className="info-member pl-3 py-3">
                            <h2 className='text-[18px] font-[600]'>Jocelyn Schleifer</h2>
                            <h3 className='text-[16px] text-[#9d9fa1] font-[600]'>Managing Director</h3>
                        </div>
                    </div>
                    <div className="team-member border border-[#282828] rounded-2xl">
                        <div className="img-member">
                            <Image src={member_six} alt='worker' className='w-full h-[300px] rounded-t-2xl' />
                        </div>
                        <div className="info-member pl-3 py-3">
                            <h2 className='text-[18px] font-[600]'>Jocelyn Schleifer</h2>
                            <h3 className='text-[16px] text-[#9d9fa1] font-[600]'>Managing Director</h3>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
