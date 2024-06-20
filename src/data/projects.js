import henryDogs1 from '../images/henrydogs-1.jpg';
import eGeekStore1 from '../images/egeekstore-1.jpg';
import countries1 from '../images/countries-1.jpg';

import { henryDogs } from './projects/henryDogs';
import { eGeekStore } from './projects/eGeekStore';
import { countries } from './projects/countries';

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
    details: henryDogs,
  },
  {
    id: 2,
    title: 'e-Geek Store',
    category: 'UI/UX Design',
    img: eGeekStore1,
    ProjectHeader: {
      title: 'e-Geek Store',
      publishDate: 'Dec 14, 2023',
      tags: 'Frontend | UI/UX',
    },
    slug: 'egeekstore',
    details: eGeekStore,
  },
  {
    id: 3,
    title: 'Countries',
    category: 'Web Application',
    img: countries1,
    ProjectHeader: {
      title: 'Countries',
      publishDate: 'Jan , 2024',
      tags: 'Backend | Frontend | UI/UX',
    },
    slug: 'countries',
    details: countries,
  },
];
