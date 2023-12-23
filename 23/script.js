function organizeChristmasDinner(dishes) {

	let ing = new Map();
	for (const dish of dishes) {
		for (const elem of dish.slice(1)) {
			let arr = ing.get(elem);
			arr ||= [];
			arr.push(dish[0]);
			ing.set(elem, arr);
		}
	}
	let result = []
	for (const elem of ing ) {
		if (elem.flat().length > 2) {
			elem[1].sort();
			result.push(elem.flat())
		}
	}
	result.sort();
	return result;
}

console.log(
	organizeChristmasDinner([
		['christmas turkey', 'turkey', 'sauce', 'herbs'],
		['cake', 'flour', 'sugar', 'egg'],
		['hot chocolate', 'chocolate', 'milk', 'sugar'],
		['pizza', 'sauce', 'tomato', 'cheese', 'ham'],
	])
);
