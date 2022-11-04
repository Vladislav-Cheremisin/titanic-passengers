import './styles/style.css';

import passengers from './assets/passengers.json';
import { renderContent } from './utils/renderContent.js';

const searchbar = document.querySelector('.searchbar');

searchbar.addEventListener('submit', (event) => event.preventDefault());

renderContent(passengers);