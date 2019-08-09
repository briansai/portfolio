import javascriptSVG from '../images/skills/language/javascript.svg';
import reactSVG from '../images/skills/frontend/react.svg';
import reduxSVG from '../images/skills/frontend/redux.svg';
import reactstrapSVG from '../images/skills/frontend/reactstrap.svg';
import sassSVG from '../images/skills/frontend/sass.svg';
import materialSVG from '../images/skills/frontend/material.svg';
import htmlSVG from '../images/skills/frontend/html5.svg';
import css3SVG from '../images/skills/frontend/css3.svg';
import nodeSVG from '../images/skills/backend/node.svg';
import expressSVG from '../images/skills/backend/express.svg';
import mongodbSVG from '../images/skills/backend/mongodb.svg';
import mysqlSVG from '../images/skills/backend/mysql.svg';
import redisSVG from '../images/skills/backend/redis.svg';
import npmSVG from '../images/skills/packageManager/npm.svg';
import yarnSVG from '../images/skills/packageManager/yarn.svg';
import tubiSVG from '../images/experience/tubi.svg';
import mcmillanSVG from '../images/experience/mcmillan.svg';

export const categories = [
  { item: 'About',
    icon: 'person',
    information: [],
  },
  { item: 'Experience',
    icon: 'work',
    information:[
      {
        logo: tubiSVG,
        company: 'Tubi',
        title: 'Tech Ops Engineer',
        experiences: [
          'Debugged and contributed to features on the CMSUI, saving time and company money by creating a user-friendly UI for users.',
          'Integrated automation logic to the CMSUI to make it easier for users to process and retrieve information',
          'Maintained, updated, and created automation of reports.',
        ],
      },
      {
        logo: mcmillanSVG,
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
          logo: javascriptSVG
        }
      ],
      frontend: [
        {
          name: 'React',
          logo: reactSVG,
        },
        {
          name: 'Redux',
          logo: reduxSVG,
        },
        {
          name: 'Reactstrap',
          logo: reactstrapSVG,
        },
        {
          name: 'Sass',
          logo: sassSVG,
        },
        {
          name: 'Material-UI',  
          logo: materialSVG,
        },
        {
          name: 'HTMl5',
          logo: htmlSVG,
        },
        {
          name: 'CSS3',
          logo: css3SVG,
        },
      ],
      backend: [
        {
          name: 'Node',
          logo: nodeSVG,
        },
        {
          name: 'Express',
          logo: expressSVG,
        },
        {
          name: 'MySQL',
          logo: mysqlSVG,
        },
        {
          name: 'MongoDB',
          logo: mongodbSVG,
        },
        {
          name: 'Redis',
          logo: redisSVG,
        },
      ],
      packageManager : [
        {
          name: 'NPM',
          logo: npmSVG,
        },
        {
          name: 'yarn',
          logo: yarnSVG,
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
