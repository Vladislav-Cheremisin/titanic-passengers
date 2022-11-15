import { createPassenger } from './createPassenger.js';

export const getContentElements = (passengers) => {
  let content = [];

  passengers.forEach((passenger) => content.push(createPassenger(passenger)));

  return content;
};
