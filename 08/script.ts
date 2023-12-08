function organizeGifts(gifts: string): string {
	const amounts = gifts.match(/\d+[a-z]/g);

	const resultArray: string[] = [];

	for (const gift of amounts) {
		const c = gift[gift.length - 1];
		const amount: number = Number(gift.slice(0, -1));
		const pallet = amount / 50;
		const box = (amount % 50) / 10;
		const unit = amount % 10;
		const sUnit = '(' + c.repeat(unit) + ')';
		const palletStr = `[${c}]`.repeat(pallet);
		const boxStr = `{${c}}`.repeat(box);
		const unitStr = sUnit.repeat(unit > 0);

		resultArray.push(palletStr + boxStr + unitStr);
	}

	return resultArray.join('');
}

const result1 = organizeGifts(`76a11b`);
console.log(result1);
