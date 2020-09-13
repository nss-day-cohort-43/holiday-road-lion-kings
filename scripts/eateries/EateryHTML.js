// needs custom event for when user chooses an eatery. when user chooses, then that info will populate this form

export const EateryHTML = (eateryObj) => {
    // this will need to be inserted under amenities unordered list and iterated with counter loop?
    const amenities = `${eateryObj.amenities}`
    for (const [key, value] of amenities.entries()) {
        console.log(`${key}: ${value}`)
    };

    return `
        <h3>${eateryObj.businessName}</h3>
        <p>${eateryObj.description}</p>
        <p>${eateryObj.city}, ${eateryObj.state}</p>
        <ul>Amenities</ul>
            <li>Pet Friendly? ${eateryObj.petFriendly}</li>
            <li>Diaper Facility? ${eateryObj.diaperFacility}</li>
            <li>Playground? ${eateryObj.playground}</li>
            <li>Restrooms? ${eateryObj.restrooms}</li>
    `
}

