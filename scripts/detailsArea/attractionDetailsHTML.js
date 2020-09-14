import { yesOrNo } from "./TrueOrFalse.js";

const imagePreview = document.querySelector(".imagePreview")
const locationTarget = document.querySelector(".locationContainer")
const summaryTarget = document.querySelector(".summaryContainer")
const keyDetailsTarget = document.querySelector(".keyDetailsContainer")

export const attractionDetails= (Obj) => {
    locationTarget.innerHTML = `
    <h4>Location</h4>
    <p>Name: ${Obj.name}</p>
    <p>State: ${Obj.state}</p>
    <p>City: ${Obj.city}</p>
    `
    summaryTarget.innerHTML = `
    <h4>Summary</h4>
    <p>${Obj.description}</p>
    `
    keyDetailsTarget.innerHTML = `
    <h4>Key Details</h4>
    <li>Souvenirs: ${yesOrNo(Obj.ameneties.souvenirs)}</li>
    <li>Restrooms: ${yesOrNo(Obj.ameneties.restrooms)}</li>
    `
}
