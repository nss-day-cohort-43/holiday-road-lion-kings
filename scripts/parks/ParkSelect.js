import { getParks, useParks } from './ParkProvider.js';
import { parkDetails } from '../detailsArea/parkDetailsHTML.js'

const eventHub = document.querySelector(".container");

// Event listener that creates parkChosen and send the name of the chosenPark to eventHub//

let parks;
eventHub.addEventListener("click", e => {
    document.querySelector(".locationContainer").style.visibility = "visible"
    document.querySelector(".summaryContainer").style.visibility = "visible"
    document.querySelector(".keyDetailsContainer").style.visibility = "visible"
    
    if (e.target.id.startsWith("parkSelected--")) {
        
    
        const [prefix, parkId] = e.target.id.split("--")
        const parkEvent = new CustomEvent("parkChosen", {
            detail: {
                parkChosen: parkId
            }
        })
            parks = useParks()
            parks.map(park => {
            if(park.fullName === parkId) {
                parkDetails(park)
            }
            eventHub.dispatchEvent(parkEvent);
        })}
})
// //////////////////////////////////////////////////////////////////////////////

let chosenStateCode;

export const stateSelectPark = () => {
eventHub.addEventListener("stateChosen", e => {
    
    chosenStateCode = e.detail.stateChosen
    getParks(chosenStateCode)
    .then(() => {
        parkArray = useParks()
        parkRender(parkArray)
    })
})}

let parkArray;

const parkRender = (parkArray) => {
    const domTarget = document.querySelector(".parkInfo")
    return domTarget.innerHTML = `
        ${
            parkArray.map(park => {
                return `
                <p id="parkSelected--${park.fullName}">${park.fullName}</p>
                `
            }).join("")
        }
     `
}