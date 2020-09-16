// need to create separate functions to bring in separate park, attraction and eatery, then do a switch case like in ItineraryPreview.js. Then use one function to call in main


eventHub.addEventListener("click", e => {
    if (e.target.id === "saveItin") {
      const parkContent = document.querySelector(".addedPark");
      const attractionContent = document.querySelector(".addedAttraction");
      const eateryContent = document.querySelector(".addedEatery");

      if (noteCriminal.value !== "0") {
        const newTrip = {
          date: Date.now(),
          park: parkContent.value,
          attraction: attractionContent.value,
          eatery: eateryContent.value,
          
        };
        saveTrip(newTrip);
      } else {
        window.alert("You must select one of each");
      }
      
    }
  });

export const TripHTML = (itineraryObj) => {
    const targetTrip = document.querySelector(".savedItinStyle")
    // const targetAttraction = document.querySelector(".itinAttraction")
    // const targetEatery = document.querySelector(".itinEatery")
    return targetTrip.innerHTML = `
        
    `
}