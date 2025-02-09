import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import contact from "../assets/Images/contact.png"
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

  return (<><ToastContainer autoClose={2000} />
    <div className='fixed h-[650px] w-3/4 bg-[#1F2B3E] rounded-3xl pt-12 pl-10 flex flex-col gap-4' style={{
      clipPath: "path('M 15,0 L 240,0 A 15,15 0,0,1 255,15 L 255,80 A 20,20 0,0,0 275,100 L 1000,100 A 15,15 0,0,1 1015,115 L 1015,635 A 15,15 0,0,1 1000,650 L 15,650 L 0,640 L 0,10 L 15,0 Z ')"
    }}>
      <div className='flex flex-col gap-10' >
        <div className='flex flex-col gap-20 pl-8'>
          <h1 className='text-white text-3xl '>Contact</h1>
        </div>
        <div className='flex flex-row gap-11 '>
          <div className='w-[250px] h-[500px] bg-cyan-100 rounded-xl bg-contain'>
            <img src={contact} alt="" className='rounded-lg h-[500px]'/>
          </div>
          <div className='flex flex-col gap-8 '>
            <p className='text-[#cee8ff] font-serif text-xl underline'>Get In Touch</p>
            <form ref={form} onSubmit={sendEmail} className='flex flex-col pl-10 gap-2 font-serif'>
              <label className='text-white '>Name</label>
              <input type="text" name="user_name" placeholder="Your Name" className='p-2 w-96 rounded-lg  bg-slate-400 placeholder-slate-200 '/>
              <label className='text-white '>Email</label>
              <input type="email" name="user_email" placeholder="Your Email" className='p-2 w-96 rounded-lg bg-slate-400 placeholder-slate-200' />
              <label className='text-white '>Message</label>
              <textarea name="message" placeholder="Your Message" className='p-2 w-96 rounded-lg h-[100px] bg-slate-400 placeholder-slate-200'></textarea>
              <button type='submit' className='absolute left-[46%] top-[78%]  bg-[#1F3A5F] w-24 text-center text-white p-3 rounded-xl'> Send </button>
            </form>
          </div>
        </div>
      </div>

    </div></>
  );
};

export default Contact;
