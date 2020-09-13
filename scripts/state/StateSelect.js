import { useStates } from "./StateProvider.js"

const eventHub = document.querySelector(".container");

eventHub.addEventListener("click", e => {
    if (e.target.id.startsWith("stateSelected--")) {
        const [prefix, stateId] = e.target.id.split("--")

        const stateEvent = new CustomEvent("stateChosen", {
            detail: {
                stateChosen: stateId
            }
        })
        eventHub.dispatchEvent(stateEvent);
    }
})

export const StateSelect = () => {
    const statesArray = useStates();
    stateRenderer(statesArray);
}

const stateRenderer = (stateArray) => {
    const domTarget = document.querySelector(".stateInfo")
    return domTarget.innerHTML = `
         ${
                stateArray.map(state => {
                    return `
                    <p id="stateSelected--${state.abbreviation}">${state.abbreviation}</p>
                    `
                }).join("")
            }
    `
}