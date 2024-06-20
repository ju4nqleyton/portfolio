import countries1 from '../../images/countries-1.jpg';
import countries2 from '../../images/countries-2.jpg';
import countries3 from '../../images/countries-3.jpg';
import { FiGithub } from 'react-icons/fi';

export const countries = {
  ProjectHeader: {
    title: 'Countries',
    publishDate: 'Jan , 2024',
    tags: 'Backend | Frontend | UI/UX',
  },
  ProjectImages: [
    {
      id: 1,
      title: 'Countries',
      img: countries1,
    },
    {
      id: 2,
      title: 'Countries',
      img: countries2,
    },
    {
      id: 3,
      title: 'Countries',
      img: countries3,
    },
  ],
  ProjectInfo: {
    ObjectivesHeading: 'Objective',
    ObjectivesDetails:
      'The objective of this project is to enable users to search for and explore flags of different countries. The application offers search, filtering, detailed country views, and the association of related activities. The goal is to provide an accessible and interactive way to obtain geographic and cultural information.',
    Technologies: [
      {
        title: 'Tools & Technologies',
        techs: [
          'JavaScript',
          'React',
          'Redux',
          'Tailwind CSS',
          'Node.js',
          'Express',
          'Sequelize',
        ],
      },
    ],
    ProjectDetailsHeading: 'Challenge',
    ProjectDetails: [
      {
        id: 1,
        details:
          'One of the main challenges was integrating Redux for global state management with React and TailwindCSS. Implementing efficient real-time search and filtering while maintaining a smooth user experience required careful synchronization of the application state with user actions, ensuring modular, high-performance code.',
      },
    ],
    SocialSharingHeading: 'Share This',
    SocialSharing: [
      {
        id: 1,
        name: 'GitHub',
        icon: <FiGithub />,
        url: 'https://github.com/ju4nqleyton/henry-countries',
      },
    ],
  },
};
