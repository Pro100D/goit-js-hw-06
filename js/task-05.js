const refs = {
	input: document.querySelector("#name-input"),
	output: document.querySelector("#name-output"),
};

refs.input.addEventListener("input", onKeydownInput);

function onKeydownInput(event = 'anonimus') {
    
    refs.output.textContent = event.currentTarget.value;
    
	if (event.currentTarget.value === "") {
		refs.output.textContent = "Anonymous";
    };
    
}
