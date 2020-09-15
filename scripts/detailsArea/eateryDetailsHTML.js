import { yesOrNo } from "./TrueOrFalse.js";

const locationTarget = document.querySelector(".locationContainer")
const summaryTarget = document.querySelector(".summaryContainer")
const keyDetailsTarget = document.querySelector(".keyDetailsContainer")

export const eateryDetails= (Obj) => {
    locationTarget.innerHTML = `
    <h2>${Obj.businessName}</h2>
    <p>Name: ${Obj.businessName}</p>
    <p>State: ${Obj.state}</p>
    <p>City: ${Obj.city}</p>
    `
    summaryTarget.innerHTML = `
    <h4>Summary</h4>
    <p>${Obj.description}</p>
    `
    keyDetailsTarget.innerHTML = `
    <h4>Key Details</h4>
    <li>Wheelchair Accessible: ${yesOrNo(Obj.ameneties.wheelchairAccessible)}</li>
    <li>Pet Friendly: ${yesOrNo(Obj.ameneties.petFriendly)}</li>
    <li>Wifi: ${yesOrNo(Obj.ameneties.wifi)}</li>
    <li>Diaper Facility: ${yesOrNo(Obj.ameneties.diaperFacility)}</li>
    <li>Playground: ${yesOrNo(Obj.ameneties.playground)}</li>
    <li>Restrooms: ${yesOrNo(Obj.ameneties.restrooms)}</li>
    `
}