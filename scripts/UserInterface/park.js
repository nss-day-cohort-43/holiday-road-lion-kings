const parkInfo = document.querySelector(".parkInfo")
const parkBtn = document.querySelector("#park")

export const parkToggle = () => {
parkBtn.addEventListener("click", () => {
    if(parkInfo.style.visibility = "hidden"){
        parkInfo.style.visibility = "visible"
    }
    parkInfo.addEventListener("click", () => {
    if(parkInfo.style.visibility = "visible"){
            parkInfo.style.visibility = "hidden"
        }
    })
})}