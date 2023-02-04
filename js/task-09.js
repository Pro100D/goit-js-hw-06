function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
	colorBody: document.querySelector("body"),
	btnColorChanceEl: document.querySelector(".change-color"),
	spanColorEl: document.querySelector(".color"),
};

refs.btnColorChanceEl.addEventListener("click", onBackGraundChenceColor);

function onBackGraundChenceColor(event) {
  refs.colorBody.style.backgroundColor = getRandomHexColor();
  refs.spanColorEl.textContent = getRandomHexColor();
}
