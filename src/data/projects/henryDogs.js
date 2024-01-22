import henryDogs1 from '../../images/henrydogs-1.jpg';
import henryDogs2 from '../../images/henrydogs-2.jpg';
import henryDogs3 from '../../images/henrydogs-3.jpg';
import { FiGithub } from 'react-icons/fi';

export const projectHenryDogs = {
  ProjectHeader: {
    title: 'Henry Dogs',
    publishDate: 'Nov 10, 2023',
    tags: 'Backend | Frontend | UI/UX',
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
    ObjectivesHeading: 'Objective',
    ObjectivesDetails:
      'The Henry Dogs project aims to develop a Single Page Application (SPA) using technologies such as React, Redux, Node, Express, and Sequelize. Additionally, the project seeks to apply fundamental design and User Experience (UX : UI) concepts to deliver a pleasant and functional interface to users. The primary objective is to consolidate and connect the acquired knowledge from the academic background, particularly focusing on web development, state management, and interaction with external APIs. Furthermore, the project emphasizes the adoption of best development practices, including the implementation of an efficient GIT workflow and the incorporation of testing to ensure code quality.',
    Technologies: [
      {
        title: 'Tools & Technologies',
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
    ProjectDetailsHeading: 'Challenge',
    ProjectDetails: [
      {
        id: 1,
        details:
          'The project faces several significant challenges. One challenge involves implementing efficient algorithms to filter and sort search results on the client side, avoiding reliance on predefined endpoints from the external API. Additionally, overcoming the proper synchronization of the application state using Redux, especially in dynamically managing information about dogs, is a critical challenge. Another crucial challenge is designing an attractive and functional interface, incorporating design and UX : UI concepts to enhance the user experience. Furthermore, tackling the challenge of learning and applying Sequelize for efficient interaction with the database, ensuring data security, and proper management is paramount. Lastly, the integration of unit and integration tests during development is essential to ensure code reliability and proper functionality. These challenges not only contribute to technical development but also promote continuous improvement and learning of robust practices throughout the application development process.',
      },
    ],
    SocialSharingHeading: 'Share This',
    SocialSharing: [
      {
        id: 1,
        name: 'GitHub',
        icon: <FiGithub />,
        url: 'https://github.com/ju4nqleyton/pi-dogs',
      },
    ],
  },
};
