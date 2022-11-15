import { getContentElements } from './getContentElements.js';
import { loadFirstElements, lazyLoadingEvent } from './lazyLoading.js';

let content = {};

const renderContent = (passengers) => {
  content = getContentElements(passengers);

  loadFirstElements();

  window.addEventListener('scroll', lazyLoadingEvent);
  document.body.addEventListener('touchmove', lazyLoadingEvent);
};

export { content, renderContent };
