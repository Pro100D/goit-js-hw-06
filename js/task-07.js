const fontSizeEl = document.querySelector("#font-size-control");
const sizeTextEl = document.querySelector("#text");

fontSizeEl.addEventListener("input", onFontSizeText);

function onFontSizeText(event) {
    
    //  console.log(event.currentTarget.value);
     
    sizeTextEl.style.fontSize = `${event.currentTarget.value}px`;
    
};