const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
	event.preventDefault();

	const elementsForm = event.currentTarget.elements;

	const mail = elementsForm.email.value;
	const password = elementsForm.password.value;

	if (elementsForm.email.value === "") {
		return alert("Все поля формы должны быть заполнены");
	} else if (elementsForm.password.value === "") {
		return alert("Все поля формы должны быть заполнены");
	}

	const formData = { mail, password };
	console.log(formData);
	event.currentTarget.reset();
}
