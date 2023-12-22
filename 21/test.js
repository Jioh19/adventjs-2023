function findBalancedSegment(message) {
	let maxLen = 0;
	let startIndex = -1;

	//let i = 0;
	for (let i = 0; i < message.length; i++) {
		let count0 = 0;
		let count1 = 0;
		//let j = i;
		for (let j = i; j < message.length; j++) {
			count0 += +(message[j] == 0);
			count1 += +(message[j] != 0);

			if (count0 === count1 && j - i + 1 > maxLen) {
				maxLen = j - i + 1;
				startIndex = i;
			}
//
		}
		//i++;
	}
	return [[startIndex, maxLen + startIndex - 1], []][+(startIndex == -1)];
}
// console.log(findBalancedSegment([1, 1, 0, 1, 1, 0, 1, 1]));
// console.log(findBalancedSegment([1, 0, 1]));
// console.log(findBalancedSegment([1, 1, 0]));
// console.log(findBalancedSegment([1, 0, 0, 0, 1, 1, 1, 0, 0, 0]));
console.log(findBalancedSegment([0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1]));
