const valueInputEl = document.querySelector("#validation-input");

valueInputEl.addEventListener("blur", onValueInputEl);


function onValueInputEl(event) {
    if (event.currentTarget.value.length == valueInputEl.getAttribute("data-length")) {
        valueInputEl.classList.add("valid");
        valueInputEl.classList.remove("invalid");
    } else {
        valueInputEl.classList.add("invalid");
        valueInputEl.classList.remove("valid");
        }
 
}
