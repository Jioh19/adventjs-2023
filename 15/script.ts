function autonomousDrive(store: string[], movements: string) {

	const myMove = [
		[1, 0],
		[0, -1],
		[0, 1],
		[-1, 0],
	];
	const len = store[0].length;
	const strStore = store.join('');
	let pX = strStore.indexOf('!');
	let pY = (pX / len) | 0;
	pX %= len;
	let lineY = store[pY];
	store[pY] = lineY.slice(0, pX) + '.' + lineY.slice(pX + 1);

	for (const m of movements) {
		let dir = +(m > 'K') + +(m > 'Q') + +(m > 'T');
		let [mY, mX] = myMove[dir];
		let validMov = store.at(pY + mY)?.at(pX + mX) == '.';
		pX = [pX, pX + mX][+validMov];
		pY = [pY, pY + mY][+validMov];
	}
	lineY = store[pY];
	store[pY] = lineY.slice(0, pX) + '!' + lineY.slice(pX + 1);
	return store;
}

