import eGeekStore1 from '../../images/egeekstore-1.jpg';
import eGeekStore2 from '../../images/egeekstore-2.jpg';
import eGeekStore3 from '../../images/egeekstore-3.jpg';
import { FiGithub, FiChrome } from 'react-icons/fi';

export const projectEGeekStore = {
  ProjectHeader: {
    title: 'eGeekStore',
    publishDate: 'Dec 14, 2023',
    tags: 'Frontend | UI/UX',
  },
  ProjectImages: [
    {
      id: 1,
      title: 'eGeekStore',
      img: eGeekStore1,
    },
    {
      id: 2,
      title: 'eGeekStore',
      img: eGeekStore2,
    },
    {
      id: 3,
      title: 'eGeekStore',
      img: eGeekStore3,
    },
  ],
  ProjectInfo: {
    ObjectivesHeading: 'Objective',
    ObjectivesDetails:
      'The objective of the e-commerce project was to create a platform for selling collectible items in the geek world. The focus was on developing a user-friendly and visually appealing Single Page Application (SPA) using a technology stack that included JavaScript, Tailwind CSS, React, Redux, Node.js, Express, and Sequelize. The primary goal was to provide a seamless and enjoyable online shopping experience for users interested in geek-themed collectibles. My specific contribution to the project was the design of the entire UI and UX, utilizing Tailwind CSS to create an interface that aligns with the geek culture aesthetic and enhances the overall user experience.',
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
          "The project presented several challenges, including the need to efficiently manage and display a diverse range of collectible items. This required the implementation of dynamic filtering and sorting algorithms on the client side to enhance the user's browsing experience. Additionally, ensuring seamless communication between the frontend and backend through Redux and handling complex data interactions with Sequelize posed technical challenges. Designing an interface that not only met aesthetic preferences but also facilitated smooth navigation for users unfamiliar with e-commerce platforms was a critical aspect. The challenge also included incorporating responsive design principles using Tailwind CSS to ensure a consistent and engaging experience across different devices. Overall, the project aimed to balance functionality, aesthetics, and usability to create a successful geek-themed e-commerce platform.",
      },
    ],
    SocialSharingHeading: 'Share This',
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
