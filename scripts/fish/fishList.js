import { Fish } from "./Fish.js";
import { getFish } from "./fishData.js";
/**Define the steps that need to be taken
 * 1. Get the array of fish
 * 2. Get a reference to the location on the DOM(document object model) where you want to display the list of fish
 * 3. Declare a variable to hold on to fish html representations
 * 4. Loop over the array of fish and for each one, invoke the fish component which returns html representation
 * 5. Finally set the dome equal to the variable containing the fish html representation
**/

export const fishList = () => {
    //Get array of fish
    const allFishes = getFish();
    //get reference to location on DOM
    const DOMLocation = document.querySelector("#fishes");
    //declare a variable
    let fishHTMLReperesentations = "";
    //Loop over the array
    for(const oneThingFromTheSea of allFishes) {
        //do something with oneThingFromTheSea
        fishHTMLReperesentations += Fish(oneThingFromTheSea);
    }
    DOMLocation.innerHTML += `${fishHTMLReperesentations}`;
}