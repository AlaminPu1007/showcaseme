'use client';

import { ProjectSchema, projectsData } from '@/app/constant';
import { useState } from 'react';
// import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const ProjectComponent = () => {
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
                filteredItem('1', 'web');
              }}
            >
              Web
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
        <div className='mt-[40px] grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3'>
          {data.map((item: ProjectSchema) => {
            return (
              <div
                data-testid='project-data-id'
                key={item.id}
                className='group dark:hover:border-theme-btn/20 relative flex flex-col overflow-hidden rounded-xl border border-gray-100 bg-white shadow-md transition-all duration-500 hover:-translate-y-1 hover:shadow-xl dark:border-gray-800 dark:bg-[#19192d]'
              >
                {/*<motion.div
                key={item.id}
                className='group dark:hover:border-theme-btn/20 relative flex flex-col overflow-hidden rounded-xl border border-gray-100 bg-white shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-xl dark:border-gray-800 dark:bg-[#19192d]'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{
                  duration: 0.6,
                  ease: 'easeOut',
                  delay: index * 0.08,
                }}
                data-testid='project-data-id'

              >*/}
                <div className='relative h-[260px] w-full overflow-hidden'>
                  <Image
                    src={item.imgPath}
                    alt='project-template-photo'
                    fill
                    priority
                    sizes='100%'
                    className='object-cover object-top transition-transform duration-700 group-hover:scale-103'
                    placeholder='blur'
                    blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mN89R8AAtkB6zy+wn8AAAAASUVORK5CYII='
                  />
                  <div className='absolute inset-0 bg-black/0 transition-opacity duration-500 group-hover:bg-black/10' />
                  {item.rootStack && (
                    <span className='text-md bg-theme-btn absolute top-[11%] left-[-8%] block w-[40%] rotate-[-45deg] text-center text-white'>
                      {item.rootStack}
                    </span>
                  )}
                </div>
                <div className='flex flex-grow flex-col'>
                  <div className='px-5 pt-5'>
                    <h2 className='m-0 p-0 text-xl font-medium tracking-wide text-[#42446E] uppercase lg:text-2xl dark:text-[#CCCCCC]'>
                      {item.name}
                    </h2>
                    <p
                      title={item.description}
                      className='my-3 line-clamp-4 overflow-hidden text-base leading-relaxed break-words text-[#666666] dark:text-[#A7A7A7]'
                    >
                      {item.description}
                    </p>

                    <div className='mb-4 flex flex-wrap items-center gap-1.5'>
                      <span className='mr-1 shrink-0 text-sm font-semibold text-[#666666] dark:text-[#A7A7A7]'>
                        Tech:
                      </span>
                      {item.technology.map((tech, i: number) => (
                        <span
                          key={i}
                          className='rounded-md bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300'
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className='mt-auto flex items-center justify-between border-t border-gray-100 px-5 py-4 dark:border-gray-800'>
                    <div className='group/link flex items-center'>
                      <svg
                        width='20'
                        height='20'
                        viewBox='0 0 20 20'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                        className='transition-transform duration-300 group-hover/link:translate-x-0.5'
                      >
                        <path
                          d='M11.2867 8.7133C10.6041 8.031 9.67846 7.64771 8.71334 7.64771C7.74821 7.64771 6.82259 8.031 6.14 8.7133L3.56584 11.2866C2.88324 11.9692 2.49976 12.895 2.49976 13.8604C2.49976 14.8257 2.88324 15.7515 3.56584 16.4341C4.24844 17.1167 5.17424 17.5002 6.13959 17.5002C7.10493 17.5002 8.03074 17.1167 8.71334 16.4341L10 15.1475'
                          stroke='#666666'
                          strokeWidth='1.66667'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          className='group-hover/link:stroke-theme-btn transition-colors duration-300 dark:stroke-[#CCCCCC]'
                        />
                        <path
                          d='M8.71332 11.2867C9.39591 11.969 10.3215 12.3523 11.2867 12.3523C12.2518 12.3523 13.1774 11.969 13.86 11.2867L16.4342 8.71334C17.1168 8.03074 17.5002 7.10493 17.5002 6.13959C17.5002 5.17424 17.1168 4.24844 16.4342 3.56584C15.7516 2.88324 14.8257 2.49976 13.8604 2.49976C12.8951 2.49976 11.9693 2.88324 11.2867 3.56584L9.99998 4.8525'
                          stroke='#666666'
                          strokeWidth='1.66667'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          className='group-hover/link:stroke-theme-btn transition-colors duration-300 dark:stroke-[#CCCCCC]'
                        />
                      </svg>
                      {item.liveUrl ? (
                        <Link
                          href={item.liveUrl}
                          className='hover:text-theme-btn dark:hover:text-theme-btn ms-2 text-sm font-medium text-[#666666] underline-offset-2 transition-all duration-300 hover:underline dark:text-[#CCCCCC]'
                          target='_blank'
                          data-umami-event={`projects-${item.name} Live Preview`}
                        >
                          Live Preview
                        </Link>
                      ) : (
                        <span className='ms-2 cursor-not-allowed text-sm font-medium text-gray-400 underline-offset-2 dark:text-gray-600'>
                          Live Preview
                        </span>
                      )}
                    </div>
                    <div className='group/link flex items-center'>
                      <svg
                        width='20'
                        height='20'
                        viewBox='0 0 20 20'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                        className='transition-transform duration-300 group-hover/link:translate-x-0.5'
                      >
                        <g clipPath='url(#clip0_10_90)'>
                          <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M10 0C4.475 0 0 4.475 0 10C0 14.425 2.8625 18.1625 6.8375 19.4875C7.3375 19.575 7.525 19.275 7.525 19.0125C7.525 18.775 7.5125 17.9875 7.5125 17.15C5 17.6125 4.35 16.5375 4.15 15.975C4.0375 15.6875 3.55 14.8 3.125 14.5625C2.775 14.375 2.275 13.9125 3.1125 13.9C3.9 13.8875 4.4625 14.625 4.65 14.925C5.55 16.4375 6.9875 16.0125 7.5625 15.75C7.65 15.1 7.9125 14.6625 8.2 14.4125C5.975 14.1625 3.65 13.3 3.65 9.475C3.65 8.3875 4.0375 7.4875 4.675 6.7875C4.575 6.5375 4.225 5.5125 4.775 4.1375C4.775 4.1375 5.6125 3.875 7.525 5.1625C8.325 4.9375 9.175 4.825 10.025 4.825C10.875 4.825 11.725 4.9375 12.525 5.1625C14.4375 3.8625 15.275 4.1375 15.275 4.1375C15.825 5.5125 15.475 6.5375 15.375 6.7875C16.0125 7.4875 16.4 8.375 16.4 9.475C16.4 13.3125 14.0625 14.1625 11.8375 14.4125C12.2 14.725 12.5125 15.325 12.5125 16.2625C12.5125 17.6 12.5 18.675 12.5 19.0125C12.5 19.275 12.6875 19.5875 13.1875 19.4875C15.1726 18.8173 16.8976 17.5414 18.1197 15.8395C19.3418 14.1375 19.9994 12.0952 20 10C20 4.475 15.525 0 10 0Z'
                            fill='#666666'
                            className='group-hover/link:fill-theme-btn transition-colors duration-300 dark:fill-[#CCCCCC]'
                          />
                        </g>
                        <defs>
                          <clipPath id='clip0_10_90'>
                            <rect width='20' height='20' fill='white' />
                          </clipPath>
                        </defs>
                      </svg>
                      {item.sourceCodeUrl ? (
                        <Link
                          href={item.sourceCodeUrl}
                          className='hover:text-theme-btn dark:hover:text-theme-btn ms-2 text-sm font-medium text-[#666666] underline-offset-2 transition-all duration-300 hover:underline dark:text-[#CCCCCC]'
                          target='_blank'
                          data-umami-event={`projects-${item.name} View Code`}
                        >
                          View Code
                        </Link>
                      ) : (
                        <span className='ms-2 cursor-not-allowed text-sm font-medium text-gray-400 underline-offset-2 dark:text-gray-600'>
                          View Code
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                {/* </motion.div> */}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectComponent;
