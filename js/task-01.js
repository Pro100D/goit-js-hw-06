const itemCategoryEl = document.querySelectorAll(".item");

console.log(`Number of categories: ${itemCategoryEl.length}`);


for (const element of itemCategoryEl) {

	console.log(`Category: ${element.firstElementChild.textContent}`);
	console.log(`Elements: ${element.lastElementChild.children.length}`);

}

