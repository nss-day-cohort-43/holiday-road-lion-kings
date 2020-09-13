import { useEateries, getEateries } from "./EateryProvider.js";

const eventHub = document.querySelector(".container");
const contentTarget = document.querySelector(".menuInfo");

eventHub.addEventListener("click", (event) => {
  if (event.target.id.startsWith("eatery--")) {
    const [prefix, eateryId] = event.target.id.split("--");

    const eateryEvent = new CustomEvent("eaterySelected", {
      detail: {
        eatery: eateryId,
      },
    });
    eventHub.dispatchEvent(eateryEvent);
  }
});

export const EaterySelect = () => {
  getEateries().then(() => {
    const eateryArray = useEateries();
    render(eateryArray);
  });
};

const render = (eateryCollection) => {
  return (contentTarget.innerHTML = `
      ${eateryCollection
        .map((eateryObj) => {
          return `<p id="eatery--${eateryObj.businessName}">${eateryObj.businessName}</p>`;
        })
        .join("")}
  `);
};
