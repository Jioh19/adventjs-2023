function createChristmasTree(ornaments: string, height: number): string {
	console.log(ornaments, height);
	let index = 0;
	let result = '';
	for (let i = 0; i < height; i++) {
		let line = ' '.repeat(height - 1 - i);
		for (let j = 0; j < i + 1; j++) {
			line += `${ornaments[index]} `;
			if (index == ornaments.length - 1) {
				index = 0;
			} else {
				index++;
			}
		}
		line = line.trimEnd();
		line += '\n';
		result += line;
	}
	result += ' '.repeat(height - 1) + '|\n';
	return result;
}

console.log(createChristmasTree('123', 4));
