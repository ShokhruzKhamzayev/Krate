'use client'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';

export const ContactUs = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_9ynovw8', 'template_klpiu1p', form.current, 'fR5GwlLPYBarn04Uo')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        };
        const notify = () => toast.error("Something went wrong!");
    

    return (
        <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-[20px] mt-[40px]'>
            <input type="text" name="from_name" className='text-[#9D9FA1] border-b border-[#9D9FA1] outline-none bg-transparent text-[14px] py-[12px]' required placeholder='Full name'/>
            <input type="email" name="email_id" className='text-[#9D9FA1] border-b border-[#9D9FA1] outline-none bg-transparent text-[14px] py-[12px]' required onInvalid={notify} placeholder='Enter your email'/>
            <textarea name="message" className='text-[#9D9FA1] border-b border-[#9D9FA1] outline-none bg-transparent text-[14px] py-[12px] resize-y min-h-[100px]' required placeholder='Message'/>
            <input type="submit" value="Send Message" className='text-black bg-white flex justify-center items-center rounded-2xl py-[12px] px-[28px] text-[18px] font-[600]'/>
            <ToastContainer />
            <span className='text-[#9D9FA1] text-[14px]'>By contacting us, you agree to Clonify&apos;s <Link href={'/terms'} className='font-[600]'>Terms and Conditions</Link>.</span>
        </form>
    );
};