import todo1 from '../../images/todo-1.jpg';
import todo2 from '../../images/todo-2.jpg';
import todo3 from '../../images/todo-3.jpg';
import { FiGithub } from 'react-icons/fi';

export const todoApp = {
  ProjectHeader: {
    title: 'TODO App',
    publishDate: 'Jul 11, 2024',
    tags: 'Frontend',
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
    ObjectivesHeading: 'Objective',
    ObjectivesDetails:
      'Develop a task list application that allows users to efficiently manage their daily tasks by providing functionalities to add, edit, delete, and mark tasks as complete. The application uses TypeScript to ensure a more robust and maintainable codebase.',
    Technologies: [
      {
        title: 'Tools & Technologies',
        techs: ['JavaScript', 'TypeScript', 'CSS'],
      },
    ],
    ProjectDetailsHeading: 'Challenge',
    ProjectDetails: [
      {
        id: 1,
        details:
          'Learn and apply advanced TypeScript concepts, such as creating custom types and state management, to improve the structure and maintainability of the code. This includes implementing interfaces to better define the shape of objects and using generics to handle collections of tasks more efficiently.',
      },
    ],
    SocialSharingHeading: 'Share This',
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
