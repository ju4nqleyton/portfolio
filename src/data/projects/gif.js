import gif1 from '../../images/gif-1.jpg';
import gif2 from '../../images/gif-2.jpg';
import gif3 from '../../images/gif-3.jpg';
import { FiGithub } from 'react-icons/fi';

export const gifApp = {
  ProjectHeader: {
    title: 'Gif App',
    publishDate: 'Jul 9, 2024',
    tags: 'Frontend',
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
    ObjectivesHeading: 'Objective',
    ObjectivesDetails:
      'Create a GIF search application that allows users to search for and display GIFs using the Giphy API. The application features a simple user interface where users can input search queries and view a collection of relevant GIFs retrieved from the API.',
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
          'Gain experience in using TypeScript for type safety and error handling while working with asynchronous data fetching. This includes defining interfaces for the API response structure and implementing proper error management to ensure a smooth user experience when interacting with the GIF search functionality.',
      },
    ],
    SocialSharingHeading: 'Share This',
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
