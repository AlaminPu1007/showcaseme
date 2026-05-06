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
    organizationName: 'TechnoNext Software Ltd',
    location: '97 Sohrawardy Ave, Dhaka 1212',
    workDuration: 'Nov 2024 - Present',
    type: 'Full Time',
  },
  {
    id: 2,
    title: 'SOFTWARE ENGINEER',
    organizationName: 'Riseup Labs',
    location: 'Uttara, Dhaka, Bangladesh',
    workDuration: 'Jul 2022 - Oct 2024',
    type: 'Full Time',
  },
  {
    id: 3,
    title: 'SOFTWARE ENGINEER',
    organizationName: 'Micple Inc',
    location: 'Dhaka, Bangladesh',
    workDuration: 'Jan 2022 - Jun 2022',
    type: 'Full Time',
  },
  {
    id: 4,
    title: 'SOFTWARE ENGINEER',
    organizationName: 'Devech Ltd',
    location: 'Dhaka, Bangladesh',
    workDuration: 'Mar 2020 - Dec 2021',
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
        name: 'LeetCode (935+)',
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
} //qa-brains.png
export const projectsData: ProjectSchema[] = [
  {
    id: '21',
    name: 'Algorithm Visualization',
    imgPath: '/assets/algorithm-visualization.png',
    type: 'web',
    liveUrl: 'https://visual-gorithm.vercel.app/',
    sourceCodeUrl: 'https://github.com/AlaminPu1007/algorithm-visualizer',
    description:
      'Watch algorithms come alive through stunning visual animations. Experience the beauty of DFS, BFS, N-Queens, sorting techniques, and shortest path algorithms like never before—where complex logic meets interactive storytelling.',
    technology: ['ReactJs', 'NextJs', 'JavaScript'],
    rootStack: 'Next Js',
  },
  {
    id: '20',
    name: 'QA Brains',
    imgPath: '/assets/qa-brains.png',
    type: 'web',
    liveUrl: 'https://qabrains.com/',
    sourceCodeUrl: '',
    description:
      'Your ultimate QA knowledge hub—where every testing question finds its answer. Built by Riseup Labs, this platform transforms how teams master quality assurance through interactive learning, expert insights, and a vibrant community-driven approach.',
    technology: [
      'ReactJs',
      'NextJs',
      'JavaScript',
      'Redux',
      'Bootstrap',
      'Quill Editor',
    ],
    rootStack: 'Next Js',
  },
  {
    id: '01',
    name: 'My Learning 101',
    imgPath: '/assets/global-village.png',
    type: 'web',
    liveUrl: 'https://mylearning101.co.uk/home',
    sourceCodeUrl: '',
    description:
      "Transform learning into an adventure with interactive quizzes, real-time progress tracking, and role-based tools. Experience a 25% engagement surge and 15% test score boost—personalized education that adapts to every learner's journey.",
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
      'Pioneered Resumake—the ultimate CV/Resume platform that transforms career storytelling. Seamlessly blending user input with stunning templates, we achieved 100% development completion and drove 30% engagement growth for effortless professional branding.',
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
      'Breathed new life into Sisimpur Village with a stunning UI overhaul and seamless API integrations. Delivered a magical 70% UX improvement and 30% content expansion—where education meets enchantment for young minds.',
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
      'Revolutionized Spark Infrastructure into a powerhouse e-commerce destination. Leveraging jQuery, Bootstrap 5, and modern web magic, we elevated UX by 50%—delivering lightning-fast performance and seamless navigation for captivating online shopping.',
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
      "Revolutionized Worktok's admin panel—where job seekers meet opportunity effortlessly. Streamlined customer-provider interactions with 40% efficiency gains, crafting a robust platform that makes job posting and bidding feel like magic.",
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
    liveUrl: 'https://retouchinglabs.com',
    imgPath: '/assets/retouching-labs.png',
    sourceCodeUrl: '',
    description:
      "Revamped Retouching Labs' platform with intuitive navigation and captivating layouts that captivate global clients. Achieved a stunning 20% engagement boost—where visual perfection meets seamless user experiences.",
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
      "Elevated Burkina's admin web UI with intuitive authentication design, opening seamless access to comprehensive news coverage for users worldwide—where information meets elegant simplicity.",
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
      'Crafted an immersive React.js e-commerce experience with bulletproof authentication and seamless shopping flows. Where security meets convenience for the modern digital marketplace.',
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
      'Revolutionized Vue.js CRM frontend—where resource management meets elegant design. Streamlined company operations with intuitive interfaces that boost productivity and transform how teams collaborate.',
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
      'Engineered a sophisticated hotel management system with seamless API integrations and Swiper JS magic. Delivered an immersive journey that effortlessly guides guests through a world of information.',
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
      "Crafted Micple's secure messaging experience with encrypted chats, self-destructing messages, and real-time interactions. Advanced algorithms meet Socket.IO magic for seamless communication.",
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
      'Developed Meal Manager—the ultimate mess life companion with 1000+ downloads. Simplifies expense tracking and splitting among members for effortless daily management.',
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
      'Designed for kids to master alphabets (Bangla, Arabic, English) through engaging music and interactive play. Where learning meets joy in every tap.',
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
      'Developed a robust CRM with stunning data visualizations, pagination, localization, and dark mode. Where functionality meets elegant user-centric design.',
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
    imgPath: '/assets/kids-player.png',
    liveUrl: '',
    sourceCodeUrl: 'https://github.com/AlaminPu1007/kids-video-player',
    description:
      'Created a captivating React Native app where kids dive into educational cartoons in a safe digital playground. Learning meets entertainment in perfect harmony.',
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
      'Discover countries worldwide through this React Native app powered by Rest Countries API. Explore flags, populations, languages, and currencies in a beautifully crafted interface.',
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
      'Built a robust backend for E-bazars e-commerce platform with secure authentication and seamless APIs. Powering smooth online shopping experiences.',
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
      'Built a versatile CRUD app with Adonis.js—where data management becomes effortless. Streamlined Create, Read, Update, and Delete operations for modern applications.',
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
      'Developed a simple yet powerful CRUD application with Express.js. Where basic Create, Read, Update, and Delete operations meet elegant simplicity.',
    technology: ['NodeJs', 'ExpressJs', 'Mongoose'],
    rootStack: 'Express JS',
  },
];
