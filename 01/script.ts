function findFirstRepeated(gifts: number[]) {
	let aux: number[] = [];
	for (const gift of gifts) {
		let result:number = -1;
    aux.forEach((num) => {
			if (num == gift) result= gift;
		});
    if(result != -1) return result
		aux.push(gift);
	}
	return -1;
}

const result = findFirstRepeated([2, 1, 3, 5, 3, 2]);
console.log(result);