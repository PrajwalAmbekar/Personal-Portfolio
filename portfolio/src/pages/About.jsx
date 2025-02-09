import React from 'react'


const About = () => {
  return (<>


    <div className='fixed h-[650px] w-3/4 bg-[#1F2B3E] rounded-3xl  p-10 flex flex-col gap-4' style={{
      clipPath: "path('M 15,0 L 240,0 A 15,15 0,0,1 255,15 L 255,80 A 20,20 0,0,0 275,100 L 1000,100 A 15,15 0,0,1 1015,115 L 1015,635 A 15,15 0,0,1  1000,650 L 15,650 L 0,640 L 0,10 L 15,0 Z ')"
    }}>
      <div className='flex flex-col gap-10'>
        <p className='text-white text-3xl hover:underline cursor-pointer'>About me</p>
        <p className='font-serif text-[#ACC2EF] w-[900px]' style={{"text-indent":"100px"
        }}>          Hi, I’m Prajwal– A Creative Full-Stack Developer, Turning Ideas into Reality. With a passion for design and innovation, I transform complex challenges into visually engaging solutions. I can help you to create your websites and make a lasting impression in the marketplace.
          Let's connect and work together to make your ideas come true!</p>
      </div>
      <div className='flex flex-col gap-2'>
        <p className='text-white text-3xl hover:underline cursor-pointer'>What I'm Doing</p>
        <div className='flex flex-col  gap-6'>
          <div className='bg-[#1F3A5F]  flex gap-6 p-8 rounded-3xl w-[925px]'>
            <div className='flex gap-6'>
              <div className='w-16 h-16 bg-[#0F1C2E] rounded-lg'></div> {/**Image */}
            </div>
            <div className='flex flex-col gap-4'>
              <p className='font-serif text-[#8DA6D8]'>Web Dvelopment</p>
              <p className='font-serif text-[#ACC2EF] text-balance'>crafting high-quality web solutions that enhance user experience and meet business goals. Whether it's front-end design or back-end functionality, I ensure every aspect of the development process is meticulously handled to deliver responsive, fast, and reliable websites</p></div>
          </div>
          <div className='flex flex-row gap-6'>
            <div className='bg-[#1F3A5F] flex gap-6 p-8 rounded-3xl w-[450px] '>
              <div className='flex gap-6'>
                <div className='w-16 h-16 bg-[#0F1C2E] rounded-lg'></div> {/**Image */}

              </div>
              <div className='flex flex-col gap-4'>
                <p className='font-serif text-[#8DA6D8]'>Creative Design</p>
                <p className='font-serif text-[#ACC2EF]'>My work brings ideas to life with innovative and visually appealing designs, including social media graphics.</p></div>
            </div>
            <div className='bg-[#1F3A5F]  flex gap-6 p-8 rounded-3xl w-[450px] '>
              <div className='flex gap-6'>
                <div className='w-16 h-16 bg-[#0F1C2E] rounded-lg'></div> {/**Image */}

              </div>
              <div className='flex flex-col gap-4'>
                <p className='font-serif text-[#8DA6D8]'>Logo Design</p>
                <p className='font-serif text-[#ACC2EF]'>My work creates distinctive and memorable logos that define and elevate your brand identity.</p></div>
            </div>
          </div>
        </div>
      </div>




    </div>
  </>)
}

export default About;
