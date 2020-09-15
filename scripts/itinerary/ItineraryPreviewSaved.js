import { saveItinerary } from "./ItineraryPreviewSaveProvider.js"

const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveItin") {
        const parkInput = document.querySelector(".addedPark")
        const attractionInput = document.querySelector(".addedAttraction")
        const eateryInput = document.querySelector(".addedEatery")
        if (parkInput.innerHTML !== "" && attractionInput.innerHTML !== "" && eateryInput.innerHTML !== "") {
            const newItin = {
                "dateCreated": Date.now(),
                "Park": parkInput.innerHTML,
                "Attraction": attractionInput.innerHTML,
                "Eatery": eateryInput.innerHTML
            }
            saveItinerary(newItin)
            .then(() => parkInput.innerHTML = "")
            .then(() => attractionInput.innerHTML = "")
            .then(() => eateryInput.innerHTML = "")
        }
    }
})

export const ItineraryPreviewSaved = () => {}
