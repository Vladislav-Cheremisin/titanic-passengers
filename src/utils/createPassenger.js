export const createPassenger = (options) => {
  return `
  <div class="card">
    <span class="card__name"><strong>Name:</strong> ${options.name ? options.name : `Unknown`}</span>
    <span class="card__ticket"><strong>Ticket:</strong> ${options.ticket ? options.ticket : `Unknown`}</span>
    <span class="card__gender"><strong>Gender:</strong> ${options.gender ? options.gender : `Unknown`}</span>
    <span class="card__status"><strong>Status:</strong> ${options.survived ? `SURVIVED` : `NOT SURVIVED`}</span>
    <span class="card__age"><strong>Age:</strong> ${options.age ? Math.floor(options.age) + ` y.o.`: `Unknown`}</span>
    <span class="card__cabin"><strong>cabin:</strong> ${options.cabin ? options.cabin : `Unknown`}</span>
  </div>
  `;
};
