eventHub.addEventListener("click", e => {
    if (e.target.id === "saveItin") {
        const noteContent = document.querySelector("#note-text");
        const noteCriminal = document.querySelector("#note-criminalSelect");
        if (noteCriminal.value !== "0") {
            const newNote = {
              text: noteContent.value,
              date: Date.now(),
              suspectName: noteCriminal.value,
            };
            saveNote(newNote);
          } else {
            window.alert("Choose a suspect");
          }
      
    }
  });

export const ItinerarySavedHTML = (itineraryObj) => {
    const targetPark = document.querySelector(".itinPark")
    // const targetAttraction = document.querySelector(".itinAttraction")
    // const targetEatery = document.querySelector(".itinEatery")
    return targetPark.innerHTML = `
        <h3>Park</h3>
        <p class="addedPark">${document.querySelector(".detailH2").innerHTML}</p>
        // <h3>Attraction</h3>
        // <p class="addedAttraction">${document.querySelector(".detailH2").innerHTML}</p>
        // <h3>Eatery</h3>
        // <p class="addedEatery">${document.querySelector(".detailH2").innerHTML}</p>
    `
}