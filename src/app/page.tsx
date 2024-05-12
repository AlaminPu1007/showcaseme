import React, { FC } from 'react';

import HeroComponent from './components/home/HeroComponent';
import AboutComponent from './components/home/AboutComponent';
import ProjectComponent from './components/home/ProjectComponent';

interface PageProps {}

const Page: FC<PageProps> = () => {
  return (
    <>
      <section>
        <HeroComponent />
      </section>

      <section>
        <AboutComponent />
      </section>

      <section>
        <div id='my-personal-projects'>
          <ProjectComponent />
        </div>
      </section>
    </>
  );
};

export default Page;
