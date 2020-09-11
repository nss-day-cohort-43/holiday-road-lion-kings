// I need to add logic to better display amenities. like, "if true add 'yes'"

export const EateryHTML = (eateryObj) => {
    return `
        <h3>${eateryObj.businessName}</h3>
        <p>${eateryObj.description}</>
        <>${eateryObj.city}, ${eateryObj.state}</>

        <ul>Amenities</ul>
        <li>Pet Friendly? ${eateryObj.petFriendly}</li>
        <li>Diaper Facility? ${eateryObj.diaperFacility}</li>
        <li>Playground? ${eateryObj.playground}</li>
        <li>Restrooms? ${eateryObj.restrooms}</li>
    `
}

