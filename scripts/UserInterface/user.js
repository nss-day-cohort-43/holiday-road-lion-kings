const listener = document.querySelector("#state")
const menu = document.querySelector(".menuInfo")


export const dropDownMenu = () => {    
    listener.addEventListener("click", () => {
         menu.style.visibility = "visible"
     })
   
    menu.addEventListener("click", () => {
        menu.style.visibility = "hidden"
    })
}