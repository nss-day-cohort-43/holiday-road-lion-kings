const eventHub = document.querySelector(".container");

const dispatchStateChangeEvent = () => {
    const itineraryStateChangedEvent = new CustomEvent("itineraryStateChanged");
    
    eventHub.dispatchEvent(itineraryStateChangedEvent);
};

let trips = [];

export const getTrips = () => {
    return fetch("http://localhost:8088/db.json")
    .then((response) => response.json())
    .then((parsedTrips) => {
        trips = parsedTrips;
    });
};

export const useTrips = () => {
    return trips.slice();
}

export const saveTrip = itineraryObj => {
    return fetch('http://localhost:8088/itineraries', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(itineraryObj)
    })
    .then(getTrips)
    .then(dispatchStateChangeEvent)
}