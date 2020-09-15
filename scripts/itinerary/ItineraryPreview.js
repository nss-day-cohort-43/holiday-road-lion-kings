
const eventHub = document.querySelector(".container");

//Check which itinerary button has been pressed, then
//add that info to the preview section.
eventHub.addEventListener("click", e => {
    const whichButtonPressed = e.target.id;
    switch(whichButtonPressed) {
        case "detailsParkButton": 
            addPark();
            break;
        case "detailsAttractionsButton":
            addAttraction();
            break;
        case "detailsEateryButton":
            addEatery();
            break;
        }
    })

//Render Park to Itinerary Preview
const addPark = () => {
    const targetPark = document.querySelector(".itinPark")
    return targetPark.innerHTML = `
        <p>${document.querySelector(".detailH2").innerHTML}</p>
        `
}

//Render Attraction to Itinerary Preview
const addAttraction = () => {
    const targetAttraction = document.querySelector(".itinAttraction")
    return targetAttraction.innerHTML =  `
        <p>${document.querySelector(".detailH2").innerHTML}</p>
        `
}

//Render Eatery to Itinerary Preview
const addEatery = () => {
    const targetEatery = document.querySelector(".itinEatery")
    return targetEatery.innerHTML = `
    <p>${document.querySelector(".detailH2").innerHTML}</p>
    `
}
 
//Links ItineraryPreview.js to the main
export const ItineraryPreview = () => {
    console.log("Itinerary Preview Loaded")
}