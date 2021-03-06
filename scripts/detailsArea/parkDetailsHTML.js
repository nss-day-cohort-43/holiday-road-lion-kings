const locationTarget = document.querySelector(".locationContainer")
const summaryTarget = document.querySelector(".summaryContainer")
const keyDetailsTarget = document.querySelector(".keyDetailsContainer")
const imagePreview = document.querySelector(".parkImage")
const buttonTarget = document.querySelector(".addItinButton")

export const parkDetails= (Obj) => {
    locationTarget.innerHTML = `
    <h2 class="detailH2">${Obj.fullName}</h2>
    <p>${Obj.directionsInfo}</p>
    `
    summaryTarget.innerHTML = `
    <h4>Summary</h4>
    <p>${Obj.description}</p>
    `
    keyDetailsTarget.innerHTML = `
    <h4>Key Details</h4>
    <p>${Obj.operatingHours.map(day => {
        return day.description
    })}</p>
    `
    let images = Obj.images.map(image => {
        return image.url
    })
    imagePreview.innerHTML = `<img src="${images[0]}" alt="park">`

    buttonTarget.innerHTML = `
        <button id="detailsParkButton">Add Park to Itinerary</button>
    `
  
}

