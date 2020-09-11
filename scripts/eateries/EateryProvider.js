let eateries = [];

export const useEatery = () => eateries.slice();

export const getEateries = () => {
  return fetch(`http://holidayroad.nss.team/eateries`)
  .then((response) => response.json()
  .then((parsedEateries) => {
    eateries = parsedEateries
    })
  )
};