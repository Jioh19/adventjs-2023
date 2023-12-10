function createChristmasTree(ornaments: string, height: number): string {
	let result = ' '.repeat(height - 1);
	let counter = 1;

	for (let i = 0; i < (height * (height + 1)) / 2; i++) {
		if ((counter * (counter + 1)) / 2 == i) {
			counter++;
			result = result.slice(0, -1);
			result += '\n' + ' '.repeat(height - counter);
		}
		result += `${ornaments[i % ornaments.length]} `;
	}
	result = result.slice(0, -1);
	result += '\n' + ' '.repeat(height - 1) + '|\n';

	return result;
}

console.log(createChristmasTree('123', 5));
