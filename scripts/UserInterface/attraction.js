const attractionInfo = document.querySelector(".attractionInfo")
const attractionBtn = document.querySelector("#attraction")

export const attractionToggle = () => {
attractionBtn.addEventListener("click", () => {
    if(attractionInfo.style.visibility = "hidden"){
        attractionInfo.style.visibility = "visible"
    }
    attractionInfo.addEventListener("click", () => {
    if(attractionInfo.style.visibility = "visible"){
        attractionInfo.style.visibility = "hidden"
        }
    })
})}