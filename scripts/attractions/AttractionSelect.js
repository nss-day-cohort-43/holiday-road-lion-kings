//Module duties:
    //Listen for user to select an attraction and send that to the eventHub
    //Renders select and detail components

import { useAttractions, getAttractions } from "./AttractionProvider.js";
import { attractionDetails } from "../detailsArea/attractionDetailsHTML.js";

const eventHub = document.querySelector(".container");


eventHub.addEventListener("click", e => {
    if (e.target.id.startsWith("attraction--")) {
        const [prefix, attractionId] = e.target.id.split("--");

        const attractionEvent = new CustomEvent("attractionSelect", {
            detail: {
                attraction: attractionId,
            }
        })
        attractionDetailsRenderer(attractionId);
        console.log(attractionEvent);
        eventHub.dispatchEvent(attractionEvent)
    }
})

//Filter selected attraction by state
export const AttractionSelect = () => {
    eventHub.addEventListener("stateChosen", e => {
        const stateChosen = e.detail.stateChosen;
        getAttractions()
            .then(() => {
                const filteredArray = useAttractions().filter(attraction => attraction.state === stateChosen);
                attractionSelectRenderer(filteredArray);
            })
    })
}

//Render list of attractions for that state
const attractionSelectRenderer = (attractionArray) => {
    const domTarget = document.querySelector(".attractionInfo")
    return domTarget.innerHTML = 
        `${attractionArray.map(attraction => {
            return `<p id="attraction--${attraction.name}">${attraction.name} - ${attraction.state}, ${attraction.city}</p>`       
        }).join("")}`
}

//Takes selected attraction and returns its rendered details
const attractionDetailsRenderer = (attractionId) => {
    let attraction = useAttractions()
    attraction.map(attractions => {
        if (attractions.name === attractionId) {
            attractionDetails(attractions)
        }
    })
}