function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
	inputEl: document.querySelector("#controls input"),
	boxEl: document.querySelector("#boxes"),
	createBtnEl: document.querySelector("button[data-create]"),
	destroyBtnEl: document.querySelector("button[data-destroy]"),
};

function onCreateDivColor(amount) {
	
console.log(amount);

	const elementsToAdd = [];

	for (let i = 0; i < amount; i += 1) {
		const div = document.createElement("div");

		div.style.height = `${30 + 10 * i}px`;
		div.style.width = `${30 + 10 * i}px`;
		div.style.background = getRandomHexColor();

		elementsToAdd.push(div);
	}

	return elementsToAdd;
}

refs.createBtnEl.addEventListener("click", () => {
	let boxesToAdd = onCreateDivColor(refs.inputEl.value);
	refs.boxEl.append(...boxesToAdd);
});

refs.destroyBtnEl.addEventListener("click", () => {
	refs.boxEl.innerHTML = "";
});