const refs = {
	btnDecrementEl: document.querySelector('#counter button[data-action="decrement"]'),
	btnIncrementEl: document.querySelector('#counter button[data-action="increment"]'),
	valueEl: document.querySelector("#value"),
};

refs.btnDecrementEl.addEventListener("click", onClickBtnDecrementEl);
refs.btnIncrementEl.addEventListener("click", onClickBtnIncrementEl);

let counterValue = 0;

function onClickBtnDecrementEl() {
	counterValue -= 1;

	refs.valueEl.textContent = counterValue;
}

function onClickBtnIncrementEl() {
	counterValue += 1;

	refs.valueEl.textContent = counterValue;
}


