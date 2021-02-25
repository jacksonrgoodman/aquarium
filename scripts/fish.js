export const Fish = (fishObj) => {
    return(
        `<article class="fish-card">
            <div><img class="fish-image" src="${fishObj.image}" alt="Fish" /></div>
            <h3 class="fish-name">Name: ${fishObj.name}</h3>
            <ul>
                <li class="fish-details">Species: ${fishObj.species}</li>
                <li class="fish-details">Length: ${fishObj.inches} in.</li>
                <li class="fish-details">Found: ${fishObj.harvestLocation}</li>
                <li class="fish-details">Diet: ${fishObj.diet}</li>
                <li class="fish-details">Saltwater: ${fishObj.saltwater}</li>
            </ul>
        </article>`
    )
}