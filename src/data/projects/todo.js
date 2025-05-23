import todo1 from '../../images/todo-1.jpg';
import todo2 from '../../images/todo-2.jpg';
import todo3 from '../../images/todo-3.jpg';
import { FiGithub } from 'react-icons/fi';

export const todoApp = {
  ProjectHeader: {
    title: 'TODO App',
    publishDate: 'Julio, 2024',
    tags: 'Front-end',
  },
  ProjectImages: [
    {
      id: 1,
      title: 'Henry Dogs',
      img: todo1,
    },
    {
      id: 2,
      title: 'Henry Dogs',
      img: todo2,
    },
    {
      id: 3,
      title: 'Henry Dogs',
      img: todo3,
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
        url: 'https://github.com/ju4nqleyton/todo-app-typescript',
      },
    ],
  },
};
