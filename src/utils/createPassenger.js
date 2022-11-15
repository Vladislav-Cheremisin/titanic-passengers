const createInfoSpan = (className, header, content) => {
  const infoSpan = document.createElement('span');
  const infoHeader = document.createElement('strong');
  const infoText = document.createElement('span');

  infoHeader.innerText = header + ': ';
  infoText.innerText = content;

  infoSpan.appendChild(infoHeader);
  infoSpan.appendChild(infoText);
  infoSpan.classList.add(className);

  return infoSpan;
};

export const createPassenger = (opt) => {
  const passenger = document.createElement('div');
  const passengerName = createInfoSpan('card__name', 'Name', `${opt.name ? opt.name : `Unknown`}`);
  const passengerTicket = createInfoSpan('card__ticket', 'Ticket', `${opt.ticket ? opt.ticket : `Unknown`}`);
  const passengerGender = createInfoSpan('card__gender', 'Gender', `${opt.gender ? opt.gender : `Unknown`}`);
  const passengerStatus = createInfoSpan('card__status', 'Status', `${opt.survived ? `SURVIVED` : `NOT SURVIVED`}`);
  const passengerAge = createInfoSpan('card__age', 'Age', `${opt.age ? Math.floor(opt.age) + ` y.o.` : `Unknown`}`);
  const passengerCabin = createInfoSpan('card__cabin', 'Cabin', `${opt.cabin ? opt.cabin : `Unknown`}`);

  passenger.classList.add('card');

  passenger.appendChild(passengerName);
  passenger.appendChild(passengerTicket);
  passenger.appendChild(passengerGender);
  passenger.appendChild(passengerStatus);
  passenger.appendChild(passengerAge);
  passenger.appendChild(passengerCabin);

  return passenger;
};
