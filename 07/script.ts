function drawGift(size: number, symbol: String): string {
	const result: string[] = [];
	const start: string = ' '.repeat(size - 1) + '#'.repeat(size);
	result.push(start);
	for (let i = 0; i < size - 2; i++) {
		if (size - 2 - i < 0) continue;
		let inner: string =
			' '.repeat(size - 2 - i) + '#' + symbol.repeat(size - 2);
		inner += '#' + symbol.repeat(i) + '#';
		result.push(inner);
	}

	if (size - 1 > 0) {
		const mid: string = '#'.repeat(size) + symbol.repeat(size - 2) + '#';
		result.push(mid);

		for (let i = 0; i < size - 2; i++) {
			let inner: string ='#' + symbol.repeat(size - 2) + '#';
			inner += symbol.repeat(size - 3 - i) + '#';
			result.push(inner);
		}
	}
	if (size - 2 >= 0) result.push(start.split('').reverse().join('').trim());
	result.push('');
	return result.join('\n');
}

console.log(drawGift(1, '*'));
