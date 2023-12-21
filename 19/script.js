function revealSabotage(store) {
	const range = [-1, 0, 1];
	const row = store.length;
	const col = store[0].length;

	let i = 0;
	for (const m of store) {
		let j = 0;
		for (const n of store[i]) {
			if (store[i][j] === '*') {
				for (const x of range) {
					for (const y of range) {
						const checkX = [false, false, true][+(i + x >= 0) + +(i + x < row)];
						const checkY = [false, false, true][+(j + y >= 0) + +(j + y < col)];
						if (checkX && checkY && store[i + x][j + y] !== '*') {
							store[i + x][j + y]++;
							store[i + x][j + y] = store[i + x][j + y].toString();
						}
					}
				}
			}
			j++;
		}
		i++;
	}
	return store;
}
var store = [
	['*', ' ', ' ', ' '],
	[' ', ' ', '*', ' '],
	[' ', ' ', ' ', ' '],
	['*', ' ', ' ', ' '],
];
console.log(revealSabotage(store));
