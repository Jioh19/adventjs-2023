function createChristmasTree(ornaments: string, height: number) {
	let decoration = ornaments.split('').join(' ') + ' ';
	let totalDecoration = (height * (height + 1)) / 2;
	totalDecoration /= ornaments.length;
	let decorations = decoration.repeat(totalDecoration + 1);
	let index = 0;
	const arr = Array.from({ length: height }).keys();
	let result = '';
	for (const i of arr) {
		result += ' '.repeat(height - 1 - i);
		result += decorations.slice(index, index + i * 2 + 1) + '\n';
		index += (i + 1) * 2;
	}
	result += ' '.repeat(height - 1) + '|\n';
	return result;
}

console.log(createChristmasTree('123', 4));
