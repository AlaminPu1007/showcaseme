'use client';

import {
  TechStack,
  TechStackItem,
  WorkExperience,
  techStacks,
  workExperience,
} from '@/app/constant';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const AboutComponent = () => {
  return (
    <div className='section-top-gap container duration-200'>
      <div id='about-myself'>
        <h1 className='title-txt'>About Me</h1>
        <p className='m-0 mt-3 break-words p-0 text-lg text-theme-primary dark:text-theme-dark-primary'>
          {
            "I'm a 26-year-old software engineer with 4+ years of experience in web technology, specializing in JavaScript, React.js (Next.js), and problem-solving. I am passionate about creating high-performance web applications and continuously improving my skills in modern web development technologies."
          }
        </p>
        {/* <p className='m-0 mt-3 break-words p-0 text-lg text-theme-primary dark:text-theme-dark-primary'>
          {
            "Experienced software engineer proficient in both frontend and backend development, with a specialization in mobile application development using React Native. With over 4+ years of hands-on experience, I've built a strong foundation in JavaScript and its frameworks, including ReactJs and NodeJs, while also crafting scalable backend solutions with ExpressJs. Having solved over 700+ problems on platforms like LeetCode and UVa, I'm now seeking to join a dynamic development team where I can leverage my diverse skill set to contribute to the creation of innovative and impactful projects "
          }
        </p> */}
      </div>

      <div className='title-top-gap'>
        <h1 className='title-txt break-words'>{`Work Experience (4+ Years)`}</h1>

        {workExperience?.map((item: WorkExperience, index: number) => {
          // define delay time for each node
          const delayTime = Number('0.' + index * 2);

          return (
            <motion.div
              className={`group ${index === 0 ? 'mt-4' : 'mt-7'}`}
              key={item.id}
              initial='hidden'
              animate='visible'
              transition={{
                duration: 0.5,
                delay: delayTime,
              }}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: -50 },
              }}
              // to validate in jest
              data-testid='work-experience-card'
            >
              <div className='flex shrink-0 items-center justify-between '>
                <h3 className='m-0 p-0 text-[20px] font-medium uppercase tracking-[.07em] text-theme-primary dark:text-theme-dark-secondary'>
                  {item.title}
                </h3>
                <p className='m-0 whitespace-nowrap rounded-full bg-[#D7FFE0] p-0 px-5 py-1.5 text-[12px] font-medium text-[#01AE13] opacity-100 dark:border-[1px] dark:border-theme-dark-primary dark:bg-transparent dark:text-theme-dark-secondary'>
                  {item.type}
                </p>
              </div>

              <div className='mt-3 flex flex-col flex-wrap sm:flex-row sm:items-center'>
                <div className='flex sm:items-center '>
                  <div className='flex justify-start sm:items-center'>
                    <svg
                      width='16'
                      height='12'
                      viewBox='0 0 16 12'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                      className='mt-[3.5px] sm:mt-0'
                    >
                      <path
                        d='M3.33331 1.5V10.5H7.33331V8.75H8.66665V10.5H12.6666V1.5H3.33331ZM4.66665 2.5H5.99998V3.5H4.66665V2.5ZM7.33331 2.5H8.66665V3.5H7.33331V2.5ZM9.99998 2.5H11.3333V3.5H9.99998V2.5ZM4.66665 4.5H5.99998V5.5H4.66665V4.5ZM7.33331 4.5H8.66665V5.5H7.33331V4.5ZM9.99998 4.5H11.3333V5.5H9.99998V4.5ZM4.66665 6.5H5.99998V7.5H4.66665V6.5ZM7.33331 6.5H8.66665V7.5H7.33331V6.5ZM9.99998 6.5H11.3333V7.5H9.99998V6.5ZM4.66665 8.5H5.99998V9.5H4.66665V8.5ZM9.99998 8.5H11.3333V9.5H9.99998V8.5Z'
                        fill='#A7A7A7'
                      />
                    </svg>
                    <span className='ms-1 text-sm text-theme-dark-primary '>
                      {item.organizationName}
                    </span>
                  </div>

                  <address className='ms-[25px] flex justify-start not-italic max-[376px]:ms-auto sm:items-center'>
                    <svg
                      width='16'
                      height='16'
                      viewBox='0 0 16 16'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                      className='sm-mt-0 mt-[3px]'
                    >
                      <path
                        d='M8 6.75C7.50555 6.75 7.0222 6.64003 6.61108 6.43401C6.19995 6.22798 5.87952 5.93514 5.6903 5.59253C5.50108 5.24992 5.45157 4.87292 5.54804 4.50921C5.6445 4.14549 5.8826 3.8114 6.23223 3.54918C6.58187 3.28695 7.02732 3.10838 7.51228 3.03603C7.99723 2.96368 8.4999 3.00081 8.95671 3.14273C9.41353 3.28464 9.80397 3.52496 10.0787 3.83331C10.3534 4.14165 10.5 4.50416 10.5 4.875C10.4992 5.3721 10.2356 5.84867 9.76689 6.20017C9.29822 6.55167 8.6628 6.74941 8 6.75ZM8 3.75C7.70333 3.75 7.41332 3.81598 7.16665 3.9396C6.91997 4.06321 6.72771 4.23892 6.61418 4.44448C6.50065 4.65005 6.47095 4.87625 6.52882 5.09448C6.5867 5.31271 6.72956 5.51316 6.93934 5.6705C7.14912 5.82783 7.41639 5.93498 7.70737 5.97838C7.99834 6.02179 8.29994 5.99951 8.57403 5.91437C8.84812 5.82922 9.08238 5.68502 9.24721 5.50002C9.41203 5.31501 9.5 5.09751 9.5 4.875C9.4996 4.57672 9.34144 4.29075 9.06022 4.07983C8.779 3.86892 8.3977 3.7503 8 3.75Z'
                        fill='#A7A7A7'
                      />
                      <path
                        d='M8.00001 11.25L3.78201 7.51912C3.7234 7.4631 3.66539 7.40673 3.60801 7.35C2.8875 6.63817 2.49826 5.76871 2.50001 4.875C2.50001 3.78098 3.07947 2.73177 4.11092 1.95818C5.14237 1.1846 6.54132 0.75 8.00001 0.75C9.4587 0.75 10.8576 1.1846 11.8891 1.95818C12.9205 2.73177 13.5 3.78098 13.5 4.875C13.5018 5.7683 13.1127 6.63737 12.3925 7.34888L12.392 7.35C12.392 7.35 12.242 7.49775 12.2195 7.51763L8.00001 11.25ZM4.40601 6.89813C4.40701 6.89813 4.52301 7.01362 4.54951 7.03837L8.00001 10.0905L11.455 7.03425C11.477 7.01362 11.594 6.89738 11.5945 6.897C12.1831 6.31542 12.5012 5.60514 12.5 4.875C12.5 3.97989 12.0259 3.12145 11.182 2.48851C10.3381 1.85558 9.19348 1.5 8.00001 1.5C6.80653 1.5 5.66194 1.85558 4.81803 2.48851C3.97411 3.12145 3.50001 3.97989 3.50001 4.875C3.49896 5.60559 3.81739 6.31628 4.40651 6.89813H4.40601Z'
                        fill='#A7A7A7'
                      />
                    </svg>

                    <span className='ms-1  whitespace-nowrap text-sm text-theme-dark-primary'>
                      {item.location}
                    </span>
                  </address>
                </div>

                <div className='mt-2 flex items-center justify-start  sm:ml-auto sm:mt-0'>
                  <svg
                    width='16'
                    height='12'
                    viewBox='0 0 16 12'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <g clipPath='url(#clip0_22_143)'>
                      <path
                        d='M5.33329 6.5C5.15648 6.5 4.98691 6.44732 4.86189 6.35355C4.73686 6.25979 4.66663 6.13261 4.66663 6C4.66663 5.86739 4.73686 5.74021 4.86189 5.64645C4.98691 5.55268 5.15648 5.5 5.33329 5.5C5.5101 5.5 5.67967 5.55268 5.8047 5.64645C5.92972 5.74021 5.99996 5.86739 5.99996 6C5.99996 6.13261 5.92972 6.25979 5.8047 6.35355C5.67967 6.44732 5.5101 6.5 5.33329 6.5ZM5.33329 8.5C5.15648 8.5 4.98691 8.44732 4.86189 8.35355C4.73686 8.25979 4.66663 8.13261 4.66663 8C4.66663 7.86739 4.73686 7.74021 4.86189 7.64645C4.98691 7.55268 5.15648 7.5 5.33329 7.5C5.5101 7.5 5.67967 7.55268 5.8047 7.64645C5.92972 7.74021 5.99996 7.86739 5.99996 8C5.99996 8.13261 5.92972 8.25979 5.8047 8.35355C5.67967 8.44732 5.5101 8.5 5.33329 8.5ZM7.33329 8C7.33329 8.13261 7.40353 8.25979 7.52855 8.35355C7.65358 8.44732 7.82315 8.5 7.99996 8.5C8.17677 8.5 8.34634 8.44732 8.47136 8.35355C8.59639 8.25979 8.66663 8.13261 8.66663 8C8.66663 7.86739 8.59639 7.74021 8.47136 7.64645C8.34634 7.55268 8.17677 7.5 7.99996 7.5C7.82315 7.5 7.65358 7.55268 7.52855 7.64645C7.40353 7.74021 7.33329 7.86739 7.33329 8ZM10.6666 8.5C10.4898 8.5 10.3202 8.44732 10.1952 8.35355C10.0702 8.25979 9.99996 8.13261 9.99996 8C9.99996 7.86739 10.0702 7.74021 10.1952 7.64645C10.3202 7.55268 10.4898 7.5 10.6666 7.5C10.8434 7.5 11.013 7.55268 11.138 7.64645C11.2631 7.74021 11.3333 7.86739 11.3333 8C11.3333 8.13261 11.2631 8.25979 11.138 8.35355C11.013 8.44732 10.8434 8.5 10.6666 8.5ZM7.33329 6C7.33329 6.13261 7.40353 6.25979 7.52855 6.35355C7.65358 6.44732 7.82315 6.5 7.99996 6.5C8.17677 6.5 8.34634 6.44732 8.47136 6.35355C8.59639 6.25979 8.66663 6.13261 8.66663 6C8.66663 5.86739 8.59639 5.74021 8.47136 5.64645C8.34634 5.55268 8.17677 5.5 7.99996 5.5C7.82315 5.5 7.65358 5.55268 7.52855 5.64645C7.40353 5.74021 7.33329 5.86739 7.33329 6ZM10.6666 6.5C10.4898 6.5 10.3202 6.44732 10.1952 6.35355C10.0702 6.25979 9.99996 6.13261 9.99996 6C9.99996 5.86739 10.0702 5.74021 10.1952 5.64645C10.3202 5.55268 10.4898 5.5 10.6666 5.5C10.8434 5.5 11.013 5.55268 11.138 5.64645C11.2631 5.74021 11.3333 5.86739 11.3333 6C11.3333 6.13261 11.2631 6.25979 11.138 6.35355C11.013 6.44732 10.8434 6.5 10.6666 6.5ZM5.33329 3.5C5.15648 3.5 4.98691 3.55268 4.86189 3.64645C4.73686 3.74021 4.66663 3.86739 4.66663 4C4.66663 4.13261 4.73686 4.25979 4.86189 4.35355C4.98691 4.44732 5.15648 4.5 5.33329 4.5H10.6666C10.8434 4.5 11.013 4.44732 11.138 4.35355C11.2631 4.25979 11.3333 4.13261 11.3333 4C11.3333 3.86739 11.2631 3.74021 11.138 3.64645C11.013 3.55268 10.8434 3.5 10.6666 3.5H5.33329Z'
                        fill='#A7A7A7'
                      />
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M4 1.5C3.46957 1.5 2.96086 1.65804 2.58579 1.93934C2.21071 2.22064 2 2.60218 2 3V9C2 9.39782 2.21071 9.77936 2.58579 10.0607C2.96086 10.342 3.46957 10.5 4 10.5H12C12.5304 10.5 13.0391 10.342 13.4142 10.0607C13.7893 9.77936 14 9.39782 14 9V3C14 2.60218 13.7893 2.22064 13.4142 1.93934C13.0391 1.65804 12.5304 1.5 12 1.5H4ZM12 2.5H4C3.82319 2.5 3.65362 2.55268 3.5286 2.64645C3.40357 2.74021 3.33333 2.86739 3.33333 3V9C3.33333 9.13261 3.40357 9.25979 3.5286 9.35355C3.65362 9.44732 3.82319 9.5 4 9.5H12C12.1768 9.5 12.3464 9.44732 12.4714 9.35355C12.5964 9.25979 12.6667 9.13261 12.6667 9V3C12.6667 2.86739 12.5964 2.74021 12.4714 2.64645C12.3464 2.55268 12.1768 2.5 12 2.5Z'
                        fill='#A7A7A7'
                      />
                    </g>
                    <defs>
                      <clipPath id='clip0_22_143'>
                        <rect width='16' height='12' fill='white' />
                      </clipPath>
                    </defs>
                  </svg>
                  <span className='ms-1 text-sm text-theme-dark-primary '>
                    {item.workDuration}
                  </span>
                </div>
              </div>

              <div className='mt-[20px] block h-[0.5px] bg-[#EBEAED] opacity-80 duration-200 group-hover:bg-theme-dark-bg group-hover:opacity-35 dark:bg-theme-dark-secondary dark:opacity-50 dark:group-hover:bg-theme-btn' />
            </motion.div>
          );
        })}
      </div>

      <div className='title-top-gap group'>
        <h1 className='title-txt'>Education</h1>

        <div className='mt-4'>
          <div className='flex shrink-0 items-center justify-between '>
            <h3 className='m-0 p-0 text-[20px] font-medium uppercase tracking-[.07em] text-theme-primary dark:text-theme-dark-secondary'>
              Bachelor in Computer Science and Engineering
            </h3>
            <p className='m-0 ms-6 whitespace-nowrap rounded-full bg-[#D7FFE0] p-0 px-5 py-1.5 text-[12px] font-medium text-[#01AE13] sm:ms-0 sm:px-5  dark:border-[1px] dark:border-theme-dark-primary dark:bg-transparent dark:text-theme-dark-secondary'>
              Full Time
            </p>
          </div>

          <div className='mt-3 flex flex-col flex-wrap sm:flex-row sm:items-center'>
            <div className='flex sm:items-center '>
              <div className='flex justify-start sm:items-center'>
                <svg
                  width='16'
                  height='16'
                  viewBox='0 0 16 16'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  className='mt-[3.5px] sm:mt-[3px]'
                >
                  <path
                    d='M3.33331 1.5V10.5H7.33331V8.75H8.66665V10.5H12.6666V1.5H3.33331ZM4.66665 2.5H5.99998V3.5H4.66665V2.5ZM7.33331 2.5H8.66665V3.5H7.33331V2.5ZM9.99998 2.5H11.3333V3.5H9.99998V2.5ZM4.66665 4.5H5.99998V5.5H4.66665V4.5ZM7.33331 4.5H8.66665V5.5H7.33331V4.5ZM9.99998 4.5H11.3333V5.5H9.99998V4.5ZM4.66665 6.5H5.99998V7.5H4.66665V6.5ZM7.33331 6.5H8.66665V7.5H7.33331V6.5ZM9.99998 6.5H11.3333V7.5H9.99998V6.5ZM4.66665 8.5H5.99998V9.5H4.66665V8.5ZM9.99998 8.5H11.3333V9.5H9.99998V8.5Z'
                    fill='#A7A7A7'
                  />
                </svg>
                <span className='ms-1 text-sm text-theme-dark-primary'>
                  Prime University
                </span>
              </div>

              <address className='ms-[25px] flex justify-start not-italic max-[376px]:ms-auto sm:items-center'>
                <svg
                  width='16'
                  height='12'
                  viewBox='0 0 16 12'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  className='sm-mt-0 mt-[3.5px]'
                >
                  <path
                    d='M8 6.75C7.50555 6.75 7.0222 6.64003 6.61108 6.43401C6.19995 6.22798 5.87952 5.93514 5.6903 5.59253C5.50108 5.24992 5.45157 4.87292 5.54804 4.50921C5.6445 4.14549 5.8826 3.8114 6.23223 3.54918C6.58187 3.28695 7.02732 3.10838 7.51228 3.03603C7.99723 2.96368 8.4999 3.00081 8.95671 3.14273C9.41353 3.28464 9.80397 3.52496 10.0787 3.83331C10.3534 4.14165 10.5 4.50416 10.5 4.875C10.4992 5.3721 10.2356 5.84867 9.76689 6.20017C9.29822 6.55167 8.6628 6.74941 8 6.75ZM8 3.75C7.70333 3.75 7.41332 3.81598 7.16665 3.9396C6.91997 4.06321 6.72771 4.23892 6.61418 4.44448C6.50065 4.65005 6.47095 4.87625 6.52882 5.09448C6.5867 5.31271 6.72956 5.51316 6.93934 5.6705C7.14912 5.82783 7.41639 5.93498 7.70737 5.97838C7.99834 6.02179 8.29994 5.99951 8.57403 5.91437C8.84812 5.82922 9.08238 5.68502 9.24721 5.50002C9.41203 5.31501 9.5 5.09751 9.5 4.875C9.4996 4.57672 9.34144 4.29075 9.06022 4.07983C8.779 3.86892 8.3977 3.7503 8 3.75Z'
                    fill='#A7A7A7'
                  />
                  <path
                    d='M8.00001 11.25L3.78201 7.51912C3.7234 7.4631 3.66539 7.40673 3.60801 7.35C2.8875 6.63817 2.49826 5.76871 2.50001 4.875C2.50001 3.78098 3.07947 2.73177 4.11092 1.95818C5.14237 1.1846 6.54132 0.75 8.00001 0.75C9.4587 0.75 10.8576 1.1846 11.8891 1.95818C12.9205 2.73177 13.5 3.78098 13.5 4.875C13.5018 5.7683 13.1127 6.63737 12.3925 7.34888L12.392 7.35C12.392 7.35 12.242 7.49775 12.2195 7.51763L8.00001 11.25ZM4.40601 6.89813C4.40701 6.89813 4.52301 7.01362 4.54951 7.03837L8.00001 10.0905L11.455 7.03425C11.477 7.01362 11.594 6.89738 11.5945 6.897C12.1831 6.31542 12.5012 5.60514 12.5 4.875C12.5 3.97989 12.0259 3.12145 11.182 2.48851C10.3381 1.85558 9.19348 1.5 8.00001 1.5C6.80653 1.5 5.66194 1.85558 4.81803 2.48851C3.97411 3.12145 3.50001 3.97989 3.50001 4.875C3.49896 5.60559 3.81739 6.31628 4.40651 6.89813H4.40601Z'
                    fill='#A7A7A7'
                  />
                </svg>

                <span className='ms-1 whitespace-nowrap text-sm text-theme-dark-primary'>
                  Dhaka, Bangladesh
                </span>
              </address>
            </div>

            <div className='mt-2 flex items-center justify-start  sm:ml-auto sm:mt-0'>
              <svg
                width='16'
                height='12'
                viewBox='0 0 16 12'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g clipPath='url(#clip0_22_143)'>
                  <path
                    d='M5.33329 6.5C5.15648 6.5 4.98691 6.44732 4.86189 6.35355C4.73686 6.25979 4.66663 6.13261 4.66663 6C4.66663 5.86739 4.73686 5.74021 4.86189 5.64645C4.98691 5.55268 5.15648 5.5 5.33329 5.5C5.5101 5.5 5.67967 5.55268 5.8047 5.64645C5.92972 5.74021 5.99996 5.86739 5.99996 6C5.99996 6.13261 5.92972 6.25979 5.8047 6.35355C5.67967 6.44732 5.5101 6.5 5.33329 6.5ZM5.33329 8.5C5.15648 8.5 4.98691 8.44732 4.86189 8.35355C4.73686 8.25979 4.66663 8.13261 4.66663 8C4.66663 7.86739 4.73686 7.74021 4.86189 7.64645C4.98691 7.55268 5.15648 7.5 5.33329 7.5C5.5101 7.5 5.67967 7.55268 5.8047 7.64645C5.92972 7.74021 5.99996 7.86739 5.99996 8C5.99996 8.13261 5.92972 8.25979 5.8047 8.35355C5.67967 8.44732 5.5101 8.5 5.33329 8.5ZM7.33329 8C7.33329 8.13261 7.40353 8.25979 7.52855 8.35355C7.65358 8.44732 7.82315 8.5 7.99996 8.5C8.17677 8.5 8.34634 8.44732 8.47136 8.35355C8.59639 8.25979 8.66663 8.13261 8.66663 8C8.66663 7.86739 8.59639 7.74021 8.47136 7.64645C8.34634 7.55268 8.17677 7.5 7.99996 7.5C7.82315 7.5 7.65358 7.55268 7.52855 7.64645C7.40353 7.74021 7.33329 7.86739 7.33329 8ZM10.6666 8.5C10.4898 8.5 10.3202 8.44732 10.1952 8.35355C10.0702 8.25979 9.99996 8.13261 9.99996 8C9.99996 7.86739 10.0702 7.74021 10.1952 7.64645C10.3202 7.55268 10.4898 7.5 10.6666 7.5C10.8434 7.5 11.013 7.55268 11.138 7.64645C11.2631 7.74021 11.3333 7.86739 11.3333 8C11.3333 8.13261 11.2631 8.25979 11.138 8.35355C11.013 8.44732 10.8434 8.5 10.6666 8.5ZM7.33329 6C7.33329 6.13261 7.40353 6.25979 7.52855 6.35355C7.65358 6.44732 7.82315 6.5 7.99996 6.5C8.17677 6.5 8.34634 6.44732 8.47136 6.35355C8.59639 6.25979 8.66663 6.13261 8.66663 6C8.66663 5.86739 8.59639 5.74021 8.47136 5.64645C8.34634 5.55268 8.17677 5.5 7.99996 5.5C7.82315 5.5 7.65358 5.55268 7.52855 5.64645C7.40353 5.74021 7.33329 5.86739 7.33329 6ZM10.6666 6.5C10.4898 6.5 10.3202 6.44732 10.1952 6.35355C10.0702 6.25979 9.99996 6.13261 9.99996 6C9.99996 5.86739 10.0702 5.74021 10.1952 5.64645C10.3202 5.55268 10.4898 5.5 10.6666 5.5C10.8434 5.5 11.013 5.55268 11.138 5.64645C11.2631 5.74021 11.3333 5.86739 11.3333 6C11.3333 6.13261 11.2631 6.25979 11.138 6.35355C11.013 6.44732 10.8434 6.5 10.6666 6.5ZM5.33329 3.5C5.15648 3.5 4.98691 3.55268 4.86189 3.64645C4.73686 3.74021 4.66663 3.86739 4.66663 4C4.66663 4.13261 4.73686 4.25979 4.86189 4.35355C4.98691 4.44732 5.15648 4.5 5.33329 4.5H10.6666C10.8434 4.5 11.013 4.44732 11.138 4.35355C11.2631 4.25979 11.3333 4.13261 11.3333 4C11.3333 3.86739 11.2631 3.74021 11.138 3.64645C11.013 3.55268 10.8434 3.5 10.6666 3.5H5.33329Z'
                    fill='#A7A7A7'
                  />
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M4 1.5C3.46957 1.5 2.96086 1.65804 2.58579 1.93934C2.21071 2.22064 2 2.60218 2 3V9C2 9.39782 2.21071 9.77936 2.58579 10.0607C2.96086 10.342 3.46957 10.5 4 10.5H12C12.5304 10.5 13.0391 10.342 13.4142 10.0607C13.7893 9.77936 14 9.39782 14 9V3C14 2.60218 13.7893 2.22064 13.4142 1.93934C13.0391 1.65804 12.5304 1.5 12 1.5H4ZM12 2.5H4C3.82319 2.5 3.65362 2.55268 3.5286 2.64645C3.40357 2.74021 3.33333 2.86739 3.33333 3V9C3.33333 9.13261 3.40357 9.25979 3.5286 9.35355C3.65362 9.44732 3.82319 9.5 4 9.5H12C12.1768 9.5 12.3464 9.44732 12.4714 9.35355C12.5964 9.25979 12.6667 9.13261 12.6667 9V3C12.6667 2.86739 12.5964 2.74021 12.4714 2.64645C12.3464 2.55268 12.1768 2.5 12 2.5Z'
                    fill='#A7A7A7'
                  />
                </g>
                <defs>
                  <clipPath id='clip0_22_143'>
                    <rect width='16' height='12' fill='white' />
                  </clipPath>
                </defs>
              </svg>
              <span className='ms-1 text-sm text-theme-dark-primary '>
                Feb 2016 - Jan 2020
              </span>
            </div>
          </div>

          <div className='mt-[20px] block h-[0.5px] bg-[#EBEAED] opacity-80 duration-200 group-hover:bg-theme-dark-bg group-hover:opacity-35 dark:bg-theme-dark-secondary dark:opacity-50 dark:group-hover:bg-theme-btn' />
        </div>
      </div>

      <div className='title-top-gap' id='my-tech-stack'>
        <h1 className='title-txt'> My Tech Stacks</h1>

        <div className='mt-[20px] grid grid-cols-1 gap-8 lg:mt-[30px] lg:grid-cols-2'>
          {techStacks.map((item: TechStack, index: number) => {
            // define delay time for each node
            const delayTime = Number('0.' + index * 0.22);
            return (
              <motion.div
                key={item.id}
                className={` group rounded-xl  border-[0.5px] pb-7 pe-[20px] ps-[40px] shadow-sm duration-200 hover:border-theme-btn sm:ps-[80px] md:pe-[20px] lg:ps-[60px] xl:px-[50px]`}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: delayTime,
                }}
                variants={{
                  visible: { opacity: 1, scale: 1 },
                  hidden: { opacity: 0, scale: 0.85 },
                }}
                data-testid='my-tech-stack'
              >
                <h3 className='my-4 mt-6 text-[20px] font-medium uppercase tracking-[.07em] text-theme-primary dark:text-theme-dark-secondary'>
                  {item.title}
                </h3>

                {/* render stack lists */}
                <div className='grid grid-cols-2 gap-4 max-[460px]:grid-cols-1 sm:gap-x-14 md:grid-cols-2'>
                  {item.stacks.map((stack: TechStackItem) => (
                    <div className={`group flex`} key={stack.id}>
                      <svg
                        strokeWidth={0}
                        viewBox='0 0 16 16'
                        className='mt-[5px] shrink-0'
                        height='1em'
                        width='1em'
                      >
                        <path
                          d='M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z'
                          fill='#666666'
                          className='duration-500 group-hover:fill-theme-btn dark:fill-theme-btn dark:group-hover:fill-white'
                        />
                      </svg>
                      <div className='relative ms-3 pe-2'>
                        {stack?.url ? (
                          <Link
                            href={stack?.url}
                            target={'_blank'}
                            className={`relative m-0 block cursor-pointer break-words p-0 text-xl font-semibold text-theme-secondary underline duration-200 xl:whitespace-nowrap xl:break-normal dark:text-theme-dark-secondary`}
                            data-umami-event={`button-${stack.name}`}
                          >
                            {stack.name}
                          </Link>
                        ) : (
                          <h1
                            className={`m-0 block cursor-auto p-0 text-xl font-semibold text-theme-secondary duration-200 dark:text-theme-dark-secondary`}
                          >
                            {stack.name}
                          </h1>
                        )}

                        <small className='m-0 p-0 text-theme-primary dark:text-theme-dark-secondary'>
                          {stack.expertise}
                        </small>
                        {stack.isFocusedAble ? (
                          <span
                            className={`absolute right-[0%] top-1 flex items-center justify-center`}
                          >
                            <span className='absolute inline-flex h-2 w-2 animate-ping rounded-full bg-sky-400 opacity-75'></span>
                            <span className='relative inline-flex h-1.5 w-1.5 rounded-full bg-pink-400'></span>
                          </span>
                        ) : null}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;
