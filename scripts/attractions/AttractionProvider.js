let attractionsArray = [];

export const useAttractions = () => attractionsArray.slice();

export const getAttractions = () => {
  return fetch("http://holidayroad.nss.team/bizarreries")
  .then(response => response.json())
  .then(convertedResponse => attractionsArray = convertedResponse)
}