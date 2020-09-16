const eventHub = document.querySelector(".container");

const renderSavedTrips = (itineraryCollection) => {
    const contentTarget = document.querySelector(".savedItinerary");
    let HTMLArray = renderSavedTrips = 
    itineraryCollection.map((itineraryObj) => {
      return NoteHTML(itineraryObj);
    });
    contentTarget.innerHTML = `<h2>Saved Notes</h2>
    ` + HTMLArray.join("");
  };