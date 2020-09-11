import { useAttractions, getAttractions } from "./AttractionProvider.js";

const eventHub = document.querySelector(".container");


eventHub.addEventListener("click", e => {
    if (e.target.id === "attractionsDropdown") {
        console.log("CLICKED ATTRACTIONS")
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
            return `<p id="attraction--${attraction.name}>${attraction.name}</p>`
            }).join("")
        }
    `
}