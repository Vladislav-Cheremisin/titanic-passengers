import { createPassenger } from "./createPassenger.js";

const contentWrapper = document.querySelector(".content");

export const renderContent = (passengers) => {
  const content = [];

  passengers.forEach((passenger) => content.push(createPassenger(passenger)))

  contentWrapper.innerHTML = content.join('')
};
