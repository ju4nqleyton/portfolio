import eGeekStore1 from '../../images/egeekstore-1.jpg';
import eGeekStore2 from '../../images/egeekstore-2.jpg';
import eGeekStore3 from '../../images/egeekstore-3.jpg';
import { FiGithub, FiChrome } from 'react-icons/fi';

export const eGeekStore = {
  ProjectHeader: {
    title: 'e-Geek Store',
    publishDate: 'Diciembre, 2023',
    tags: 'Front-end | UI/UX',
  },
  ProjectImages: [
    {
      id: 1,
      title: 'e-Geek Store',
      img: eGeekStore1,
    },
    {
      id: 2,
      title: 'e-Geek Store',
      img: eGeekStore2,
    },
    {
      id: 3,
      title: 'e-Geek Store',
      img: eGeekStore3,
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
        name: 'Website',
        icon: <FiChrome />,
        url: 'https://e-geek-collectibles.vercel.app/',
      },
      {
        id: 2,
        name: 'GitHub',
        icon: <FiGithub />,
        url: 'https://github.com/andruizgom/e-Geek-Collectibles',
      },
    ],
  },
};
