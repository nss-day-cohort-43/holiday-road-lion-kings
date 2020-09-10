const listener = document.querySelector("#state")
const menu = document.querySelector(".menuInfo")

// Currently not using. This is a stretch goal.

export const dropDownMenu = () => {    
    listener.addEventListener("click", () => {
        if (menu.style.visibility === "hidden") {
            menu.style.visibility = "visible"
        } else {
            menu.style.visibility = "hidden"
        }
     })
}