import intro from '../images/intro/intro.png';
import self from '../images/intro/self.png';

export let categories = [
  {
    item: 'Intro',
    information: { intro, self },
  },
  { item: 'About',
    icon: 'person',
    information: [],
  },
  { item: 'Experience',
    icon: 'work',
    information:[
      {
        logo: '',
        text: 'tubi',
        company: 'Tubi',
        title: 'Tech Ops Engineer',
        experiences: [
          'Debugged and contributed to features on the CMSUI, saving time and company money by creating a user-friendly UI for users.',
          'Integrated automation logic to the CMSUI to make it easier for users to process and retrieve information',
          'Maintained, updated, and created automation of reports.',
        ],
      },
      {
        logo: '',
        text: 'mcmillan',
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
      language: [],
      frontend: [],
      backend: [],
      packageManager : []
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
        institute: 'San Francisco State University',
        year: '2016',
        degree: 'Bachelor\'s of Science',
        logo: '',
      },
      {
        institute: 'Hack Reactor',
        year: '2018',
        degree: 'Full Stack Developer',
        logo: '',
      }
    ],
  },
  { item: 'Contact',
    icon: 'mail_outline',
    text: 'I\'d love to connect with you.  Let\'s chat and talk code',
    information: [
      {
        text: 'email',
        icon: '',
        link: 'mailto: brianwsai@gmail.com',
      },
      {
        text: 'linkedIn',
        icon: '',
        link: 'https://www.linkedin.com/in/briansai',
      },
      {
        text: 'github',
        icon: '',
        link: 'https://www.github.com/briansai',
      }
    ],
  },
  { item: 'Resume',
    icon: 'list_alt',
    information: [],
  }
];
