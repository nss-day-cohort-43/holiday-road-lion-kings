const eateryInfo = document.querySelector(".eateryInfo")
const eateryBtn = document.querySelector("#eatery")

export const eateryToggle = () => {
    eateryBtn.addEventListener("click", () => {
    if(eateryInfo.style.visibility = "hidden"){
        eateryInfo.style.visibility = "visible"
    }
    eateryInfo.addEventListener("click", () => {
    if(eateryInfo.style.visibility = "visible"){
        eateryInfo.style.visibility = "hidden"
        }
    })
})}