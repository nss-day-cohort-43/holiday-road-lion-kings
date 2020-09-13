const eventHub = document.querySelector(".container");

let state = ""

eventHub.addEventListener("stateChosen", event => {
  state = event.detail.stateChosen
})

let eateries = [];

export const useEateries = () => eateries.slice();

export const getEateries = (state) => {
  return fetch(`http://holidayroad.nss.team/eateries?state=${state}`)
  .then((response) => response.json()
  .then((parsedEateries) => {
      eateries = parsedEateries;
    })
  );
};
