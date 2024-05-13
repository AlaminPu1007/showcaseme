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
    organizationName: 'Dr. Rajkumar’s Learning App',
    location: 'Oxford University',
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
}
export const projectsData: ProjectSchema[] = [
  {
    id: '01',
    name: 'My Learning 101',
    imgPath: '/assets/project-photo.png',
    type: 'web',
    liveUrl: 'https://mylearning101.co.uk/home',
    sourceCodeUrl: '',
    description:
      'I spearheaded My-Learning-101, an E-Learning platform, enriching it with interactive quizzes, real-time progress tracking, and role-based tools. Achieved a 25% rise in engagement and 15% boost in test scores, fostering personalized learning experiences.',
    technology: [
      'ReactJs',
      'NextJs',
      'JavaScript',
      'Redux',
      'Material UI',
      'Mathjs',
    ],
  },
  {
    id: '02',
    name: 'Resumake',
    imgPath: '/assets/project-photo.png',
    type: 'web',
    liveUrl: 'https://mycvgenerator.com/',
    sourceCodeUrl: '',
    description:
      'Led "Resumake" development, an online CV/Resume platform. Oversaw UI collaboration, managed project solo, integrated user input/templates. Achieved 100% development, boosting engagement by 30%, ensuring hassle-free CV/Resume creation.',
    technology: ['React', 'NextJs', 'JavaScript', 'Redux Toolkit', 'Bootstrap'],
  },
  {
    id: '03',
    imgPath: '/assets/project-photo.png',
    name: 'Sisimpur',
    type: 'web',
    liveUrl: 'https://sisimpurvillage.com/',
    sourceCodeUrl: '',
    description:
      'Revamped "Sisimpur" project, upgrading UI and integrating new APIs. Enhanced user experience by 70% and expanded educational content by 30%, making significant improvements to the platform.',
    technology: ['VueJs', 'NuxtJs', 'JavaScript', 'VueX'],
  },
  {
    id: '04',
    name: 'My Learning 101',
    type: 'web',
    imgPath: '/assets/project-photo.png',
    liveUrl: 'https://www.dummy.com',
    sourceCodeUrl: 'https://www.google.com',
    description:
      'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
    technology: ['React', 'NextJs', 'JavaScript', 'SASS', 'Html', 'CSS'],
  },
  {
    id: '05',
    name: 'My Learning 101',
    type: 'mobile',
    imgPath: '/assets/project-photo.png',
    liveUrl: 'https://www.dummy.com',
    sourceCodeUrl: 'https://www.google.com',
    description:
      'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
    technology: ['React', 'NextJs', 'JavaScript', 'SASS', 'Html', 'CSS'],
  },
  {
    id: '06',
    name: 'My Learning 101',
    type: 'web',
    liveUrl: 'https://www.dummy.com',
    imgPath: '/assets/project-photo.png',
    sourceCodeUrl: 'https://www.google.com',
    description:
      'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
    technology: ['React', 'NextJs', 'JavaScript', 'SASS', 'Html', 'CSS'],
  },
  {
    id: '07',
    name: 'My Learning 101',
    type: 'backend',
    liveUrl: 'https://www.dummy.com',
    imgPath: '/assets/project-photo.png',
    sourceCodeUrl: 'https://www.google.com',
    description:
      'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
    technology: ['React', 'NextJs', 'JavaScript', 'SASS', 'Html', 'CSS'],
  },
  {
    id: '08',
    name: 'My Learning 101',
    type: 'web',
    imgPath: '/assets/project-photo.png',
    liveUrl: 'https://www.dummy.com',
    sourceCodeUrl: 'https://www.google.com',
    description:
      'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
    technology: ['React', 'NextJs', 'JavaScript', 'SASS', 'Html', 'CSS'],
  },
  {
    id: '09',
    name: 'My Learning 101',
    type: 'mobile',
    imgPath: '/assets/project-photo.png',
    liveUrl: 'https://www.dummy.com',
    sourceCodeUrl: 'https://www.google.com',
    description:
      'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
    technology: ['React', 'NextJs', 'JavaScript', 'SASS', 'Html', 'CSS'],
  },
];
