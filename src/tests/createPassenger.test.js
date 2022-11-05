import {createPassenger} from '../utils/createPassenger.js'

/* Simple test case just for example */

describe('Create passenger function should return correct html code for passenger card', () => {
  it('Returns correct html code for passenger', () => {
    const testData = {
      data: {
        survived: true,
        name: "Test Name",
        gender: "male",
        ticket: "2022",
        age: 42,
        cabin: "Test Cabin",
      },
      result: `
  <div class="card">
    <span class="card__name"><strong>Name:</strong> Test Name</span>
    <span class="card__ticket"><strong>Ticket:</strong> 2022</span>
    <span class="card__gender"><strong>Gender:</strong> male</span>
    <span class="card__status"><strong>Status:</strong> SURVIVED</span>
    <span class="card__age"><strong>Age:</strong> 42 y.o.</span>
    <span class="card__cabin"><strong>cabin:</strong> Test Cabin</span>
  </div>
  `,
    }

    expect(createPassenger(testData.data)).toBe(testData.result)
  })

  it ('Should work correct with not full data object', () => {
    const testData = {
      data: {
        survived: false,
        name: "Test Name",
      },
      result: `
  <div class="card">
    <span class="card__name"><strong>Name:</strong> Test Name</span>
    <span class="card__ticket"><strong>Ticket:</strong> Unknown</span>
    <span class="card__gender"><strong>Gender:</strong> Unknown</span>
    <span class="card__status"><strong>Status:</strong> NOT SURVIVED</span>
    <span class="card__age"><strong>Age:</strong> Unknown</span>
    <span class="card__cabin"><strong>cabin:</strong> Unknown</span>
  </div>
  `,
    }

    expect(createPassenger(testData.data)).toBe(testData.result)
  }) 
})