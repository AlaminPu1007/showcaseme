/**
 * A list of work experience
 */
export interface WorkExperience {
  id: number;
  title: string;
  organizationName: string;
  location: string;
  workDuration: string;
  type: string;
}

export const workExperience: WorkExperience[] = [
  {
    id: 1,
    title: 'SOFTWARE ENGINEER',
    organizationName: 'Riseup Labs',
    location: 'Uttara-3, Dhaka, Bangladesh',
    workDuration: 'Sep 2021 - Present',
    type: 'Full Time',
  },
  {
    id: 2,
    title: 'SOFTWARE ENGINEER',
    organizationName: 'Dr. Rajkumar’s Learning App',
    location: 'Oxford University',
    workDuration: 'Sep 2021 - Dec 2021',
    type: 'Full Time',
  },
  {
    id: 3,
    title: 'SOFTWARE ENGINEER',
    organizationName: 'Dr. Rajkumar’s Learning App',
    location: 'Oxford University',
    workDuration: 'Sep 2021 - Dec 2021',
    type: 'Full Time',
  },
];

/* The list of My Tech Stack */

export interface TechStack {
  id: string;
  title: string;
  stacks: TechStackItem[];
}

export interface TechStackItem {
  id: string;
  name: string;
  expertise: string;
  url: string | undefined;
  isFocusedAble: boolean;
}
export const techStacks: TechStack[] = [
  {
    id: '1',
    title: 'web Development',
    stacks: [
      {
        id: '101',
        name: 'Javascript',
        expertise: 'Experienced',
        url: '',
        isFocusedAble: true,
      },
      {
        id: '102',
        name: 'React Js',
        expertise: 'Experienced',
        url: '',
        isFocusedAble: true,
      },
      {
        id: '109',
        name: 'React Native',
        expertise: 'Experienced',
        url: '',
        isFocusedAble: true,
      },
      {
        id: '103',
        name: 'Next Js',
        expertise: 'Experienced',
        url: '',
        isFocusedAble: true,
      },
      {
        id: '104',
        name: 'Vue Js',
        expertise: 'Experienced',
        url: '',
        isFocusedAble: false,
      },
      {
        id: '105',
        name: 'Nuxt Js',
        expertise: 'Experienced',
        url: '',
        isFocusedAble: false,
      },
      {
        id: '106',
        name: 'HTML 5',
        expertise: 'Experienced',
        url: '',
        isFocusedAble: false,
      },
      {
        id: '107',
        name: 'CSS 3',
        expertise: 'Experienced',
        url: '',
        isFocusedAble: false,
      },
      {
        id: '108',
        name: 'Bootstrap',
        expertise: 'Experienced',
        url: '',
        isFocusedAble: false,
      },
      {
        id: '110',
        name: 'Tailwind',
        expertise: 'Experienced',
        url: '',
        isFocusedAble: true,
      },
    ],
  },

  {
    id: '2',
    title: 'Backend & Problem Solver',
    // title: 'Tech Wizardry: Backend & Problem Solver',
    stacks: [
      {
        id: '207',
        name: 'Hacker Rank (150+)',
        expertise: 'Experienced',
        url: 'https://www.hackerrank.com/profile/alamin66_sit',
        isFocusedAble: true,
      },
      {
        id: '206',
        name: 'LeetCode (500+)',
        expertise: 'Experienced',
        url: 'https://leetcode.com/u/alamin66/',
        isFocusedAble: true,
      },
      {
        id: '209',
        name: 'UVA (125+)',
        expertise: 'Experienced',
        url: 'https://uhunt.onlinejudge.org/id/951681',
        isFocusedAble: false,
      },
      {
        id: '208',
        name: 'GeeksForGeeks (45+)',
        expertise: 'Experienced',
        url: 'https://www.geeksforgeeks.org/user/alamintr47/',
        isFocusedAble: false,
      },
      {
        id: '201',
        name: 'Node Js',
        expertise: 'Experienced',
        url: '',
        isFocusedAble: true,
      },
      {
        id: '202',
        name: 'Express Js',
        expertise: 'Experienced',
        url: '',
        isFocusedAble: true,
      },
      {
        id: '203',
        name: 'MySQL',
        expertise: 'Basic',
        url: '',
        isFocusedAble: false,
      },
      {
        id: '204',
        name: 'Mongo DB',
        expertise: 'Basic',
        url: '',
        isFocusedAble: false,
      },
      {
        id: '205',
        name: 'Adonis Js',
        expertise: 'Basic',
        url: '',
        isFocusedAble: false,
      },
      {
        id: '210',
        name: 'Jest',
        expertise: 'Experienced',
        url: '',
        isFocusedAble: false,
      },
    ],
  },
];

/**
 * List of my projects
 */
export interface ProjectSchema {
  id: string;
  name: string;
  type: string;
  liveUrl: string | undefined;
  sourceCodeUrl: string | undefined;
  description: string;
  imgPath: string;
  technology: Array<string>;
  rootStack: string | undefined;
}
export const projectsData: ProjectSchema[] = [
  {
    id: '01',
    name: 'My Learning 101',
    imgPath: '/assets/global-village.png',
    type: 'web',
    liveUrl: 'https://mylearning101.co.uk/home',
    sourceCodeUrl: '',
    description:
      'Elevated My-Learning-101 with interactive quizzes, real-time progress tracking, and role-based tools. Achieved a 25% engagement surge and 15% test score improvement, fostering personalized learning experiences.',
    technology: [
      'ReactJs',
      'NextJs',
      'JavaScript',
      'Redux',
      'Material UI',
      'Mathjs',
    ],
    rootStack: 'Next Js',
  },
  {
    id: '02',
    name: 'Resumake',
    imgPath: '/assets/project-photo.png',
    type: 'web',
    liveUrl: 'https://mycvgenerator.com/',
    sourceCodeUrl: '',
    description:
      'Pioneered Resumake, an innovative CV/Resume platform, managing UI collaboration and solo project oversight. Integrated user input/templates, achieving 100% development and driving 30% engagement growth for effortless CV/Resume creation.',
    technology: ['React', 'NextJs', 'JavaScript', 'Redux Toolkit', 'Bootstrap'],
    rootStack: 'Next Js',
  },
  {
    id: '03',
    imgPath: '/assets/sisimpur-village.png',
    name: 'Sisimpur',
    type: 'web',
    liveUrl: 'https://sisimpurvillage.com/',
    sourceCodeUrl: '',
    description:
      'Implemented a comprehensive overhaul of the "Sisimpur" project, enhancing UI and integrating new APIs. Significantly improved the user experience by 70% and expanded educational content by 30%, resulting in substantial platform enhancements.',
    technology: ['VueJs', 'NuxtJs', 'JavaScript', 'VueX'],
    rootStack: 'Nuxt Js',
  },
  {
    id: '04',
    name: 'Spark Infrastructure',
    type: 'web',
    imgPath: '/assets/spark.png',
    liveUrl: 'https://www.silbd.net/',
    sourceCodeUrl: '',
    description:
      'Transformed Spark Infrastructure into a dynamic e-commerce hub, leveraging jQuery, Bootstrap 5, HTML, SCSS, and CSS. Elevated user experience by 50%, optimizing performance and ensuring seamless navigation for a captivating online shopping journey.',
    technology: ['Jquery', 'Owl Carousel', 'Javascript', 'Bootstrap'],
    rootStack: 'Jquery',
  },
  {
    id: '05',
    name: 'Worktok',
    type: 'web',
    imgPath: '/assets/worktok.png',
    liveUrl: 'https://admin.worktok.org/',
    sourceCodeUrl: '',
    description:
      "Revolutionized Worktok's admin panel, streamlining customer-provider interactions for seamless job posting and bidding processes. Enhanced efficiency by 40%, ensuring a robust and intuitive platform experience",
    technology: [
      'React',
      'Redux Toolkit',
      'I18next',
      'JavaScript',
      'React Bootstrap',
      'react Apexcharts',
    ],
    rootStack: 'React Js',
  },
  {
    id: '06',
    name: 'Retouching',
    type: 'web',
    liveUrl: 'retouchinglabs',
    imgPath: '/assets/retouching-labs.png',
    sourceCodeUrl: '',
    description:
      "Revamped Retouching Labs' platform with intuitive navigation and captivating page layouts, resulting in a 20% increase in user engagement and satisfaction among our diverse global clientele. Elevated visual appeal ensures seamless interaction and satisfaction",
    technology: ['Jquery', 'SwiperJs', 'SCSS', 'Javascript', 'Bootstrap'],
    rootStack: 'Jquery',
  },
  {
    id: '08',
    name: 'Burkina Faso',
    type: 'web',
    imgPath: '/assets/burkina.png',
    liveUrl: 'https://burkina.rultest.com/',
    sourceCodeUrl: '',
    description:
      "Elevated Burkina's admin web UI with intuitive authentication page design, ensuring seamless access to comprehensive news coverage for users worldwide",
    technology: ['Jquery', 'Javascript', 'Bootstrap', 'SCSS'],
    rootStack: 'Jquery',
  },
  {
    id: '15',
    name: 'E-bazars',
    type: 'web',
    imgPath: '/assets/react-ecommerce.png',
    liveUrl: 'https://e-bazars.netlify.app/',
    sourceCodeUrl: 'https://github.com/AlaminPu1007/React-ECommerce',
    description:
      'Crafted an immersive React.js e-commerce web app with robust authentication features, ensuring secure and seamless online shopping experiences for users',
    technology: ['React', 'Context Api', 'NodeJs', 'ExpressJs', 'MySql'],
    rootStack: 'React Js',
  },
  {
    id: '09',
    name: 'Riseup CRM',
    type: 'web',
    imgPath: '/assets/riseup-crm.png',
    liveUrl: 'https://riseupcrm.com/',
    sourceCodeUrl: '',
    description:
      'Revolutionized Vue.js CRM frontend, optimizing resource management with intuitive design, ensuring seamless company operations, and boosting productivity.',
    technology: ['Vue', 'Bootstrap', 'SASS', 'Html', 'CSS'],
    rootStack: 'Vue Js',
  },
  {
    id: '07',
    name: 'Hotel Management',
    type: 'web',
    liveUrl: '',
    imgPath: '/assets/hotel-books.png',
    sourceCodeUrl: 'https://github.com/AlaminPu1007/Dcastalia',
    description:
      'Engineered a sophisticated hotel management application, seamlessly weaving API integrations and leveraging Swiper JS for an immersive user journey. Delivered a seamless experience, effortlessly guiding users through a wealth of information.',
    technology: ['React', 'SwiperJs', 'JavaScript', 'SASS'],
    rootStack: 'React Js',
  },
  {
    id: '10',
    name: 'Micple',
    type: 'mobile',
    imgPath: '/assets/micple.png',
    liveUrl:
      'https://play.google.com/store/apps/details?id=com.micple&hl=en_IN',
    sourceCodeUrl: '',
    description:
      "Crafted Micple's innovative features: encrypted chats, self-destructing messages, and real-time interactions, leveraging advanced algorithms. Orchestrated seamless messaging, sharing, and push notifications through Socket.IO for enhanced user experience.",
    technology: [
      'React Native',
      'NodeJS',
      'Mongo DB',
      'React Navigation',
      'ExpressJS',
      'Socket Io',
    ],
    rootStack: 'React Native',
  },
  {
    id: '11',
    name: 'Meal Manager',
    type: 'mobile',
    imgPath: '/assets/meal-manager.png',
    liveUrl: 'https://play.google.com/store/apps/details?id=com.messmanager',
    sourceCodeUrl: 'https://github.com/AlaminPu1007/Meal-Manager',
    description:
      'Developed Meal Manager, a popular React Native mobile app for tracking daily meals and mess expenses, with over 1000 downloads. Simplifies expense splitting and sharing among mess members for seamless management.',
    technology: [
      'React Native',
      'NodeJS',
      'MySql',
      'React Navigation',
      'Adonis Js',
      'Context API',
    ],
    rootStack: 'React Native',
  },
  {
    id: '12',
    name: 'Amar Bornomala',
    type: 'mobile',
    imgPath: '/assets/bornomala.png',
    liveUrl: 'https://play.google.com/store/apps/details?id=com.esho_sikhi',
    sourceCodeUrl: '',
    description:
      'Designed for kids to learn alphabets (e.g., Bangla Sarborno, Banjonborno, Arabic, English) with engaging music. Encourages interactive learning through fun, educational experiences.',
    technology: ['React Native', 'React Navigation', 'React-Native-Sound'],
    rootStack: 'React Native',
  },
  {
    id: '13',
    name: 'Enosis CRM',
    type: 'mobile',
    imgPath: '/assets/enosisi-crm.png',
    liveUrl: '',
    sourceCodeUrl: 'https://github.com/AlaminPu1007/Enosis-Crm',
    description:
      'Developed a robust CRM application featuring essential functionalities such as graphical data representation, pagination, localization, and dark mode support, among other user-centric features.',
    technology: [
      'React Native',
      'localization',
      'React Navigation',
      'React Native SVG Charts',
      'Redux',
    ],
    rootStack: 'React Native',
  },
  {
    id: '14',
    name: 'Kids Video Player',
    type: 'mobile',
    imgPath: '/assets/enosisi-crm.png',
    liveUrl: '',
    sourceCodeUrl: 'https://github.com/AlaminPu1007/kids-video-player',
    description:
      'Created a captivating React Native mobile app where kids enjoy educational and entertaining cartoons, fostering learning and amusement in a safe digital environment',
    technology: [
      'React Native',
      'Iframe',
      'React Native Reanimated',
      'React Navigation',
      'redux Toolkit',
    ],
    rootStack: 'React Native',
  },
  {
    id: '16',
    name: 'All Countries',
    type: 'mobile',
    imgPath: '/assets/esho-sikhi.png',
    liveUrl: 'https://play.google.com/store/apps/details?id=com.rest_countries',
    sourceCodeUrl: 'https://github.com/AlaminPu1007/REST-COUNTRIES',
    description:
      'Discover countries worldwide through this React Native app, powered by the Rest Countries API. Explore flags, populations, languages, currencies, and more in a user-friendly interface',
    technology: ['React', 'Jest', 'React Native Reanimated'],
    rootStack: 'React Native',
  },
  {
    id: '17',
    name: 'E-bazars',
    type: 'backend',
    imgPath: '/assets/react-ecommerce-backend.png',
    liveUrl: 'https://e-bazars.netlify.app/',
    sourceCodeUrl:
      'https://github.com/AlaminPu1007/React-ECommerce/tree/master/Back-End',
    description:
      'Crafted an immersive React.js e-commerce web app with robust authentication features, ensuring secure and seamless online shopping experiences for users',
    technology: ['NodeJs', 'ExpressJs', 'MySql'],
    rootStack: 'Express JS',
  },
  {
    id: '18',
    name: 'AdonisJs CRUD',
    type: 'backend',
    imgPath: '/assets/adonis-js.jpg',
    liveUrl: '',
    sourceCodeUrl:
      'https://github.com/AlaminPu1007/AdonisJs/tree/master/FirstProject',
    description:
      'Built a versatile CRUD app with Adonis.js, enabling effortless Create, Read, Update, and Delete operations for streamlined data management.',
    technology: ['NodeJs', 'AdonisJs', 'MySql'],
    rootStack: 'Adonis JS',
  },
  {
    id: '19',
    name: 'Express CRUD',
    type: 'backend',
    imgPath: '/assets/express-js.jpg',
    liveUrl: '',
    sourceCodeUrl: 'https://github.com/AlaminPu1007/CRUD-Application',
    description:
      'Developed a simple CRUD application using Express.js, facilitating basic Create, Read, Update, and Delete operations.',
    technology: ['NodeJs', 'ExpressJs', 'Mongoose'],
    rootStack: 'Express JS',
  },
];
