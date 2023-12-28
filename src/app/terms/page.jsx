import React from 'react'
import Header from '../../components/header'
import Footer from '../../components/bottomFooter'

export default function page() {
    return (
        <div className='custom-container'>
            <Header />
            <section>
                <div className="starter-terms mt-[25px] border-b border-[#282828] pb-[32px]">
                    <h1 className='text-[34px] font-[600] text-center lg:text-[63px] lg:text-left'>Terms & Conditions</h1>
                    <div className='flex justify-center items-center gap-[20px] lg:justify-start lg:pl-[40px] lg:items-center cursor-pointer'>
                        <span className='text-[14px] text-[#EAECF0] font-[600]'>V.1.3</span>
                        <p className='text-[16px] text-[#EAECF0]'>May 24, 2024</p>
                    </div>
                </div>
                <div className="terms-content mt-[15px]">
                    <p className='text-[#BDBDBD] text-[16px] md:text-[22px]'>Nayzak, everyone in my team works towards the samegoal. This enabled our teams to ship new ideas and feel more capable. Podcasting operational — change management inside of workflows. Completely synergize. <br /><br /> But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself<br /><br />On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through.</p>
                    <div className="tips">
                        <div className='pt-[42px]'>
                            <h1 className='text-[28px] md:text-[32px]'>1. Definitions</h1>
                            <p className='text-[16px] mt-[24px] md:text-[22px] text-[#BDBDBD]'>Nayzak, everyone in my team works towards the samegoal. This enabled our teams to ship new ideas and feel more capable. Podcasting operational — change management inside of workflows. Completely synergize. <br /><br /> But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself<br /><br />On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through.</p>
                        </div>
                        <div className='pt-[42px]'>
                            <h1 className='text-[28px] md:text-[32px]'>2. Usage & Rights</h1>
                            <p className='text-[16px] mt-[24px] md:text-[22px] text-[#BDBDBD]'>1.1 <span className='font-[600]'>&quot;Nayzak design&quot;</span>, everyone in my team works towards the samegoal. This enabled our teams to ship new ideas and feel more capable. Podcasting operational — change management inside of workflows. Completely synergize. <br /><br /> 1.2 <span className='font-[600]'>&quot;Denouncing pleasure&quot;</span> to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself<br /><br />1.2 <span className='font-[600]'>&quot;Righteous indignation&quot;</span>, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through.</p>
                        </div>
                        <div className='pt-[42px]'>
                            <h1 className='text-[28px] md:text-[32px]'>3. Usage & Rights</h1>
                            <p className='text-[16px] mt-[24px] md:text-[22px] text-[#BDBDBD]'>a) <span className='font-[600]'>&quot;Nayzak design&quot;</span>, everyone in my team works towards the samegoal. This enabled our teams to ship new ideas and feel more capable. Podcasting operational — change management inside of workflows. Completely synergize. <br /><br /> b) <span className='font-[600]'>&quot;Denouncing pleasure&quot;</span> to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself<br /><br />c)<span className='font-[600]'>&quot;Righteous indignation&quot;</span>, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through.</p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}
