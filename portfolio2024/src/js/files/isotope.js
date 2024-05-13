// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile, FLS } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

import Masonry from 'isotope-layout/js/isotope.js';

// const items = document.querySelector('[data-iso-items]');
// if (items) {
//   const itemsGrid = new Isotope(items, {
//     itemSelector: '[data-iso-item]',
//     masonry: {
//       columnWidth: '.grid-sizer',
//       gutter: 20,
//     },
//     // layoutMode: 'f',
//     percentPosition: true,

//   });
// }

const grid = document.querySelector('.portfolio__block');

const msnry = new Masonry( grid, {
  itemSelector: '[data-iso-item]',
  columnWidth: '.grid-sizer',
  percentPosition: true,
  gutter: 20,
});