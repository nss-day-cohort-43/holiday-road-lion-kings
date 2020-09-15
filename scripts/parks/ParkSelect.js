import { getParks, useParks } from './ParkProvider.js';
import { parkDetails } from '../detailsArea/parkDetailsHTML.js'
import { getWeather, useWeather } from '../weather/WeatherProvider.js';
import { WeatherCardMaker } from "../weather/WeatherCard.js"

const eventHub = document.querySelector(".container");

let parks;
eventHub.addEventListener("click", e => {
  
    if (e.target.id.startsWith("parkSelected--")) {
        document.querySelector(".locationContainer").style.visibility = "visible"
        document.querySelector(".summaryContainer").style.visibility = "visible"
        document.querySelector(".keyDetailsContainer").style.visibility = "visible"
        document.querySelector(".addItinButton").style.visibility = "visible"
        
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
                getWeather(Math.round(park.latitude), Math.round(park.longitude))
                .then(() => {
                   WeatherCardMaker();
                })  
            }
        })
        eventHub.dispatchEvent(parkEvent);
    } 
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