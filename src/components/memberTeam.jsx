import React from 'react'
import member_one from '../assets/team-member-one.png'
import member_two from '../assets/team-member-two.png'
import member_three from '../assets/team-member-three.png'
import member_four from '../assets/team-member-four.png'
import member_five from '../assets/team-member-five.png'
import member_six from '../assets/team-member-six.png'
import arrow_right from '../assets/arrow-right.png'
import arrow_top_right from '../assets/arrow-up-right.svg'
import Image from 'next/image'
import Link from 'next/link'



export default function MembersOfTeam() {
  return (
      <section className='team'>
          <div className="team-starter service-starter flex gap-2 items-center mt-[40px] mb-[20px]">
              <Image src={arrow_right} alt='arrow right icon' />
              <h3>
                  Our Works
              </h3>
          </div>
          <div className="team-container grid grid-cols-1 gap-y-5 md:grid-cols-3 lg:grid-cols-4 md:gap-x-5">
              <h1 className='text-[32px] font-[600] mb-[20px] leading-none md:col-span-2'>We are passionate about creating visually stunning and functional solutions that communicate effectively.</h1>
              <div className="team-member border border-[#282828] rounded-2xl">
                  <div className="img-member">
                      <Image src={member_one} alt='worker' className='w-full h-[300px] rounded-t-2xl md:h-[250px]' />
                  </div>
                  <div className="info-member pl-3 py-3">
                      <h2 className='text-[18px] font-[600]'>Jocelyn Schleifer</h2>
                      <h3 className='text-[16px] text-[#9d9fa1] font-[600]'>Managing Director</h3>
                  </div>
              </div>
              <div className="team-member border border-[#282828] rounded-2xl">
                  <div className="img-member">
                      <Image src={member_two} alt='worker' className='w-full h-[300px] rounded-t-2xl md:h-[250px]' />
                  </div>
                  <div className="info-member pl-3 py-3">
                      <h2 className='text-[18px] font-[600]'>Jocelyn Schleifer</h2>
                      <h3 className='text-[16px] text-[#9d9fa1] font-[600]'>Managing Director</h3>
                  </div>
              </div>
              <div className="team-member border border-[#282828] rounded-2xl">
                  <div className="img-member">
                      <Image src={member_three} alt='worker' className='w-full h-[300px] rounded-t-2xl md:h-[250px]' />
                  </div>
                  <div className="info-member pl-3 py-3">
                      <h2 className='text-[18px] font-[600]'>Jocelyn Schleifer</h2>
                      <h3 className='text-[16px] text-[#9d9fa1] font-[600]'>Managing Director</h3>
                  </div>
              </div>
              <div className="team-member border border-[#282828] rounded-2xl">
                  <div className="img-member">
                      <Image src={member_four} alt='worker' className='w-full h-[300px] rounded-t-2xl md:h-[250px]' />
                  </div>
                  <div className="info-member pl-3 py-3">
                      <h2 className='text-[18px] font-[600]'>Jocelyn Schleifer</h2>
                      <h3 className='text-[16px] text-[#9d9fa1] font-[600]'>Managing Director</h3>
                  </div>
              </div>
              <div className="team-member border border-[#282828] rounded-2xl">
                  <div className="img-member">
                      <Image src={member_five} alt='worker' className='w-full h-[300px] rounded-t-2xl md:h-[250px]' />
                  </div>
                  <div className="info-member pl-3 py-3">
                      <h2 className='text-[18px] font-[600]'>Jocelyn Schleifer</h2>
                      <h3 className='text-[16px] text-[#9d9fa1] font-[600]'>Managing Director</h3>
                  </div>
              </div>
              <div className="team-member border border-[#282828] rounded-2xl">
                  <div className="img-member">
                      <Image src={member_six} alt='worker' className='w-full h-[300px] rounded-t-2xl md:h-[250px]' />
                  </div>
                  <div className="info-member pl-3 py-3">
                      <h2 className='text-[18px] font-[600]'>Jocelyn Schleifer</h2>
                      <h3 className='text-[16px] text-[#9d9fa1] font-[600]'>Managing Director</h3>
                  </div>
              </div>
          </div>
          <Link href={'/team'} className='flex justify-center items-center border border-[#282828] py-[14px] rounded-3xl mt-[25px]'>
            See all members 
            <Image src={arrow_top_right} alt='icon top right arrow'/>
          </Link>
      </section>
  )
}
