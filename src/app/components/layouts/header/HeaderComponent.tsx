'use client';

import React, { useEffect, useState } from 'react';

const HeaderComponent = () => {
  // define local state
  const [isDarkMode, setIsDarkMode] = useState<Boolean>(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState<Boolean>(false);

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
    <nav className='container' id='nav-container'>
      {/* for drawer navigation only lg: 1024 screen size */}
      <div className='relative py-[40px]'>
        <div className='nav-wrapper flex'>
          <a
            href='#'
            className='bg-custom-gradient bg-clip-text pr-4 text-4xl text-transparent md:pr-0'
          >
            Jon Doe
          </a>

          <ul
            className={`navbar ${isDrawerOpen ? 'max-[1024px]:translate-x-[0]' : 'max-[1024px]:translate-x-[-100%]'}`}
          >
            <li className='flex items-center justify-between lg:hidden'>
              <a
                href='#'
                className={`mb-3 bg-custom-gradient bg-clip-text pr-4 text-4xl text-transparent md:pr-0 `}
              >
                Jon Doe
              </a>
              <div className='absolute right-3 top-12 block lg:hidden'>
                <button
                  onClick={openDrawerNav}
                  className={`relative mt-2 flex h-[18px] w-[26px] cursor-pointer flex-col justify-between duration-300 ease-in`}
                >
                  <span
                    className={`delay-400 absolute top-0 inline h-[2px]  w-full bg-theme-primary duration-300 ease-in ${isDrawerOpen ? 'rotate-[45deg]' : 'rotate-[0deg]'}`}
                  ></span>
                  <span
                    className={`delay-400 inline h-[2px]  w-full bg-theme-primary duration-300 ease-in ${isDrawerOpen ? 'rotate-[-45deg]' : 'rotate-[0deg]'}`}
                  ></span>
                </button>
              </div>
            </li>
            <li>
              <a
                href='#'
                className={`nav-list-item-link dark:hover:bg-initial text-center lg:px-[20px] dark:hover:text-theme-dark-primary`}
              >
                Home
              </a>
            </li>
            <li className='lg:lg:mx-2'>
              <a className='nav-list-item-link ' href='#'>
                About
              </a>
            </li>
            <li className='lg:mx-2'>
              <a className='nav-list-item-link' href='#'>
                Tech Stack
              </a>
            </li>
            <li className='lg:mx-2'>
              <a href='#' className='nav-list-item-link'>
                Projects
              </a>
            </li>
            <li className='lg:mx-2'>
              <a href='#' className='nav-list-item-link'>
                Blog
              </a>
            </li>
            <li className='lg:mx-2'>
              <a className='nav-list-item-link' href='#'>
                Contact
              </a>
            </li>
            <li className='text-xl max-[1024px]:mt-2 lg:ml-[20px]'>
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

            {/* <li className='px-[20px] text-xl'>
          <a href='#'>
            <svg
              width='30'
              height='30'
              viewBox='0 0 30 30'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M15 0.599976C7.04701 0.599976 0.600006 7.04698 0.600006 15C0.600006 22.953 7.04701 29.4 15 29.4C22.953 29.4 29.4 22.953 29.4 15C29.4 7.04698 22.953 0.599976 15 0.599976ZM11.475 20.9685H8.55901V11.5845H11.475V20.9685ZM9.99901 10.4325C9.07801 10.4325 8.48251 9.77998 8.48251 8.97298C8.48251 8.14948 9.09601 7.51648 10.0365 7.51648C10.977 7.51648 11.553 8.14948 11.571 8.97298C11.571 9.77998 10.977 10.4325 9.99901 10.4325ZM22.125 20.9685H19.209V15.768C19.209 14.5575 18.786 13.7355 17.7315 13.7355C16.926 13.7355 16.4475 14.292 16.236 14.8275C16.158 15.018 16.1385 15.288 16.1385 15.5565V20.967H13.221V14.577C13.221 13.4055 13.1835 12.426 13.1445 11.583H15.678L15.8115 12.8865H15.87C16.254 12.2745 17.1945 11.3715 18.768 11.3715C20.6865 11.3715 22.125 12.657 22.125 15.42V20.9685V20.9685Z'
                fill='#666666'
              />
            </svg>
          </a>
        </li>
        <li className='px-[20px] text-xl'>
          <a href='#'>
            <svg
              width='30'
              height='30'
              viewBox='0 0 30 30'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M15 0.599976C7.04701 0.599976 0.600006 7.04698 0.600006 15C0.600006 22.953 7.04701 29.4 15 29.4C22.953 29.4 29.4 22.953 29.4 15C29.4 7.04698 22.953 0.599976 15 0.599976ZM11.475 20.9685H8.55901V11.5845H11.475V20.9685ZM9.99901 10.4325C9.07801 10.4325 8.48251 9.77998 8.48251 8.97298C8.48251 8.14948 9.09601 7.51648 10.0365 7.51648C10.977 7.51648 11.553 8.14948 11.571 8.97298C11.571 9.77998 10.977 10.4325 9.99901 10.4325ZM22.125 20.9685H19.209V15.768C19.209 14.5575 18.786 13.7355 17.7315 13.7355C16.926 13.7355 16.4475 14.292 16.236 14.8275C16.158 15.018 16.1385 15.288 16.1385 15.5565V20.967H13.221V14.577C13.221 13.4055 13.1835 12.426 13.1445 11.583H15.678L15.8115 12.8865H15.87C16.254 12.2745 17.1945 11.3715 18.768 11.3715C20.6865 11.3715 22.125 12.657 22.125 15.42V20.9685V20.9685Z'
                fill='#666666'
              />
            </svg>
          </a>
        </li>
        <li className='px-[20px] text-xl'>
          <a href='#'>
            <svg
              width='30'
              height='30'
              viewBox='0 0 30 30'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M15 0.599976C7.04701 0.599976 0.600006 7.04698 0.600006 15C0.600006 22.953 7.04701 29.4 15 29.4C22.953 29.4 29.4 22.953 29.4 15C29.4 7.04698 22.953 0.599976 15 0.599976ZM11.475 20.9685H8.55901V11.5845H11.475V20.9685ZM9.99901 10.4325C9.07801 10.4325 8.48251 9.77998 8.48251 8.97298C8.48251 8.14948 9.09601 7.51648 10.0365 7.51648C10.977 7.51648 11.553 8.14948 11.571 8.97298C11.571 9.77998 10.977 10.4325 9.99901 10.4325ZM22.125 20.9685H19.209V15.768C19.209 14.5575 18.786 13.7355 17.7315 13.7355C16.926 13.7355 16.4475 14.292 16.236 14.8275C16.158 15.018 16.1385 15.288 16.1385 15.5565V20.967H13.221V14.577C13.221 13.4055 13.1835 12.426 13.1445 11.583H15.678L15.8115 12.8865H15.87C16.254 12.2745 17.1945 11.3715 18.768 11.3715C20.6865 11.3715 22.125 12.657 22.125 15.42V20.9685V20.9685Z'
                fill='#666666'
              />
            </svg>
          </a>
        </li> */}
          </ul>
        </div>

        {!isDrawerOpen ? (
          <div className='absolute right-0 top-12 flex duration-200 ease-in lg:hidden'>
            <button onClick={themeToggler} className='me-3 mt-[-2px]  '>
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
              className='relative flex h-[18px] w-[26px] flex-col justify-between '
              onClick={openDrawerNav}
            >
              <span className='inline h-[2px] w-full bg-theme-primary'></span>
              <span className='inline h-[2px] w-full bg-theme-primary'></span>
              <span className='inline h-[2px] w-full bg-theme-primary'></span>
            </button>
          </div>
        ) : null}
      </div>
    </nav>
  );
};

export default HeaderComponent;
