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
}
export const techStacks: TechStack[] = [
  {
    id: '1',
    title: 'Frontend Development',
    stacks: [
      {
        id: '101',
        name: 'Javascript',
        expertise: 'Experienced',
        url: '',
      },
      {
        id: '102',
        name: 'React Js',
        expertise: 'Experienced',
        url: '',
      },
      {
        id: '109',
        name: 'React Native',
        expertise: 'Experienced',
        url: '',
      },
      {
        id: '103',
        name: 'Next Js',
        expertise: 'Experienced',
        url: '',
      },
      {
        id: '104',
        name: 'Vue Js',
        expertise: 'Experienced',
        url: '',
      },
      {
        id: '105',
        name: 'Nuxt Js',
        expertise: 'Experienced',
        url: '',
      },
      {
        id: '106',
        name: 'HTML 5',
        expertise: 'Experienced',
        url: '',
      },
      {
        id: '107',
        name: 'CSS 3',
        expertise: 'Experienced',
        url: '',
      },
      {
        id: '108',
        name: 'Bootstrap',
        expertise: 'Experienced',
        url: '',
      },
      {
        id: '110',
        name: 'Tailwind',
        expertise: 'Experienced',
        url: '',
      },
    ],
  },

  {
    id: '2',
    title: 'Tech Wizardry: Backend & Problem Solver',
    stacks: [
      {
        id: '207',
        name: 'Hacker Rank (150+)',
        expertise: 'Experienced',
        url: 'https://www.hackerrank.com/profile/alamin66_sit',
      },
      {
        id: '206',
        name: 'LeetCode (500+)',
        expertise: 'Experienced',
        url: 'https://leetcode.com/u/alamin66/',
      },
      {
        id: '209',
        name: 'UVA (125+)',
        expertise: 'Experienced',
        url: 'https://uhunt.onlinejudge.org/id/951681',
      },
      {
        id: '208',
        name: 'GeeksForGeeks (45+)',
        expertise: 'Experienced',
        url: 'https://www.geeksforgeeks.org/user/alamintr47/',
      },
      {
        id: '201',
        name: 'Node Js',
        expertise: 'Experienced',
        url: '',
      },
      {
        id: '202',
        name: 'Express Js',
        expertise: 'Experienced',
        url: '',
      },
      {
        id: '203',
        name: 'MySQL',
        expertise: 'Basic',
        url: '',
      },
      {
        id: '204',
        name: 'Mongo DB',
        expertise: 'Basic',
        url: '',
      },
      {
        id: '205',
        name: 'Adonis Js',
        expertise: 'Basic',
        url: '',
      },
    ],
  },
];
