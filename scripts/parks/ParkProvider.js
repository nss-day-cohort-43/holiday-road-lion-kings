import defaultExport from "../Settings.js";

const keys = () => {
    return defaultExport.npsKey
}

const eventHub = document.querySelector(".container");

eventHub.addEventListener("stateChosen", e => {

})

let parks = []

export const useParks = () => parks.slice()


export const getParks = () => {
    return fetch(`https://developer.nps.gov/api/v1/parks?stateCode=CO&limit=20&start=0&api_key=${keys()}`)
        .then(response => response.json()) 
        .then(
            parsedParks => {
                parks = parsedParks
                console.log(parks)
            })
}