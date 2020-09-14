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
        getAttractions()
        .then(() => {
            let attraction = useAttractions()
            attraction.map(attractions => {
                if(attractions.name === attractionId){
                    attractionDetails(attractions)
                }
            })
        })
        eventHub.dispatchEvent(attractionEvent)
    }
})

//To have the attractions selected by state.
//We need to get a full list of the attractions.
//Then we need to filter for those that match the state
//that was selected. Then take that array and pass it into
//The renderer. So all of this needs to happen in AttractionSelect.

export const AttractionSelect = () => {
    eventHub.addEventListener("stateChosen", e => {
        const stateChosen = e.detail.stateChosen;
        getAttractions()
            .then(() => {
                const filteredArray = useAttractions().filter(attraction => attraction.state === stateChosen);
                attractionRenderer(filteredArray);
            })
    })
}


const attractionRenderer = (attraction) => {
    const domTarget = document.querySelector(".attractionInfo")
    return domTarget.innerHTML = 
         
           (`<p id="attraction--${attraction.name}">${attraction.name}
           - ${attraction.state}, ${attraction.city}</p>`)
           
        
    
}