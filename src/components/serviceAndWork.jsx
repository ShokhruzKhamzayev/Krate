import React from 'react'
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
import arrow_right from '../assets/arrow-right.png'
import Image from 'next/image'
import Link from 'next/link'


export default function ServiceWork() {
  return (
    <>
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
              <div className="for-all-works md:flex justify-center items-center gap-3 border-2 border-[#282828] py-[4px] rounded-2xl hidden">
                  <Link href={'/projects'}>View all work
                  </Link>
                  <Image src={arrow_right_up} alt='arrow icon' />
              </div>
          </section>
    </>
  )
}
