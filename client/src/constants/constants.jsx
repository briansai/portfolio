import javascript from '../images/skills/language/javascript.png';
import react from '../images/skills/frontend/react.png';
import redux from '../images/skills/frontend/redux.png';
import reactstrap from '../images/skills/frontend/reactstrap.png';
import sass from '../images/skills/frontend/sass.png';
import material from '../images/skills/frontend/material.png';
import html from '../images/skills/frontend/html5.png';
import css3 from '../images/skills/frontend/css3.png';
import node from '../images/skills/backend/node.png';
import express from '../images/skills/backend/express.png';
import mongodb from '../images/skills/backend/mongodb.png';
import mysql from '../images/skills/backend/mysql.png';
import redis from '../images/skills/backend/redis.png';
import npm from '../images/skills/packageManager/npm.png';
import yarn from '../images/skills/packageManager/yarn.png';
import tubi from '../images/experience/tubi.png';
import mcmillan from '../images/experience/mcmillan.png';

export const categories = [
  { item: 'About',
    icon: 'person',
    information: [],
  },
  { item: 'Experience',
    icon: 'work',
    information:[
      {
        logo: tubi,
        company: 'Tubi',
        title: 'Tech Ops Engineer',
        experiences: [
          'Debugged and contributed to features on the CMSUI, saving time and company money by creating a user-friendly UI for users.',
          'Integrated automation logic to the CMSUI to make it easier for users to process and retrieve information',
          'Maintained, updated, and created automation of reports.',
        ],
      },
      {
        logo: mcmillan,
        company: 'McMillan Electric',
        title: 'Project Engineer',
        experiences: [
          'Contributed to the acquisition of the electrical contract for Facebook worth $9 million.',
          'Acquired the electrical contract for LEK Consulting worth $450,000.',
          'Maintained excellent relationships with general contractors and subcontractors for prospective business',
          'Managed projects in a high traffic environment and determined budget outcomes by calculating the cost of necessary manpower and material before delivering reports',
          'Surveyed locations of prospective contracts and proposed a bid with an estimated cost for the projects',
        ],
      }
    ],
  },
  { item: 'Skills',
    icon: 'build',
    information: {
      language: [
        {
          name: 'Javascript',
          logo: javascript
        }
      ],
      frontend: [
        {
          name: 'React',
          logo: react,
        },
        {
          name: 'Redux',
          logo: redux,
        },
        {
          name: 'Reactstrap',
          logo: reactstrap,
        },
        {
          name: 'Sass',
          logo: sass,
        },
        {
          name: 'Material-UI',  
          logo: material,
        },
        {
          name: 'HTMl5',
          logo: html,
        },
        {
          name: 'CSS3',
          logo: css3,
        },
      ],
      backend: [
        {
          name: 'Node',
          logo: node,
        },
        {
          name: 'Express',
          logo: express,
        },
        {
          name: 'MySQL',
          logo: mysql,
        },
        {
          name: 'MongoDB',
          logo: mongodb,
        },
        {
          name: 'Redis',
          logo: redis,
        },
      ],
      packageManager : [
        {
          name: 'NPM',
          logo: npm,
        },
        {
          name: 'yarn',
          logo: yarn,
        }
      ]
    },
  },
  { item: 'Projects',
    icon: 'web',
    information: [],
  },
  { item: 'Education',
    icon: 'school',
    information: [
      {
        school: 'San Francisco State University',
        degree: 'Bachelor\'s',
        logo: '',
      },
      {
        school: 'Hack Reactor',
        degree: 'Full Stack Developer',
        logo: '',
      }
    ],
  },
  { item: 'Contact',
    icon: 'mail_outline',
    information: [],
  },
  { item: 'Resume',
    icon: 'list_alt',
    information: [],
  }
];
