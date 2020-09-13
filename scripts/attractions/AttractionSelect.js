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
                    console.log(attractions)
                    attractionDetails(attractions)
                }
            })
        })

        eventHub.dispatchEvent(attractionEvent)
    }
})


export const AttractionSelect = () => {
    eventHub.addEventListener("stateChosen", e => {

    getAttractions()
        .then(() => {
            const attractionsArray = useAttractions()
            attractionsArray.map(attraction => {
                if(attraction.state === e.detail.stateChosen)
                attractionRenderer(attraction)
            })
            
        }) })
}


const attractionRenderer = (attraction) => {
    const domTarget = document.querySelector(".attractionInfo")
    return domTarget.innerHTML = 
         
           (`<p id="attraction--${attraction.name}">${attraction.name}
           - ${attraction.state}, ${attraction.city}</p>`)
           
        
    
}