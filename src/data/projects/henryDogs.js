import henryDogs1 from '../../images/henrydogs-1.jpg';
import henryDogs2 from '../../images/henrydogs-2.jpg';
import henryDogs3 from '../../images/henrydogs-3.jpg';
import { FiGithub } from 'react-icons/fi';

export const henryDogs = {
  ProjectHeader: {
    title: 'Henry Dogs',
    publishDate: 'Noviembre, 2023',
    tags: 'Back-end | Front-end | UI/UX',
  },
  ProjectImages: [
    {
      id: 1,
      title: 'Henry Dogs',
      img: henryDogs1,
    },
    {
      id: 2,
      title: 'Henry Dogs',
      img: henryDogs2,
    },
    {
      id: 3,
      title: 'Henry Dogs',
      img: henryDogs3,
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
          'CSS',
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
        url: 'https://github.com/ju4nqleyton/henry-dogs',
      },
    ],
  },
};
