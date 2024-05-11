'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { FC, useState } from 'react';

import {
  ProjectSchema,
  TechStack,
  TechStackItem,
  WorkExperience,
  projectsData,
  techStacks,
  workExperience,
} from './constant';

import { motion } from 'framer-motion';

interface PageProps {}

const Page: FC<PageProps> = () => {
  // define our local state here
  const [activeBtn, setActiveBtn] = useState<string>('0');
  const [data, setData] = useState<ProjectSchema[]>(projectsData || []);

  // filter item by it's type
  const filteredItem = (type: string, techType: string) => {
    // update tab-type
    setActiveBtn(type);

    if (techType === 'all') {
      return setData(projectsData);
    }

    // filter data
    const res = projectsData.filter(
      (i) => i.type.toLocaleLowerCase() === techType.toLocaleLowerCase()
    );

    // update root state
    setData(res);
  };

  return (
    <>
      <section>
        <div className='container my-[30px] duration-200 md:my-[50px] '>
          <div className='item-center relative flex justify-center'>
            <div className='text-center'>
              <h5 className='text-md m-0 p-0 font-bold text-theme-dark-bg dark:text-white'>
                {`Hello 👋, I'am`}
              </h5>
              <h1 className='m-0 p-0 py-3 text-4xl font-bold tracking-[.06em] text-theme-secondary lg:text-5xl dark:text-white'>
                Jon Doe
              </h1>
              <h4 className='text-md m-0 p-0 font-medium dark:text-theme-white'>
                Business development
              </h4>
              <div className='item-center my-8  flex flex-col justify-center sm:flex-row'>
                <button className='mb-7 whitespace-nowrap rounded-md border-[1px] px-8 py-3 duration-200 hover:bg-theme-btn hover:text-white sm:mb-0 sm:me-5 dark:border-theme-btn dark:text-theme-btn dark:hover:bg-white dark:hover:text-theme-dark-bg'>
                  Download Resume
                </button>

                <button className=' medium rounded-md border-[1px] bg-theme-btn px-5 py-3 text-white duration-200 hover:text-white dark:border-0 dark:hover:bg-white dark:hover:text-theme-dark-bg'>
                  {`Let's talk`}
                </button>
              </div>
              <div className='item-center flex shrink-[0] justify-center'>
                <div className='border-gradient overflow-hidden rounded-full'>
                  <Image
                    alt='user-avatar'
                    src={'https://i.stack.imgur.com/I4fiW.jpg?s=256&g=1'}
                    width={350}
                    height={350}
                    className='object-cover'
                    priority
                  />
                </div>
              </div>
            </div>
            {/* social icon goes here */}
            <div className='absolute bottom-[35%] left-0 hidden flex-col items-center justify-between sm:flex'>
              <div className='mb-3 h-[35px] w-[1px] bg-theme-primary duration-200  dark:bg-theme-btn '></div>
              <Link
                target='_blank'
                href='https://github.com/AlaminPu1007'
                className='group cursor-pointer'
              >
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  className=''
                >
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M12 0C5.37 0 0 5.50583 0 12.3035C0 17.7478 3.435 22.3463 8.205 23.9765C8.805 24.0842 9.03 23.715 9.03 23.3921C9.03 23.0999 9.015 22.131 9.015 21.1005C6 21.6696 5.22 20.347 4.98 19.6549C4.845 19.3012 4.26 18.2092 3.75 17.917C3.33 17.6863 2.73 17.1173 3.735 17.1019C4.68 17.0865 5.355 17.9939 5.58 18.363C6.66 20.2239 8.385 19.701 9.075 19.3781C9.18 18.5783 9.495 18.04 9.84 17.7325C7.17 17.4249 4.38 16.3637 4.38 11.6576C4.38 10.3196 4.845 9.21227 5.61 8.35102C5.49 8.04343 5.07 6.78232 5.73 5.09058C5.73 5.09058 6.735 4.76762 9.03 6.3517C9.99 6.07487 11.01 5.93645 12.03 5.93645C13.05 5.93645 14.07 6.07487 15.03 6.3517C17.325 4.75224 18.33 5.09058 18.33 5.09058C18.99 6.78232 18.57 8.04343 18.45 8.35102C19.215 9.21227 19.68 10.3042 19.68 11.6576C19.68 16.3791 16.875 17.4249 14.205 17.7325C14.64 18.1169 15.015 18.8552 15.015 20.0086C15.015 21.6542 15 22.9768 15 23.3921C15 23.715 15.225 24.0995 15.825 23.9765C18.2072 23.1519 20.2772 21.5821 21.7437 19.4881C23.2101 17.3942 23.9993 14.8814 24 12.3035C24 5.50583 18.63 0 12 0Z'
                    fill='#666666'
                    className='duration-200 group-hover:fill-theme-btn dark:fill-theme-btn dark:group-hover:fill-white'
                  />
                </svg>
              </Link>

              <Link
                target='_blank'
                href={'https://twitter.com/Alamin66Sit'}
                className='group my-3 cursor-pointer'
              >
                <svg
                  width='25'
                  height='25'
                  viewBox='0 0 25 25'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M12.875 0.875C6.24821 0.875 0.875 6.24821 0.875 12.875C0.875 19.5018 6.24821 24.875 12.875 24.875C19.5018 24.875 24.875 19.5018 24.875 12.875C24.875 6.24821 19.5018 0.875 12.875 0.875ZM18.642 9.92054C18.65 10.0464 18.65 10.1777 18.65 10.3063C18.65 14.2384 15.6554 18.7679 10.183 18.7679C8.49554 18.7679 6.93125 18.2777 5.61339 17.4339C5.85446 17.4607 6.08482 17.4714 6.33125 17.4714C7.72411 17.4714 9.00446 17 10.025 16.2018C8.71786 16.175 7.61964 15.3179 7.24464 14.1393C7.70268 14.2063 8.11518 14.2063 8.58661 14.0857C7.91355 13.949 7.30859 13.5834 6.87451 13.0512C6.44042 12.519 6.20398 11.8529 6.20536 11.1661V11.1286C6.59911 11.3509 7.0625 11.4875 7.54732 11.5062C7.13976 11.2346 6.80551 10.8666 6.57423 10.4349C6.34294 10.0032 6.22176 9.52103 6.22143 9.03125C6.22143 8.47679 6.36607 7.97054 6.62589 7.53125C7.37295 8.4509 8.30517 9.20306 9.36196 9.73884C10.4187 10.2746 11.5764 10.582 12.7598 10.6411C12.3393 8.61875 13.85 6.98214 15.6661 6.98214C16.5232 6.98214 17.2946 7.34107 17.8384 7.91964C18.5107 7.79375 19.1536 7.54196 19.7268 7.20446C19.5045 7.89286 19.0384 8.47411 18.4196 8.84107C19.0196 8.77679 19.5982 8.61071 20.1339 8.37768C19.7295 8.97232 19.2232 9.5 18.642 9.92054V9.92054Z'
                    fill='#666666'
                    className='duration-200 group-hover:fill-theme-btn dark:fill-theme-btn dark:group-hover:fill-white'
                  />
                </svg>
              </Link>
              <Link
                target='_blank'
                href={'https://stackoverflow.com/users/9572927/md-al-amin'}
                className='group mb-2.5 cursor-pointer'
              >
                <svg
                  width='30'
                  height='30'
                  viewBox='0 0 30 30'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M15 25C17.6522 25 20.1957 23.9464 22.0711 22.0711C23.9464 20.1957 25 17.6522 25 15C25 12.3478 23.9464 9.80429 22.0711 7.92893C20.1957 6.05357 17.6522 5 15 5C12.3478 5 9.80429 6.05357 7.92893 7.92893C6.05357 9.80429 5 12.3478 5 15C5 17.6522 6.05357 20.1957 7.92893 22.0711C9.80429 23.9464 12.3478 25 15 25ZM15 27.5C8.09625 27.5 2.5 21.9037 2.5 15C2.5 8.09625 8.09625 2.5 15 2.5C21.9037 2.5 27.5 8.09625 27.5 15C27.5 21.9037 21.9037 27.5 15 27.5Z'
                    fill='#666666'
                    className='duration-200 group-hover:fill-theme-btn dark:fill-theme-btn dark:group-hover:fill-white'
                  />
                  <path
                    d='M18.4325 20.085V16.79H19.4725V21.1787H10.0812V16.79H11.1212V20.085H18.4325Z'
                    fill='#666666'
                    className='duration-200 group-hover:fill-theme-btn dark:fill-theme-btn dark:group-hover:fill-white'
                  />
                  <path
                    d='M12.27 16.4775L17.3788 17.6L17.595 16.52L12.4863 15.3975L12.27 16.4775ZM12.945 13.92L17.6763 16.2363L18.1075 15.2413L13.3788 12.9125L12.9463 13.92H12.945ZM14.2575 11.4775L18.27 14.9863L18.9325 14.1488L14.92 10.6388L14.2575 11.4775ZM16.8513 8.8775L16.0138 9.53125L19.1213 13.935L19.9588 13.2813L16.8513 8.8775ZM12.1625 18.9775H17.3788V17.8838H12.1625V18.9775Z'
                    fill='#666666'
                    className='duration-200 group-hover:fill-theme-btn dark:fill-theme-btn dark:group-hover:fill-white'
                  />
                </svg>
              </Link>

              <Link
                target='_blank'
                href={'https://www.linkedin.com/in/md-alamin66/'}
                className='group cursor-pointer'
              >
                <svg
                  width='25'
                  height='25'
                  viewBox='0 0 25 25'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M12.6 0.599976C5.97251 0.599976 0.600006 5.97248 0.600006 12.6C0.600006 19.2275 5.97251 24.6 12.6 24.6C19.2275 24.6 24.6 19.2275 24.6 12.6C24.6 5.97248 19.2275 0.599976 12.6 0.599976ZM9.66251 17.5737H7.23251V9.75373H9.66251V17.5737ZM8.43251 8.79373C7.66501 8.79373 7.16876 8.24998 7.16876 7.57748C7.16876 6.89123 7.68001 6.36373 8.46376 6.36373C9.24751 6.36373 9.72751 6.89123 9.74251 7.57748C9.74251 8.24998 9.24751 8.79373 8.43251 8.79373ZM18.5375 17.5737H16.1075V13.24C16.1075 12.2312 15.755 11.5462 14.8763 11.5462C14.205 11.5462 13.8063 12.01 13.63 12.4562C13.565 12.615 13.5488 12.84 13.5488 13.0637V17.5725H11.1175V12.2475C11.1175 11.2712 11.0863 10.455 11.0538 9.75248H13.165L13.2763 10.8387H13.325C13.645 10.3287 14.4288 9.57623 15.74 9.57623C17.3388 9.57623 18.5375 10.6475 18.5375 12.95V17.5737V17.5737Z'
                    fill='#666666'
                    className='duration-200 group-hover:fill-theme-btn dark:fill-theme-btn dark:group-hover:fill-white'
                  />
                </svg>
              </Link>

              <div className='mt-3 h-[35px] w-[1px] bg-theme-primary duration-200  dark:bg-theme-btn '></div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='section-top-gap container duration-200'>
          <div id='about-myself'>
            <h1 className='title-txt'>About Me</h1>
            <p className='m-0 mt-3 break-words p-0 text-lg text-theme-primary dark:text-theme-dark-primary'>
              The Generator App is an online tool that helps you to export
              ready-made templates ready to work as your future website. It
              helps you to combine slides, panels and other components and
              export it as a set of static files: HTML/CSS/JS
            </p>
          </div>

          <div className='title-top-gap'>
            <h1 className='title-txt break-words'>{`Work Experience (0+ Years)`}</h1>

            {workExperience?.map((item: WorkExperience, index: number) => {
              // define delay time for each node
              const delayTime = Number('0.' + index + 1 * 2);

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
                <p className='m-0 whitespace-nowrap rounded-full bg-[#D7FFE0] p-0 px-5 py-1.5 text-[12px] font-medium text-[#01AE13]  dark:border-[1px] dark:border-theme-dark-primary dark:bg-transparent dark:text-theme-dark-secondary'>
                  Full Time
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
                    <span className='ms-1 text-sm text-theme-dark-primary'>
                      Suspect University
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
                      United States
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
                    Aug 2016 - Dec 2020
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
      </section>

      <section id='my-personal-projects'>
        <div className='title-top-gap container mb-[50px] duration-200 md:mb-[80px]'>
          <h1 className='title-txt'> Projects</h1>

          <div>
            <ul className='m-0 mt-4 flex flex-wrap items-center justify-between p-0 sm:justify-start'>
              <li>
                <button
                  className={`tab-btn ${activeBtn === '0' ? 'active-btn' : 'dark:border-theme-primary'}`}
                  onClick={() => {
                    filteredItem('0', 'all');
                  }}
                >
                  All
                </button>
              </li>
              <li>
                <button
                  className={`tab-btn ${activeBtn === '1' ? 'active-btn' : 'dark:border-theme-primary'}`}
                  onClick={() => {
                    filteredItem('1', 'frontend');
                  }}
                >
                  Frontend
                </button>
              </li>
              <li>
                <button
                  className={`tab-btn ${activeBtn === '2' ? 'active-btn' : 'dark:border-theme-primary'}`}
                  onClick={() => {
                    filteredItem('2', 'mobile');
                  }}
                >
                  Mobile
                </button>
              </li>
              <li>
                <button
                  className={`tab-btn max-[374px]:mt-3 ${activeBtn === '3' ? 'active-btn' : 'dark:border-theme-primary'}`}
                  onClick={() => {
                    filteredItem('3', 'backend');
                  }}
                >
                  Backend
                </button>
              </li>
            </ul>
            <div className='mt-[40px] grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3'>
              {data.map((item: ProjectSchema, index: number) => {
                // define delay time for each node
                const delayTime = Number('0.' + index * 0.22);

                // avoid this to used in real life application
                // this may cause to performance issue
                // we have need to framer motion each time, so we have to choose this
                const keyId = item.id + Math.floor(Math.random() * 999);

                return (
                  <motion.div
                    key={keyId}
                    className='group relative overflow-hidden rounded-lg border-[0.5px] border-white bg-white  shadow-md hover:shadow-lg dark:border-[transparent] dark:bg-[#19192d] dark:hover:border-[#19192d]'
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: delayTime }}
                    variants={{
                      visible: { opacity: 1, scale: 1 },
                      hidden: { opacity: 0, scale: 0.7 },
                    }}
                  >
                    <div className='relative h-[260px] w-full overflow-hidden rounded-lg'>
                      <Image
                        src={item.imgPath}
                        alt='project-template-photo'
                        fill
                        priority
                        className='rounded-t-lg object-cover duration-500 group-hover:scale-[1.01]'
                      />
                    </div>
                    <div className='px-5 pt-5'>
                      <h2 className='m-0 p-0 text-xl font-medium capitalize lg:text-2xl dark:text-theme-dark-secondary'>
                        {item.name}
                      </h2>
                      <p className='break-words py-3 text-base text-theme-primary dark:text-theme-dark-secondary'>
                        {item.description}
                      </p>

                      <div className='mb-3 flex flex-wrap items-center text-[17px] dark:text-theme-dark-secondary'>
                        <span className='shrink-0 font-semibold'>
                          Tech stacks : &nbsp;
                        </span>
                        {item.technology.map((tech, i: number) => {
                          const isLastItem: boolean =
                            item.technology?.length - 1 !== i;
                          return (
                            <span key={i} className='text-[14px] font-medium'>
                              {tech} {isLastItem ? ', ' : null} &nbsp;
                            </span>
                          );
                        })}
                      </div>
                    </div>
                    <div className='flex items-center justify-between px-5 pb-5 duration-200'>
                      <div className='flex items-center duration-200'>
                        <svg
                          width='20'
                          height='20'
                          viewBox='0 0 20 20'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M11.2867 8.7133C10.6041 8.031 9.67846 7.64771 8.71334 7.64771C7.74821 7.64771 6.82259 8.031 6.14 8.7133L3.56584 11.2866C2.88324 11.9692 2.49976 12.895 2.49976 13.8604C2.49976 14.8257 2.88324 15.7515 3.56584 16.4341C4.24844 17.1167 5.17424 17.5002 6.13959 17.5002C7.10493 17.5002 8.03074 17.1167 8.71334 16.4341L10 15.1475'
                            stroke='black'
                            strokeWidth='1.66667'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            className='dark:stroke-white'
                          />
                          <path
                            d='M8.71332 11.2867C9.39591 11.969 10.3215 12.3523 11.2867 12.3523C12.2518 12.3523 13.1774 11.969 13.86 11.2867L16.4342 8.71334C17.1168 8.03074 17.5002 7.10493 17.5002 6.13959C17.5002 5.17424 17.1168 4.24844 16.4342 3.56584C15.7516 2.88324 14.8257 2.49976 13.8604 2.49976C12.8951 2.49976 11.9693 2.88324 11.2867 3.56584L9.99998 4.8525'
                            stroke='black'
                            strokeWidth='1.66667'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            className='dark:stroke-white'
                          />
                        </svg>
                        <Link
                          href={'/'}
                          className='ms-2 block text-base tracking-[0.019rem] underline duration-200 hover:text-[#0D3C9F] dark:text-white dark:hover:text-theme-btn'
                        >
                          Live Preview
                        </Link>
                      </div>
                      <div className='flex items-center duration-200'>
                        <svg
                          width='20'
                          height='20'
                          viewBox='0 0 20 20'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <g clipPath='url(#clip0_10_90)'>
                            <path
                              fillRule='evenodd'
                              clipRule='evenodd'
                              d='M10 0C4.475 0 0 4.475 0 10C0 14.425 2.8625 18.1625 6.8375 19.4875C7.3375 19.575 7.525 19.275 7.525 19.0125C7.525 18.775 7.5125 17.9875 7.5125 17.15C5 17.6125 4.35 16.5375 4.15 15.975C4.0375 15.6875 3.55 14.8 3.125 14.5625C2.775 14.375 2.275 13.9125 3.1125 13.9C3.9 13.8875 4.4625 14.625 4.65 14.925C5.55 16.4375 6.9875 16.0125 7.5625 15.75C7.65 15.1 7.9125 14.6625 8.2 14.4125C5.975 14.1625 3.65 13.3 3.65 9.475C3.65 8.3875 4.0375 7.4875 4.675 6.7875C4.575 6.5375 4.225 5.5125 4.775 4.1375C4.775 4.1375 5.6125 3.875 7.525 5.1625C8.325 4.9375 9.175 4.825 10.025 4.825C10.875 4.825 11.725 4.9375 12.525 5.1625C14.4375 3.8625 15.275 4.1375 15.275 4.1375C15.825 5.5125 15.475 6.5375 15.375 6.7875C16.0125 7.4875 16.4 8.375 16.4 9.475C16.4 13.3125 14.0625 14.1625 11.8375 14.4125C12.2 14.725 12.5125 15.325 12.5125 16.2625C12.5125 17.6 12.5 18.675 12.5 19.0125C12.5 19.275 12.6875 19.5875 13.1875 19.4875C15.1726 18.8173 16.8976 17.5414 18.1197 15.8395C19.3418 14.1375 19.9994 12.0952 20 10C20 4.475 15.525 0 10 0Z'
                              fill='black'
                              className='dark:fill-white dark:stroke-white'
                            />
                          </g>
                          <defs>
                            <clipPath id='clip0_10_90'>
                              <rect width='20' height='20' fill='white' />
                            </clipPath>
                          </defs>
                        </svg>

                        <Link
                          href={'/'}
                          className='ms-2 block text-base tracking-[0.019rem] underline duration-200 hover:text-[#0D3C9F] dark:text-white dark:hover:text-theme-btn'
                        >
                          View Code
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
