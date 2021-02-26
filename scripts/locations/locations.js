export const locations = (locationsObj) => {
    return(
        `<nav class="tipsArea">
            <ul class="tipsList">${locationsObj.name}
                <li class="">${locationsObj.tip}</li>
            </ul>
        </nav>`
    )
}
