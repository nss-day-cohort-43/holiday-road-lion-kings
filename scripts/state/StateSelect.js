import { useStates } from "./StateProvider.js"

const eventHub = document.querySelector(".container");

eventHub.addEventListener("click", e => {
    if (e.target.id === "stateDropdown") {
        const selectedState = e.target.value;
        const customEvent = new CustomEvent("stateChosen", {
            detail: {
                stateChosen: selectedState
            }
        })
        eventHub.dispatchEvent(customEvent);
    }
})

export const StateSelect = () => {
    const statesArray = useStates();
    stateRenderer(statesArray);
}

const stateRenderer = (stateArray) => {
    const domTarget = document.querySelector(".menuInfo")
    return domTarget.innerHTML = `
         ${
                stateArray.map(state => {
                    return `
                    <p id="${state.name}">${state.abbreviation}</p>
                    `
                }).join("")
            }
    `
}