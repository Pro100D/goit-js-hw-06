const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

const liArray = [];

for (const ingredient of ingredients) {
  
	const itemEl = document.createElement("li");

	itemEl.textContent = ingredient;
	itemEl.classList.add("item");

	liArray.push(itemEl);
}
 
 	const listEl = document.querySelector("#ingredients");

listEl.append(...liArray);

