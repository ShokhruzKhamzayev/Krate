import BottomFooter from '@/components/bottomFooter'
import Header from '@/components/header'
import React from 'react'
import contact_content from '../../assets/contact-content.png'
import Image from 'next/image'
import { ContactUs } from '@/components/contactEmail'

export default function page() {
    return (
        <div className='custom-container'>
            <Header />
            <section className='project-starter flex md:justify-between md:items-center border flex-col md:flex-row border-[#282828] rounded-xl'>
                <div className="left-project md:w-1/3">
                    <h1 className='p-[16px] border-b border-[#282828] text-[22px] font-[600] md:border-0 md:border-r md:px-[30px] md:py-[20px] md:text-[32px]'>Get in touch</h1>
                </div>
                <div className="right-project p-[16px] text-[14px] font-[600] md:w-2/3 md:px-[30px] md:text-[28px] md:font-[400] leading-none">
                    <h2>We are passionate about creating visually stunning and functional solutions that communicate effectively.</h2>
                </div>
            </section>
            <div className="achievements-section flex justify-between items-center flex-col-reverse gap-[16px] mt-[50px] lg:flex-row">
                <div className="left-achievements md:w-[55%]">
                    <Image src={contact_content} alt='photo of working group' className='w-full' />
                </div>
                <div className="right-achievements grid grid-cols-1 md:w-[40%]">
                    <div className="start-point">
                        <h2 className='text-[34px] font-[600] leading-none pb-[30px]'>Our offices </h2>
                    </div>
                    <div className="stat-company grid grid-cols-2 gap-y-[24px] gap-x-[20px] md:gap-x-[30px]">
                        <div className="stat-item pt-[24px] md:pt-0">
                            <h1 className='text-[18px] font-[600] leading-none'>Netherlands</h1>
                            <h3 className='text-[#9d9fa1] text-[16px] leading-none pt-[10px] md:text-[14px]'>Suite 101 Nayzak Street <br /> London REU UK</h3>
                        </div>
                        <div className="stat-item pt-[24px] md:pt-0">
                            <h1 className='text-[18px] font-[600] leading-none'>Japan</h1>
                            <h3 className='text-[#9d9fa1] text-[16px] leading-none pt-[10px] md:text-[14px]'>Suite 101 Nayzak Street <br /> London REU UK</h3>
                        </div>
                        <div className="stat-item pt-[24px] md:pt-0">
                            <h1 className='text-[18px] font-[600] leading-none'>United States</h1>
                            <h3 className='text-[#9d9fa1] text-[16px] leading-none pt-[10px] md:text-[14px]'>Suite 101 Nayzak Street <br /> London REU UK</h3>
                        </div>
                        <div className="stat-item pt-[24px] md:pt-0">
                            <h1 className='text-[18px] font-[600] leading-none'>Netherlands</h1>
                            <h3 className='text-[#9d9fa1] text-[16px] leading-none pt-[10px] md:text-[14px]'>Suite 101 Nayzak Street <br /> London REU UK</h3>
                        </div>
                        <div className="stat-item pt-[24px] md:pt-0">
                            <h1 className='text-[18px] font-[600] leading-none'>Japan</h1>
                            <h3 className='text-[#9d9fa1] text-[16px] leading-none pt-[10px] md:text-[14px]'>Suite 101 Nayzak Street <br /> London REU UK</h3>
                        </div>
                        <div className="stat-item pt-[24px] md:pt-0">
                            <h1 className='text-[18px] font-[600] leading-none'>United States</h1>
                            <h3 className='text-[#9d9fa1] text-[16px] leading-none pt-[10px] md:text-[14px]'>Suite 101 Nayzak Street <br /> London REU UK</h3>
                        </div>
                    </div>
                </div>
            </div>
            <section className='get-in-touch mt-[40px]'>
                <h1 className='text-[30px] font-[600]'>Get in touch</h1>
                <ContactUs />
            </section>
            <BottomFooter />
        </div>
    )
}
