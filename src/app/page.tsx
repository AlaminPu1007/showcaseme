// import Image from 'next/image';
import React from 'react';

const page = () => {
  return (
    <section>
      <div className='container my-[30px] duration-200 md:my-[50px]'>
        <div className='item-center relative flex justify-center '>
          <div className='text-center'>
            <h5 className='text-md m-0 p-0 font-bold text-theme-dark-bg dark:text-white'>
              {' '}
              Hello 👋, I'am
            </h5>
            <h1 className='m-0 p-0 py-3 text-4xl font-bold tracking-[.08em] text-theme-secondary dark:text-white'>
              Jon Doe
            </h1>
            <h4 className='text-md dark:text-theme-white m-0 p-0 font-medium'>
              Business development
            </h4>
            <div className='item-center my-8  flex flex-col justify-center sm:flex-row'>
              <button className='hover:bg-theme-btn dark:border-theme-btn dark:text-theme-btn mb-5 whitespace-nowrap rounded-md border-[1px] px-8 py-3 duration-200 hover:text-white sm:mb-0 sm:me-5 dark:hover:bg-white dark:hover:text-theme-dark-bg'>
                Download Resume
              </button>
              <button className=' bg-theme-btn medium rounded-md border-[1px] px-5 py-3 text-theme-dark-bg duration-200 hover:text-white dark:border-0 dark:hover:bg-white dark:hover:text-theme-dark-bg'>
                Let's talk
              </button>
            </div>
          </div>
        </div>

        {/* <div className='flex flex-col justify-between lg:flex-row'>
          <div>
            <h1 className='m-0 p-0 text-center text-[55px] font-bold leading-[4.5rem] lg:text-start dark:text-theme-dark-header-txt'>
              Hi 👋,
              <br /> My name is
              <br />
              <span className='bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent'>
                JON DOE
              </span>
              <br />I build things for web
            </h1>
          </div>
          <div className='item-center my-[80px] flex shrink-[0] justify-center md:my-[120px] lg:mt-0 lg:justify-end'>
            <div className='border-gradient overflow-hidden rounded-full'>
              <Image
                alt='user-avatar'
                src={'https://i.stack.imgur.com/I4fiW.jpg?s=256&g=1'}
                width={350}
                height={350}
                className='object-cover'
              />
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default page;
