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


export const AttractionSelect = () => {
    getAttractions()
        .then(() => {
            const attractionsArray = useAttractions();
            attractionRenderer(attractionsArray);
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