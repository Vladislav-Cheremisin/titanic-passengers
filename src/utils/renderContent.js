import { createPassenger } from "./createPassenger.js";
import { loadFirstElements, createLazyLoading } from "./lazyLoading.js";

const contentWrapper = document.querySelector(".content");

export const renderContent = (passengers) => {
  const content = [];

  passengers.forEach((passenger) => content.push(createPassenger(passenger)))

  loadFirstElements(content);
  
  const lazyLoadEvent = createLazyLoading(content)

  window.addEventListener('scroll', lazyLoadEvent);
};
