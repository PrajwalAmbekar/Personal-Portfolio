import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import contact from "../assets/Images/contact.png";
import './Contact.css'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_atxc869', 'template_28salzn', form.current, 'waf0WtoxQ9YdUb8E4')
      .then(
        () => {
          toast.success('Message sent successfully!', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
          });
          form.current.reset();
        },
        (error) => {
          toast.error('Failed to send message, please try again.', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
          });
        }
      );
  };

  return (
    <>
      <ToastContainer autoClose={2000} />
      <div className='lg:fixed lg:top-11 lg:h-[650px] lg:w-3/4 bg-[#1F2B3E] rounded-3xl lg:pt-12 lg:pl-10  flex flex-col lg:gap-4 laptop-clip-path sm:w-[800px] overflow-y-auto mobile-padding-top' style={{
        clipPath: "path('M 15,0 L 240,0 A 15,15 0,0,1 255,15 L 255,80 A 20,20 0,0,0 275,100 L 1000,100 A 15,15 0,0,1 1015,115 L 1015,635 A 15,15 0,0,1 1000,650 L 15,650 L 0,640 L 0,10 L 15,0 Z ')"
      }}>
        <div className='flex flex-col lg:gap-10 sm:gap-8'>
          <div className='flex flex-col gap-20 pl-8'>
            <h1 className='text-white text-3xl cursor-pointer hover:text-yellow-100 sm:mt-[10rem] lg:mt-4'>
              <span className='underline-animation'>Contact</span>
            </h1>
          </div>
          <div className='flex flex-row gap-11 lg:relative mobile-margin-adjustment'>
            <div className='flex flex-col lg:gap-8 lg:absolute left-[28%] top-[26%] w-full lg:w-auto px-4 lg:px-0'>
              <p className='font-serif text-xl hover:text-yellow-100 text-yellow-300'>
                <span className='underline-animation'>Get In Touch</span>
              </p>
              <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-4 font-serif'>
                <label className='text-white'>Name</label>
                <input
                  type="text"
                  name="user_name"
                  placeholder="Your Name"
                  className='p-2 w-full lg:w-96 rounded-lg bg-slate-400 placeholder-slate-200 transition-all duration-300 hover:shadow-lg hover-neon1'
                />
                <label className='text-white'>Email</label>
                <input
                  type="email"
                  name="user_email"
                  placeholder="Your Email"
                  className='p-2 w-full lg:w-96 rounded-lg bg-slate-400 placeholder-slate-200 transition-all duration-300 hover:shadow-lg hover-neon1'
                />
                <label className='text-white'>Message</label>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  className='p-2 w-full lg:w-96 rounded-lg h-[150px] lg:h-[100px] bg-slate-400 placeholder-slate-200 transition-all duration-300 hover:shadow-lg hover-neon1'
                ></textarea>
                <button
                  type='submit'
                  className='bg-[#1F3A5F] w-full lg:w-24 text-center text-white px-6 py-2 rounded-xl transition-transform duration-300 ease-in-out transform hover-neon neon-border mt-4 lg:mt-0 lg:absolute lg:left-[46%] lg:top-[110%]'
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;