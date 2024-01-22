import henryDogs1 from '../images/henrydogs-1.jpg';
import eGeekStore1 from '../images/egeekstore-1.jpg';

import { projectHenryDogs } from './projects/henryDogs';
import { projectEGeekStore } from './projects/eGeekStore';

export const projectsData = [
  {
    id: 1,
    title: 'Henry Dogs',
    category: 'Web Application',
    img: henryDogs1,
    ProjectHeader: {
      title: 'Henry Dogs',
      publishDate: 'Nov 10, 2023',
      tags: 'Backend | Frontend | UI/UX',
    },
    slug: 'henry-dogs',
    details: projectHenryDogs,
  },
  {
    id: 2,
    title: 'eGeekStore',
    category: 'UI/UX Design',
    img: eGeekStore1,
    ProjectHeader: {
      title: 'eGeekStore',
      publishDate: 'Dec 14, 2023',
      tags: 'Frontend | UI/UX',
    },
    slug: 'egeekstore',
    details: projectEGeekStore,
  },
];
