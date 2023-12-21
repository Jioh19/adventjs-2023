function distributeGifts(weights) {
	const range = [-1, 1];
	let i = 0;
	const rows = weights.length;
	const cols = weights[0].length;
	//console.log(rows, cols);
	const result = [];
	for (const row of weights) {
		let j = 0;
		let resultRow = [];
		for (const col of weights[i]) {
			let sum = 0;
			let div = +(col != null);
			//console.log("COL", col, i, j);

      const check = [
        weights[i-1]?.[j],
        weights[i+1]?.[j],
        row[j-1],
        row[j],
        row[j+1],
      ].filter(Boolean);

      for (const ck of check) {
        sum += ck;
      }
      resultRow.push(Math.round(sum/check.length));
			j++;
		}
		result.push(resultRow);
		i++;
	}
	return result;
}
console.log(
	distributeGifts([
		[4, 5, 1],
		[6, null, 3],
		[8, null, 4],
	])
);
