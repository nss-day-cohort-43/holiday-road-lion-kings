import { useStates } from "./StateProvider.js"

const eventHub = document.querySelector(".container");

eventHub.addEventListener("click", e => {
    if (e.target.id === "stateDropdown") {
        console.log("HIT STATE BUTTON");
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
    const domTarget = document.querySelector("#stateDropdown")
    return domTarget.innerHTML = `
        <label for "stateSelect">Show state: </label>
        <select id="stateSelect">
            <option value="0">Choose a state to visit!</option>
            ${
                stateArray.map(state => {
                    return `
                    <option>${state.name}</option>
                    `
                }).join("")
            }
        </select>
    `
}