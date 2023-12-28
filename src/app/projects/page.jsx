import Footer from '@/components/footer'
import Header from '@/components/header'
import Image from 'next/image'
import React from 'react'
import work_one_lap from '../../assets/work-one-lap.png'
import work_two_lap from '../../assets/work-two-lap.png'
import work_three_lap from '../../assets/work-three-lap.png'
import arrow_top_right from '../../assets/arrow-up-right.svg'
import {metadata} from '../layout'
 
export default function page() {
  metadata.title = 'Projects | Shokhruz'
  return (
    <div className='custom-container'>
      <Header />
      <section className='project-starter flex md:justify-between md:items-center border flex-col md:flex-row border-[#282828] rounded-xl'>
        <div className="left-project md:w-1/3">
          <h1 className='p-[16px] border-b border-[#282828] text-[22px] font-[600] md:border-0 md:border-r md:px-[30px] md:py-[20px] md:text-[32px]'>Case Studies</h1>
        </div>
        <div className="right-project p-[16px] text-[14px] font-[600] md:w-2/3 md:px-[30px] md:text-[28px] md:font-[400] leading-none">
          <h2>Ut nunc, dui sit sit nisl, cras velit lorem. Laoreet gravida adipiscing augue sit. </h2>
        </div>
      </section>
      <div className="projects-container">
        <div className="project-item relative mt-[30px]">
          <Image src={work_one_lap} alt='preview work' className='h-[400px] object-cover rounded-xl'/>
          <div className="float-screen absolute bottom-[16px] p-[24px] w-11/12 right-[50%] translate-x-[50%] flex justify-start items-start flex-col bg-black rounded-3xl md:translate-x-0 md:w-[350px] md:right-[15px]">
            <h2 className='text-[20px] font-[600]'>Galaxia Branding</h2>
            <div className="for-more flex gap-[3px] items-center">
              <h2 className='text-[20px] font-[600]'>View all work</h2>
              <Image src={arrow_top_right} alt='arrow icon'/>
            </div>
          </div>
        </div>
        <div className="project-item relative mt-[30px]">
          <Image src={work_two_lap} alt='preview work' className='block h-[400px] object-cover rounded-xl' />
          <div className="float-screen absolute bottom-[16px] p-[24px] w-11/12 right-[50%] translate-x-[50%] flex justify-start items-start flex-col bg-black rounded-3xl md:translate-x-0 md:w-[350px] md:right-[15px]">
            <h2 className='text-[20px] font-[600]'>Nayzak Patterns</h2>
            <div className="for-more flex gap-[3px] items-center">
              <h2 className='text-[20px] font-[600]'>View all work</h2>
              <Image src={arrow_top_right} alt='arrow icon' />
            </div>
          </div>
        </div>
        <div className="project-item relative mt-[30px]">
          <Image src={work_three_lap} alt='preview work' className='block h-[400px] object-cover rounded-xl' />
          <div className="float-screen absolute bottom-[16px] p-[24px] w-11/12 right-[50%] translate-x-[50%] flex justify-start items-start flex-col bg-black rounded-3xl md:translate-x-0 md:w-[350px] md:right-[15px]">
            <h2 className='text-[20px] font-[600]'>John Mayer NYC</h2>
            <div className="for-more flex gap-[3px] items-center">
              <h2 className='text-[20px] font-[600]'>View all work</h2>
              <Image src={arrow_top_right} alt='arrow icon' />
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
