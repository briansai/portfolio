export let categories = [
  {
    item: 'Intro',
    information: [],
  },
  { item: 'About',
    icon: 'person',
    information: [
      {
        info: 'Live to learn and learn to live.  Take every new experience and add it to your journey.  Think bigger than the game.'
      }
    ],
  },
  { item: 'Experience',
    icon: 'work',
    information:[
      {
        logo: '',
        text: 'tubi',
        company: 'Tubi',
        title: 'Software Engineer',
        experiences: [
          'Used Reactstrap and SASS to design user interface features on the Content Management System User Interface(CMSUI)',
          'Created internal tools (ie. drive-scan file uploads, filters, csv/csv parse files, image uploads, etc) for the operations team to increase automation and efficiency.',
          'Debugged and designed features on the CMSUI to improve workflow productivity',
          'Created, improved, and automated APIs and other tools for seamless data manipulation',
          'Triaged on-call issues for the company’s content delivery system',
          'Worked closely with managers and business leaders to prioritize projects and tasks for the company’s roadmap',
          'Worked with other departments to streamline the company’s data pipeline,'
        ],
      },
      {
        logo: '',
        text: 'mcmillan',
        company: 'McMillan',
        title: 'Project Engineer',
        experiences: [
          'Acquired notable contracts such as the electrical contract for Facebook worth $9 million and LEK Consulting worth $450,000',
          'Maintained relationships with general contractors and subcontractors for prospective business ',
          'Managed projects in a high traffic environment and determined budget outcomes by calculating the cost of necessary manpower and material prior to final report delivery',
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
      packageManager : [],
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
        abbreviation: 'sfsu',
        year: '2016',
        degree: 'Bachelor\'s of Science',
        logo: '',
      },
      {
        institute: 'Hack Reactor',
        abbreviation: 'hr',
        year: '2018',
        degree: 'Full Stack Developer',
        logo: '',
      }
    ],
  },
  { item: 'Contact',
    icon: 'mail_outline',
    text: 'Lets connect',
    information: [
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
];
