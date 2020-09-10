let parkData;
const body = document.querySelector("body")



export const usePark = () => {
  return parkData.slice();
}

export const getPark = async() => {
    let response = await fetch("https://developer.nps.gov/api/v1/alerts?stateCode=UT&limit=1&start=1&api_key=DEjAJwXSyNzRE1lUg5ORu3PmxjGBxm37RPGeYFJj")
    parkData = response.json();
    
};

