import defaultExport from "../Settings.js";

const keys = () => {
    return defaultExport.npsKey
}

const eventHub = document.querySelector(".container");

let chosenStateCode = ""

eventHub.addEventListener("stateChosen", e => {
    debugger;
    chosenStateCode = e.detail.stateChosen
    getParks(chosenStateCode)
})

let parks = []

export const useParks = () => parks.slice()


export const getParks = (chosenStateCode) => {
    return fetch(`https://developer.nps.gov/api/v1/parks?stateCode=${chosenStateCode}&limit=20&start=0&api_key=${keys()}`)
        .then(response => response.json()) 
        .then(
            parsedParks => {
                parks = parsedParks
                console.log(parks)
            })
}