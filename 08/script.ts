function organizeGifts(gifts) {
	const amounts = gifts.match(/\d+[a-z]/g);
	let resultArray = '';

	for (const gift of amounts) {
		const c = gift.at(-1);
		const amount = Number.parseInt(gift);
		const unit = amount % 10;
		const sUnit = '(' + c.repeat(unit) + ')';
		resultArray += `[${c}]`.repeat(amount / 50);
		resultArray += `{${c}}`.repeat((amount % 50) / 10);
		resultArray += sUnit.repeat(unit > 0);
	}
	return resultArray;
}

const result1 = organizeGifts(`76a11b`);
console.log(result1);
