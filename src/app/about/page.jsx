import Footer from '@/components/footer'
import Header from '@/components/header'
import Image from 'next/image'
import React from 'react'
import main_content from '../../assets/about-content.png'
import achiv_content from '../../assets/achiv_content.png'
import ava from '../../assets/ava.png'
import logo_quote from '../../assets/logo-quote.png'
import MembersOfTeam from '@/components/memberTeam'

export default function page() {
    return (
        <div className='custom-container'>
            <Header />
            <section>
                <div className="about-starter">
                    <h1 className='text-center text-[42px] leading-none font-[600] mt-[16px] md:max-w-[650px] mx-auto md:text-[62px]'>Humble beginnings. An inspiring story.</h1>
                    <Image src={main_content} alt='works have done by us' className='mt-[32px]' />
                </div>
                <div className="achievements-section flex justify-between items-center flex-col-reverse gap-[16px] mt-[50px] lg:flex-row">
                    <div className="left-achievements md:w-[45%]">
                        <Image src={achiv_content} alt='photo of working group' className='w-full'/>
                    </div>
                    <div className="right-achievements grid grid-cols-1 md:w-[53%]">
                        <div className="start-point border-b border-[#D0D5DD]">
                            <h2 className='text-[34px] font-[600] leading-none'>Years of achievements </h2>
                            <h3 className='text-[#9d9fa1] text-[18px] leading-none pt-[12px] pb-[24px]'>Lorem ipsum dolor sit amet consectetur. Nisl in pre nisl mauris quis euismod congue. Augue elit id morbi semper sed in.</h3>
                        </div>
                        <div className="stat-company grid grid-cols-1 gap-y-[24px] md:grid-cols-2 md:gap-x-[30px]">
                            <div className="stat-item pt-[24px] md:pt-0">
                                <h1 className='text-[34px] font-[600] leading-none'>15k+</h1>
                                <h2 className='text-[16px] pt-[4px] pb-[8px]'>Unique sections</h2>
                                <h3 className='text-[#9d9fa1] text-[16px] leading-none md:text-[14px]'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</h3>
                            </div>
                            <div className="stat-item">
                                <h1 className='text-[34px] font-[600] leading-none'>250+</h1>
                                <h2 className='text-[16px] pt-[4px] pb-[8px]'>Components</h2>
                                <h3 className='text-[#9d9fa1] text-[16px] leading-none md:text-[14px]'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</h3>
                            </div>
                            <div className="stat-item">
                                <h1 className='text-[34px] font-[600] leading-none'>86+</h1>
                                <h2 className='text-[16px] pt-[4px] pb-[8px]'>Clonable sections</h2>
                                <h3 className='text-[#9d9fa1] text-[16px] leading-none md:text-[14px]'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</h3>
                            </div>
                            <div className="stat-item">
                                <h1 className='text-[34px] font-[600] leading-none'>120+</h1>
                                <h2 className='text-[16px] pt-[4px] pb-[8px]'>Clonable sections</h2>
                                <h3 className='text-[#9d9fa1] text-[16px] leading-none md:text-[14px]'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="author-quote max-w-[600px] mx-auto mt-[30px] md:mt-[50px]">
                    <div className="author-info flex items-center gap-[10px]">
                        <Image src={ava} alt='picture of man' className='max-w-[59px] max-h-[59px]'/>
                        <div>
                            <h2 className='text-[16px] font-[600] md:text-[18px]'>Clonable sections</h2>
                            <span className='text-[16px] font-[600] md:text-[18px] text-[#9D9FA1]'>CEO, Evernote</span>
                        </div>
                    </div>
                    <div className="quote-author">
                        <p className='text-[20px] font-[600] md:text-[23px] leading-snug my-[32px]'>&quot;I&apos;ve been using Clonify for the past year and I&apos;m absolutely loving it. It&apos;s a powerful design tool that&apos;s easy to use and collaborate with others on. I especially love the real-time collaboration feature, which makes it so easy to get feedback from my team.&quot;</p>
                        <div className='flex items-center gap-[5px]'>
                            <Image src={logo_quote} alt='logo'/>
                            <span className='text-[18px]'>Altall</span>
                        </div>
                    </div>
                </div>
                <MembersOfTeam/>
            </section>
            <Footer />
        </div>
    )
}
