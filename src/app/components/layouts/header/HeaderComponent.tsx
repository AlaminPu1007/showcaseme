'use client';

import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';

const HeaderComponent = () => {
  // define local state
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  const ref = useRef<HTMLUListElement | null>(null);

  // This module is for to detect user outside click of the given id
  // It will help us to close our open navigation
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleClickOutside = (event: Event) => {
        if (ref.current && !ref.current.contains(event.target as Node)) {
          if (isDrawerOpen) setIsDrawerOpen(false);
        }
      };
      document.addEventListener('click', handleClickOutside, true);
      return () => {
        document.removeEventListener('click', handleClickOutside, true);
      };
    }
  }, [isDrawerOpen]);

  // If user selected dark mode or vise versa
  const themeToggler = () => {
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
      setIsDarkMode((prv) => !prv);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDarkMode((prv) => !prv);
    }
  };

  /**
   * description :- This method will trigger/open drawer navigation
   * @created_by :- {Al-Amin}
   * @created_at :- 29/04/2024 16:07:22
   */
  const openDrawerNav = () => setIsDrawerOpen((prv) => !prv);

  return (
    <nav className='pt-[5px] lg:pt-[20px]'>
      {/* for drawer navigation only lg: 1024 screen size */}
      <div className='container relative py-[20px]'>
        <div className='nav-wrapper flex'>
          <Link
            href='/'
            // className='bg-custom-gradient bg-clip-text pr-4 text-4xl font-bold tracking-wider text-transparent md:pr-0'
            className='m-0 flex items-center p-0 pr-4 text-center text-3xl font-semibold tracking-wider text-theme-secondary sm:text-4xl md:pr-0 dark:text-white'
          >
            ALAMIN
          </Link>

          <ul
            className={`navbar z-50 ${isDrawerOpen ? 'max-[1023px]:translate-x-[0]' : 'max-[1023px]:translate-x-[-100%]'}`}
            id='drawer-navigation'
            ref={ref}
          >
            <li className='flex items-center justify-between lg:hidden'>
              <Link
                href='/'
                className={`mb-3 pr-4 text-3xl font-semibold tracking-wider text-theme-secondary sm:text-4xl md:pr-0 dark:text-white`}
              >
                ALAMIN
              </Link>
              <div className='absolute right-3 top-9 block lg:hidden'>
                <button
                  onClick={openDrawerNav}
                  className={`relative mt-2 flex h-[18px] w-[26px] cursor-pointer flex-col justify-between duration-300 ease-in`}
                >
                  <span
                    className={`delay-400 absolute top-0 inline h-[2px]  w-full bg-theme-primary duration-300 ease-in dark:bg-white dark:opacity-70 ${isDrawerOpen ? 'rotate-[45deg]' : 'rotate-[0deg]'}`}
                  ></span>
                  <span
                    className={`delay-400 inline h-[2px]  w-full bg-theme-primary duration-300 ease-in dark:bg-white dark:opacity-70 ${isDrawerOpen ? 'rotate-[-45deg]' : 'rotate-[0deg]'}`}
                  ></span>
                </button>
              </div>
            </li>
            <li>
              <Link
                href='/'
                className={`nav-list-item-link dark:hover:bg-initial text-center dark:hover:text-theme-dark-primary`}
              >
                Home
              </Link>
            </li>
            <li className='lg:lg:mx-2'>
              <Link href='/#about-myself' className='nav-list-item-link '>
                About
              </Link>
            </li>
            <li className='lg:mx-2'>
              <Link href='/#my-tech-stack' className='nav-list-item-link'>
                Tech Stack
              </Link>
            </li>
            <li className='lg:mx-2'>
              <Link
                href='/#my-personal-projects'
                className='nav-list-item-link'
              >
                Projects
              </Link>
            </li>
            <li className='lg:mx-2'>
              <Link href='/blog' className='nav-list-item-link'>
                Blog
              </Link>
            </li>
            <li className='lg:mx-2'>
              <Link href='/#footer-widget' className='nav-list-item-link'>
                Contact
              </Link>
            </li>
            <li className='text-xl max-[1024px]:mt-0 lg:ml-[20px]'>
              <button onClick={themeToggler}>
                {isDarkMode ? (
                  <svg viewBox='0 0 24 24' fill='none' className='h-6 w-6'>
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z'
                      className='fill-sky-400/20'
                    ></path>
                    <path
                      d='m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z'
                      className='fill-sky-500'
                    ></path>
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z'
                      className='fill-sky-500'
                    ></path>
                  </svg>
                ) : (
                  <svg
                    viewBox='0 0 24 24'
                    fill='none'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='h-6 w-6'
                  >
                    <path
                      d='M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
                      className='fill-black-400/20 stroke-black'
                    ></path>
                    <path
                      d='M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836'
                      className='stroke-black'
                    ></path>
                  </svg>
                )}
              </button>
            </li>
          </ul>
        </div>

        {!isDrawerOpen ? (
          <div className='absolute right-[2%] top-[30px] flex duration-200 ease-in lg:hidden '>
            <button onClick={themeToggler} className='me-3 mt-[-3px]  '>
              {isDarkMode ? (
                <svg viewBox='0 0 24 24' fill='none' className='h-6 w-6'>
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z'
                    className='fill-sky-400/20'
                  ></path>
                  <path
                    d='m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z'
                    className='fill-sky-500'
                  ></path>
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z'
                    className='fill-sky-500'
                  ></path>
                </svg>
              ) : (
                <svg
                  viewBox='0 0 24 24'
                  fill='none'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='h-6 w-6'
                >
                  <path
                    d='M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
                    className='fill-black-400/20 stroke-black'
                  ></path>
                  <path
                    d='M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836'
                    className='stroke-black'
                  ></path>
                </svg>
              )}
            </button>
            <button
              className='relative flex h-[18px] w-[26px] flex-col justify-between'
              onClick={openDrawerNav}
            >
              <span className='inline h-[2px] w-full bg-theme-primary dark:bg-white dark:opacity-70'></span>
              <span className='inline h-[2px] w-full bg-theme-primary dark:bg-white dark:opacity-70'></span>
              <span className='inline h-[2px] w-full bg-theme-primary dark:bg-white dark:opacity-70'></span>
            </button>
          </div>
        ) : null}
      </div>
    </nav>
  );
};

export default HeaderComponent;
