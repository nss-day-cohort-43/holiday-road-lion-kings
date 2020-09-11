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
    const domTarget = document.querySelector("#attractionsDropdown")
    return domTarget.innerHTML = `
        <label for="attractionSelect">Select attraction: </label>
        <select id="attractionSelect">
            <option value="0">Choose an attraction to visit!</option>
            ${
                attractionsArray.map(attraction => {
                    return `
                    <option>${attraction.name}
                    `
                }).join("")
            }
        </select>
    `
}