import Footer from '@/components/footer'
import Header from '@/components/header'
import Image from 'next/image'
import React from 'react'
import blog_one from '../../assets/blog-one.png'
import blog_two from '../../assets/blog-two.png'
import blog_three from '../../assets/blog-three.png'
import blog_four from '../../assets/blog-four.png'
import blog_five from '../../assets/work-two-lap.png'
import blog_six from '../../assets/blog-six.png'
import blog_seven from '../../assets/blog-seven.png'
import blog_eight from '../../assets/blog-eight.png'
import { metadata } from '../layout'


export default function page() {
    metadata.title = 'Blogs | Shokhruz'
    return (
        <div className='custom-container'>
            <Header />
            <section className='project-starter flex md:justify-between md:items-center border flex-col md:flex-row border-[#282828] rounded-xl'>
                <div className="left-project md:w-1/3">
                    <h1 className='p-[16px] border-b border-[#282828] text-[22px] font-[600] md:border-0 md:border-r md:px-[30px] md:py-[20px] md:text-[32px]'>Blog</h1>
                </div>
                <div className="right-project p-[16px] text-[14px] font-[600] md:w-2/3 md:px-[30px] md:text-[20px] md:font-[400] leading-none">
                    <h2>Latest articles and resources curated by our community</h2>
                </div>
            </section>
            <div className="blog-container grid grid-cols-1 gap-y-[30px] lg:grid-cols-2 gap-x-[32px] mt-[30px]">
                <div className="blog-item">
                    <Image src={blog_one} alt='preview of blog' className='w-full max-h-[300px] object-cover rounded-3xl'/>
                    <div className='mt-[20px]'>
                        <span className='text-[#9D9FA1] text-[16px] font-[600]'>October 12, 2024</span>
                        <h2 className='text-[22px] font-[600]'>How to create SVG-ready icon symbols in Sketch</h2>
                    </div>
                </div>
                <div className="blog-item">
                    <Image src={blog_two} alt='preview of blog' className='w-full max-h-[300px] object-cover rounded-3xl' />
                    <div className='mt-[20px]'>
                        <span className='text-[#9D9FA1] text-[16px] font-[600]'>October 12, 2024</span>
                        <h2 className='text-[22px] font-[600]'>Cinema 4D Visual Explorations by David Milan</h2>
                    </div>
                </div>
                <div className="blog-item">
                    <Image src={blog_three} alt='preview of blog' className='w-full max-h-[300px] object-cover rounded-3xl' />
                    <div className='mt-[20px]'>
                        <span className='text-[#9D9FA1] text-[16px] font-[600]'>October 12, 2024</span>
                        <h2 className='text-[22px] font-[600]'>Mental models for designers</h2>
                    </div>
                </div>
                <div className="blog-item">
                    <Image src={blog_four} alt='preview of blog' className='w-full max-h-[300px] object-cover rounded-3xl' />
                    <div className='mt-[20px]'>
                        <span className='text-[#9D9FA1] text-[16px] font-[600]'>October 12, 2024</span>
                        <h2 className='text-[22px] font-[600]'>We design digital products that serve a purpose and make people’s lives</h2>
                    </div>
                </div>
                <div className="blog-item">
                    <Image src={blog_five} alt='preview of blog' className='w-full max-h-[300px] object-cover lg:min-h-[300px] rounded-3xl' />
                    <div className='mt-[20px]'>
                        <span className='text-[#9D9FA1] text-[16px] font-[600]'>October 12, 2024</span>
                        <h2 className='text-[22px] font-[600]'>Blueprint fidelity: between paper prototype and finished product</h2>
                    </div>
                </div>
                <div className="blog-item">
                    <Image src={blog_six} alt='preview of blog' className='w-full max-h-[300px] object-cover rounded-3xl' />
                    <div className='mt-[20px]'>
                        <span className='text-[#9D9FA1] text-[16px] font-[600]'>October 12, 2024</span>
                        <h2 className='text-[22px] font-[600]'>Introducing: A brand new Dribbble</h2>
                    </div>
                </div>
                <div className="blog-item">
                    <Image src={blog_seven} alt='preview of blog' className='w-full max-h-[300px] object-cover rounded-3xl' />
                    <div className='mt-[20px]'>
                        <span className='text-[#9D9FA1] text-[16px] font-[600]'>October 12, 2024</span>
                        <h2 className='text-[22px] font-[600]'>Design critiques at Figma</h2>
                    </div>
                </div>
                <div className="blog-item">
                    <Image src={blog_eight} alt='preview of blog' className='w-full max-h-[300px] object-cover rounded-3xl' />
                    <div className='mt-[20px]'>
                        <span className='text-[#9D9FA1] text-[16px] font-[600]'>October 12, 2024</span>
                        <h2 className='text-[22px] font-[600]'>We design digital products that serve a purpose and make people’s lives</h2>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
