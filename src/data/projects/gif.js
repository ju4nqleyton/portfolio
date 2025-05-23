import gif1 from '../../images/gif-1.jpg';
import gif2 from '../../images/gif-2.jpg';
import gif3 from '../../images/gif-3.jpg';
import { FiGithub } from 'react-icons/fi';

export const gifApp = {
  ProjectHeader: {
    title: 'Gif App',
    publishDate: 'Julio, 2024',
    tags: 'Front-end',
  },
  ProjectImages: [
    {
      id: 1,
      title: 'Gif App',
      img: gif1,
    },
    {
      id: 2,
      title: 'Gif App',
      img: gif2,
    },
    {
      id: 3,
      title: 'Gif App',
      img: gif3,
    },
  ],
  ProjectInfo: {
    ObjectivesHeading: 'Objetivo',
    ObjectivesDetails: '',
    Technologies: [
      {
        title: 'Herramientas y tecnologías',
        techs: ['JavaScript', 'TypeScript', 'CSS'],
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
        url: 'https://github.com/ju4nqleyton/gif-app-typescript',
      },
    ],
  },
};
