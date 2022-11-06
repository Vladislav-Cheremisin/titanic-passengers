import { createPassenger } from "./createPassenger.js";
import { loadFirstElements, createLazyLoading } from "./lazyLoading.js";

let lazyLoadEvent = null;

export const renderContent = (passengers) => {
  let content = [];

  passengers.forEach((passenger) => content.push(createPassenger(passenger)));

  loadFirstElements(content);

  if (lazyLoadEvent) {
    window.removeEventListener('scroll', lazyLoadEvent);
    document.body.removeEventListener('touchmove', lazyLoadEvent);
  };
  
  lazyLoadEvent = createLazyLoading(content);

  window.addEventListener('scroll', lazyLoadEvent);
  document.body.addEventListener('touchmove', lazyLoadEvent);
};
