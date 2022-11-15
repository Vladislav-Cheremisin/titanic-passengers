export const createPassenger = (opt) => {
  const passenger = document.createElement('div');
  const passengerName = document.createElement('span');
  const passengerTicket = document.createElement('span');
  const passengerGender = document.createElement('span');
  const passengerStatus = document.createElement('span');
  const passengerAge = document.createElement('span');
  const passengerCabin = document.createElement('span');

  passenger.classList.add('card');
  passengerName.classList.add('card__name');
  passengerTicket.classList.add('card__ticket');
  passengerGender.classList.add('card__gender');
  passengerStatus.classList.add('card__status');
  passengerAge.classList.add('card__age');
  passengerCabin.classList.add('card__cabin');

  passengerName.innerHTML = `<strong>Name:</strong> ${opt.name ? opt.name : `Unknown`}`;
  passengerTicket.innerHTML = `<strong>Ticket:</strong> ${opt.ticket ? opt.ticket : `Unknown`}`;
  passengerGender.innerHTML = `<strong>Gender:</strong> ${opt.gender ? opt.gender : `Unknown`}`;
  passengerStatus.innerHTML = `<strong>Status:</strong> ${opt.survived ? `SURVIVED` : `NOT SURVIVED`}`;
  passengerAge.innerHTML = `<strong>Age:</strong> ${opt.age ? Math.floor(opt.age) + ` y.o.` : `Unknown`}`;
  passengerCabin.innerHTML = `<strong>Cabin:</strong> ${opt.cabin ? opt.cabin : `Unknown`}`;

  passenger.appendChild(passengerName);
  passenger.appendChild(passengerTicket);
  passenger.appendChild(passengerGender);
  passenger.appendChild(passengerStatus);
  passenger.appendChild(passengerAge);
  passenger.appendChild(passengerCabin);

  return passenger;
};
