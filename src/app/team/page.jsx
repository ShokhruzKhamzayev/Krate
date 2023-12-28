import Footer from '@/components/footer'
import Header from '@/components/header'
import Image from 'next/image'
import React from 'react'
import member_one from '../../assets/team-member-one.png'
import member_two from '../../assets/team-member-two.png'
import member_three from '../../assets/team-member-three.png'
import member_four from '../../assets/team-member-four.png'
import member_five from '../../assets/team-member-five.png'
import member_six from '../../assets/team-member-six.png'
import member_extra_three from '../../assets/team-m-extra-three.png'
import member_extra_four from '../../assets/team-m-extra-four.png'
import member_nine from '../../assets/team-member-nine.png'
import member_ten from '../../assets/team-m-ten.png'
import member_eleven from '../../assets/team-m-eleven.png'
import member_twelve from '../../assets/team-m-twelve.png'
import { metadata } from '../layout'


export default function page() {
    metadata.title = 'Team Members | Shokhruz'
    return (
        <div className='custom-container'>
            <Header />
            <section className='project-starter flex md:justify-between md:items-center border flex-col md:flex-row border-[#282828] rounded-xl'>
                <div className="left-project md:w-1/3">
                    <h1 className='p-[16px] border-b border-[#282828] text-[22px] font-[600] md:border-0 md:border-r md:px-[30px] md:py-[20px] md:text-[32px]'>Our Team </h1>
                </div>
                <div className="right-project p-[16px] text-[14px] font-[600] md:w-2/3 md:px-[30px] md:text-[28px] md:font-[400] leading-none">
                    <h2>We are passionate about creating visually stunning and functional solutions that communicate effectively.</h2>
                </div>
            </section>
            <section className='container-team grid grid-cols-1 gap-y-[20px] gap-x-[20px] mt-[30px] md:grid-cols-2 lg:grid-cols-4'>
                <div className="team-item border border-[#282828] rounded-3xl">
                    <Image src={member_one} alt='photo of worker' className='w-full rounded-t-3xl object-cover'/>
                    <div className='p-[16px]'>
                        <h2 className='text-[18px] font-[600]'>Jocelyn Schleifer</h2>
                        <h2 className='text-[16px] font-[600] text-[#9D9FA1]'>Managing Director</h2>
                    </div>
                </div>
                <div className="team-item border border-[#282828] rounded-3xl">
                    <Image src={member_two} alt='photo of worker' className='w-full rounded-t-3xl object-cover' />
                    <div className='p-[16px]'>
                        <h2 className='text-[18px] font-[600]'>Jocelyn Schleifer</h2>
                        <h2 className='text-[16px] font-[600] text-[#9D9FA1]'>Managing Director</h2>
                    </div>
                </div>
                <div className="team-item border border-[#282828] rounded-3xl">
                    <Image src={member_extra_three} alt='photo of worker' className='w-full rounded-t-3xl object-cover' />
                    <div className='p-[16px]'>
                        <h2 className='text-[18px] font-[600]'>Jocelyn Schleifer</h2>
                        <h2 className='text-[16px] font-[600] text-[#9D9FA1]'>Managing Director</h2>
                    </div>
                </div>
                <div className="team-item border border-[#282828] rounded-3xl">
                    <Image src={member_extra_four} alt='photo of worker' className='w-full rounded-t-3xl object-cover' />
                    <div className='p-[16px]'>
                        <h2 className='text-[18px] font-[600]'>Jocelyn Schleifer</h2>
                        <h2 className='text-[16px] font-[600] text-[#9D9FA1]'>Managing Director</h2>
                    </div>
                </div>
                <div className="team-item border border-[#282828] rounded-3xl">
                    <Image src={member_three} alt='photo of worker' className='w-full rounded-t-3xl object-cover' />
                    <div className='p-[16px]'>
                        <h2 className='text-[18px] font-[600]'>Jocelyn Schleifer</h2>
                        <h2 className='text-[16px] font-[600] text-[#9D9FA1]'>Managing Director</h2>
                    </div>
                </div>
                <div className="team-item border border-[#282828] rounded-3xl">
                    <Image src={member_four} alt='photo of worker' className='w-full rounded-t-3xl object-cover' />
                    <div className='p-[16px]'>
                        <h2 className='text-[18px] font-[600]'>Jocelyn Schleifer</h2>
                        <h2 className='text-[16px] font-[600] text-[#9D9FA1]'>Managing Director</h2>
                    </div>
                </div>
                <div className="team-item border border-[#282828] rounded-3xl">
                    <Image src={member_five} alt='photo of worker' className='w-full rounded-t-3xl object-cover' />
                    <div className='p-[16px]'>
                        <h2 className='text-[18px] font-[600]'>Jocelyn Schleifer</h2>
                        <h2 className='text-[16px] font-[600] text-[#9D9FA1]'>Managing Director</h2>
                    </div>
                </div>
                <div className="team-item border border-[#282828] rounded-3xl">
                    <Image src={member_six} alt='photo of worker' className='w-full rounded-t-3xl object-cover' />
                    <div className='p-[16px]'>
                        <h2 className='text-[18px] font-[600]'>Jocelyn Schleifer</h2>
                        <h2 className='text-[16px] font-[600] text-[#9D9FA1]'>Managing Director</h2>
                    </div>
                </div>
                <div className="team-item border border-[#282828] rounded-3xl">
                    <Image src={member_nine} alt='photo of worker' className='w-full rounded-t-3xl object-cover' />
                    <div className='p-[16px]'>
                        <h2 className='text-[18px] font-[600]'>Jocelyn Schleifer</h2>
                        <h2 className='text-[16px] font-[600] text-[#9D9FA1]'>Managing Director</h2>
                    </div>
                </div>
                <div className="team-item border border-[#282828] rounded-3xl">
                    <Image src={member_ten} alt='photo of worker' className='w-full rounded-t-3xl object-cover' />
                    <div className='p-[16px]'>
                        <h2 className='text-[18px] font-[600]'>Jocelyn Schleifer</h2>
                        <h2 className='text-[16px] font-[600] text-[#9D9FA1]'>Managing Director</h2>
                    </div>
                </div>
                <div className="team-item border border-[#282828] rounded-3xl">
                    <Image src={member_eleven} alt='photo of worker' className='w-full rounded-t-3xl object-cover' />
                    <div className='p-[16px]'>
                        <h2 className='text-[18px] font-[600]'>Jocelyn Schleifer</h2>
                        <h2 className='text-[16px] font-[600] text-[#9D9FA1]'>Managing Director</h2>
                    </div>
                </div>
                <div className="team-item border border-[#282828] rounded-3xl">
                    <Image src={member_twelve} alt='photo of worker' className='w-full rounded-t-3xl object-cover' />
                    <div className='p-[16px]'>
                        <h2 className='text-[18px] font-[600]'>Jocelyn Schleifer</h2>
                        <h2 className='text-[16px] font-[600] text-[#9D9FA1]'>Managing Director</h2>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}
