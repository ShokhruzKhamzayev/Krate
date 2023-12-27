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
import service_one from '../assets/service-one.png'
import service_two from '../assets/service-two.png'
import service_three from '../assets/service-three.png'
import service_four from '../assets/service-four.png'
import service_five from '../assets/service-five.png'
import plus_icon from '../assets/plus_icon.svg'
import work_one from '../assets/work-one.png'
import work_two from '../assets/work-two.png'
import work_three from '../assets/work-three.png'
import work_four from '../assets/work-four.png'
import arrow_right_up from '../assets/arrow-up-right.svg'

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
            <section className='services mt-[20px]'>
                <div className="service-starter flex gap-2 items-center my-[10px] mb-[20px]">
                    <Image src={arrow_right} alt='arrow right icon' />
                    <h3>
                        Our Services
                    </h3>
                </div>
                <div className="services-container">
                    <div className="service-item flex justify-between items-center border-b border-[#282828]">
                        <div className="img-text pt-[13px] pb-[10px] md:flex md:items-center md:gap-2">
                            <Image src={service_one} alt='design for service' />
                            <h2 className='text-[22px] font-[600] mt-[16px] md:mt-0'>Web & Mobile Design</h2>
                        </div>
                        <div className="add-btn hidden md:block">
                            <button>
                                <Image src={plus_icon} alt='plus icon' />
                            </button>
                        </div>
                    </div>
                    <div className="service-item flex justify-between items-center border-b border-[#282828]">
                        <div className="img-text pt-[13px] pb-[10px] md:flex md:items-center md:gap-2">
                            <Image src={service_two} alt='design for service' />
                            <h2 className='text-[22px] font-[600] mt-[16px] md:mt-0'>Brand Identity</h2>
                        </div>
                        <div className="add-btn hidden md:block">
                            <button>
                                <Image src={plus_icon} alt='plus icon' />
                            </button>
                        </div>
                    </div>
                    <div className="service-item flex justify-between items-center border-b border-[#282828]">
                        <div className="img-text pt-[13px] pb-[10px] md:flex md:items-center md:gap-2">
                            <Image src={service_three} alt='design for service' />
                            <h2 className='text-[22px] font-[600] mt-[16px] md:mt-0'>App Development</h2>
                        </div>
                        <div className="add-btn hidden md:block">
                            <button>
                                <Image src={plus_icon} alt='plus icon' />
                            </button>
                        </div>
                    </div>
                    <div className="service-item flex justify-between items-center border-b border-[#282828]">
                        <div className="img-text pt-[13px] pb-[10px] md:flex md:items-center md:gap-2">
                            <Image src={service_four} alt='design for service' />
                            <h2 className='text-[22px] font-[600] mt-[16px] md:mt-0'>Consultancy</h2>
                        </div>
                        <div className="add-btn hidden md:block">
                            <button>
                                <Image src={plus_icon} alt='plus icon' />
                            </button>
                        </div>
                    </div>
                    <div className="service-item flex justify-between items-center border-b border-[#282828]">
                        <div className="img-text pt-[13px] pb-[10px] md:flex md:items-center md:gap-2">
                            <Image src={service_five} alt='design for service' />
                            <h2 className='text-[22px] font-[600] mt-[16px] md:mt-0'>Packaging</h2>
                        </div>
                        <div className="add-btn hidden md:block">
                            <button>
                                <Image src={plus_icon} alt='plus icon' />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="works-starter service-starter flex gap-2 items-center mt-[40px] mb-[20px]">
                    <Image src={arrow_right} alt='arrow right icon' />
                    <h3>
                        Our Works
                    </h3>
                </div>
                <div className="works-container md:grid grid-cols-2 gap-x-5">
                    <div className="work-item border-2 border-neutral-800 mb-[15px] rounded-3xl ">
                        <Image className='w-full rounded-xl' src={work_one} alt='preview of work' />
                        <h3 className='px-[24px] py-[24px] text-[20px] font-[600]'>Galaxia Branding</h3>
                    </div>
                    <div className="work-item border-2 border-neutral-800 mb-[15px] rounded-3xl ">
                        <Image className='w-full rounded-xl' src={work_two} alt='preview of work' />
                        <h3 className='px-[24px] py-[24px] text-[20px] font-[600]'>John Mayer NYC</h3>
                    </div>
                    <div className="work-item border-2 border-neutral-800 mb-[15px] rounded-3xl ">
                        <Image className='w-full rounded-xl' src={work_three} alt='preview of work' />
                        <h3 className='px-[24px] py-[24px] text-[20px] font-[600]'>Nayzak Patterns</h3>
                    </div>
                    <div className="work-item border-2 border-neutral-800 mb-[15px] rounded-3xl ">
                        <Image className='w-full rounded-xl' src={work_four} alt='preview of work' />
                        <h3 className='px-[24px] py-[24px] text-[20px] font-[600]'>Crave Chips</h3>
                    </div>
                </div>
                <div className="for-all-works flex justify-center items-center gap-3 border-2 border-[#282828] py-[4px] rounded-2xl">
                    <Link href={'/'}>View all work
                    </Link>
                        <Image src={arrow_right_up} alt='arrow icon' />
                </div>
            </section>
            <section>

            </section>
        </main>
    )
}
