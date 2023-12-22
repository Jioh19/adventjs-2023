function findBalancedSegment(message) {
	let total = 0;
	for (const num of message) {
		total += num;
	}
	let number = [0, 1][+(total < message.length / 2)];
	console.log(number, total)
	total = [total, message.length-total][+(total > message.length / 2)];
	let first = message.indexOf(number);
	let last = message.lastIndexOf(number);
	console.log(message, number,total,  message.length, first, last);
	if (total*2> last){
		first = 0
		last = total*2 -1
	} else {
		first += last - first + 1 -total*2;
	}
	for (const num of message.slice(first, last+1)) {
		console.log(num)
	}
	return [[], [first, last]][+(first+last > 0)];
}
console.log(findBalancedSegment([1, 1, 0, 1, 1, 0, 1, 1]));
console.log(findBalancedSegment([1, 0, 1]));
console.log(findBalancedSegment([1, 1, 0]));
console.log(findBalancedSegment([1, 0, 0, 0, 1, 1, 1, 0, 0, 0]));
console.log(findBalancedSegment([0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1]));