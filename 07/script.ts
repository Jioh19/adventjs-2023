function drawGift(size: number, symbol: String): string {
	if (size < 2) return '#\n';
	const result: string[] = new Array(size * 2);
	const start: string = ' '.repeat(size - 1) + '#'.repeat(size);
	result[0] = start;
	for (let i = 0; i < size - 2; i++) {
		let up: string = ' '.repeat(size - 2 - i) + '#' + symbol.repeat(size - 2);
		up += '#' + symbol.repeat(i) + '#';
		result[i + 1] = up;

		let lo: string = '#' + symbol.repeat(size - 2) + '#';
		lo += symbol.repeat(size - 3 - i) + '#';
		result[size + i] = lo;
	}
	const mid: string = '#'.repeat(size) + symbol.repeat(size - 2) + '#';
	result[size - 1] = mid;
	result[size * 2 - 2] = '#'.repeat(size);
	result[size * 2 - 1] = '';
	return result.join('\n');
}

console.log(drawGift(1, '*'));
