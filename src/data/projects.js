import henryDogs1 from '../images/henrydogs-1.jpg';
import eGeekStore1 from '../images/egeekstore-1.jpg';
import countries1 from '../images/countries-1.jpg';
import gif1 from '../images/gif-1.jpg';
import todo1 from '../images/todo-1.jpg';

import { henryDogs } from './projects/henryDogs';
import { eGeekStore } from './projects/eGeekStore';
import { countries } from './projects/countries';
import { gifApp } from './projects/gif';
import { todoApp } from './projects/todo';

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
  {
    id: 4,
    title: 'Gif App',
    category: 'Web Application',
    img: gif1,
    ProjectHeader: {
      title: 'Gif App',
      publishDate: 'Jul , 2024',
      tags: 'Frontend',
    },
    slug: 'gif',
    details: gifApp,
  },
  {
    id: 5,
    title: 'TODO App',
    category: 'Web Application',
    img: todo1,
    ProjectHeader: {
      title: 'TODO App',
      publishDate: 'Jul , 2024',
      tags: 'Backend | Frontend | UI/UX',
    },
    slug: 'todo',
    details: todoApp,
  },
];
