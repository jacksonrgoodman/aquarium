export const tips = (tipsObj) => {
    return(
        `<nav class="tipsArea">
            <ul class="tipsList">${tipsObj.name}
                <li class="">${tipsObj.tip}</li>
            </ul>
        </nav>`
    )
}
