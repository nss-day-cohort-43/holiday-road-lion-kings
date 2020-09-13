const locationTarget = document.querySelector(".locationContainer")
const summaryTarget = document.querySelector(".summaryContainer")
const keyDetailsTarget = document.querySelector(".keyDetailsContainer")
const imagePreview = document.querySelector(".imagePreview")

export const location= (Obj) => {
    locationTarget.innerHTML = `
    <h4>Location</h4>
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
  
}

