const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

for (const ingredient of ingredients) {
  
	const itemEl = document.createElement("li");

	itemEl.textContent = ingredient;
	itemEl.classList.add("item");

  	const listEl = document.querySelector("#ingredients");

		listEl.append(itemEl);
}
 


