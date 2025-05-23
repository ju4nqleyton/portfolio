import countries1 from '../../images/countries-1.jpg';
import countries2 from '../../images/countries-2.jpg';
import countries3 from '../../images/countries-3.jpg';
import { FiGithub } from 'react-icons/fi';

export const countries = {
  ProjectHeader: {
    title: 'Countries',
    publishDate: 'Enero, 2024',
    tags: 'Back-end | Front-end | UI/UX',
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
    ObjectivesHeading: 'Objetivo',
    ObjectivesDetails: '',
    Technologies: [
      {
        title: 'Herramientas y tecnologías',
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
    ProjectDetailsHeading: 'Desafío',
    ProjectDetails: [
      {
        id: 1,
        details: '',
      },
    ],
    SocialSharingHeading: 'Compartir',
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
