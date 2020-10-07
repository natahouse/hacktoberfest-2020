import data from '../people/data.js'

const peopleList = document.querySelector("#people-list")

function populatePeopleList() {
  const elements = data.map(person => {
    return `
      <div class="card-container">
        <img
          class="card-image"
          src="${person.image}"
        />
        <h2>${person.name}</h2>
        <span>${person.title}</span>
        <p>${person.description}</p>
    </div>
    `
  })

  peopleList.innerHTML = elements
}

populatePeopleList()