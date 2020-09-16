const eventHub = document.querySelector(".container");

const dispatchStateChangeEvent = () => {
    const itineraryStateChangedEvent = new CustomEvent("itineraryStateChanged");
    
    eventHub.dispatchEvent(itineraryStateChangedEvent);
};

let itineraries = [];

export const getItineraries = () => {
    return fetch("http://localhost:8088/db.json")
    .then((response) => response.json())
    .then((parsedItineraries) => {
        itineraries = parsedItineraries;
    });
};

export const useItineraries = () => {
    return itineraries.slice();
}

export const saveItinerary = itineraryObj => {
    return fetch('http://localhost:8088/itineraries', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(itineraryObj)
    })
    .then(getItineraries)
    .then(dispatchStateChangeEvent)
}