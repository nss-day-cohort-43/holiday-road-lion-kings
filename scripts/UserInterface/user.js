import { useStates } from "../state/StateProvider.js";
const listener = document.querySelector("#state")
const menu = document.querySelector(".stateInfo")


export const stateToggle = () => {    
    listener.addEventListener("click", () => {
        if(menu.style.visibility = "hidden"){
        menu.style.visibility = "visible"
        } 
    menu.addEventListener("click", () => {
        if(menu.style.visibility = "visible"){
            menu.style.visibility = "hidden"
        }
    })
     })
}

export const stateHoverEvent = () => {
    
    menu.addEventListener("mouseover", event => {
       const stateArray = useStates();

        stateArray.map(state => {
           if(event.target.id === `stateSelected--${state.abbreviation}`){
               let stateName = document.querySelector(".stateName")
               stateName.innerHTML = `<p class="stateHover">${state.name}</p>`
           }
       })
    })
}
