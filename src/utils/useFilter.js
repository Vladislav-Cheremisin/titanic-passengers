import { renderContent } from './renderContent.js';
import passengers from '../assets/passengers.json';

const searchInput = document.querySelector('.searchbar__input');
const content = document.querySelector('.content');

export const useFilter = () => {
  const currentValue = searchInput.value.toLowerCase();
  content.innerHTML = '';

  if (currentValue === '') {
    renderContent(passengers);
  } else {
    const filteredData = passengers.filter((passenger) => {
      if (passenger.name.toLowerCase().includes(currentValue)) {
        return passenger;
      }

      if (passenger.gender.toLowerCase().includes(currentValue) && currentValue !== 'male') {
        return passenger;
      }

      if (passenger.gender.toLowerCase() === 'male' && currentValue === 'male') {
        return passenger;
      }

      if (Math.floor(passenger.age) == currentValue) {
        return passenger;
      }

      if (currentValue.length > 2 && passenger.ticket.toLowerCase().includes(currentValue)) {
        return passenger;
      }

      if (passenger.cabin.toLowerCase().split(' ').includes(currentValue)) {
        return passenger;
      }

      if (passenger.survived && 'survived'.includes(currentValue)) {
        return passenger;
      }

      if (!passenger.survived && currentValue.includes('not')) {
        return passenger;
      }
    });

    if (filteredData.length) {
      renderContent(filteredData);
    }
  }
};
