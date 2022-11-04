import './styles/style.css';

import passengers from './assets/passengers.json';
import { renderContent } from './utils/renderContent.js';
import { useFilter } from './utils/useFilter.js';

const searchbar = document.querySelector('.searchbar');
const searchInput = document.querySelector('.searchbar__input');
const searchBtn = document.querySelector('.search__btn');

searchbar.addEventListener('submit', (event) => event.preventDefault());
searchInput.addEventListener('input', useFilter);
searchInput.addEventListener('click', useFilter);

renderContent(passengers);