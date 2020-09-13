import { useAttractions, getAttractions } from "./AttractionProvider.js";

const eventHub = document.querySelector(".container");


eventHub.addEventListener("click", e => {
    if (e.target.id.startsWith("attraction--")) {
        const [prefix, attractionId] = e.target.id.split("--");

        const attractionEvent = new CustomEvent("attractionSelect", {
            detail: {
                attraction: attractionId,
            }
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
                const attractionsArray = useAttractions();
                const filteredArray = attractionsArray.filter(attraction => attraction.state === stateChosen);
                attractionRenderer(filteredArray);
            })
    })
}


const attractionRenderer = (attractionsArray) => {
    const domTarget = document.querySelector("#attraction")
    return domTarget.innerHTML = `
        ${attractionsArray.map(attraction => {
            return `<p id="attraction--${attraction.name}">${attraction.name}</p>`
            }).join("")
        }
    `
}