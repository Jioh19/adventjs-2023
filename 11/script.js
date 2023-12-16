function getIndexsForPalindrome(word) {
	const len = word.length;
	const arr = [];
	const arr2 = new Array(Number.parseInt(len / 2)).fill(0);
	for (const [i, zero] of arr2.entries()) {
		if (word[i] != word[len - i - 1]) {
			arr.push(i, len - i - 1);
		}
	}
	let p;

	if (arr.length == 2 && word.length %2 != 0) {
		p = len / 2 - 0.5;
		const lengthTwo = [
			[arr[0], p],
			[p, arr[1]],
		];
		return lengthTwo[+(word[arr[0]] == word[p])];
	}
	if (arr.length == 4 && word.length % 2 == 0) {
		if (word[arr[1]] == word[arr[2]]) {
			return [arr[0], arr[2]];
		}
	}
	const aux = [null, []];
	return aux[+(arr.length == 0)];
}

console.log(getIndexsForPalindrome('abab'));
console.log(getIndexsForPalindrome('aaaabaaaa'));
console.log(getIndexsForPalindrome('rasdfdsaf'));
console.log(getIndexsForPalindrome('aaababa'));
console.log(getIndexsForPalindrome('rotaratov'));
console.log(getIndexsForPalindrome('saippuakivikauppias'));
console.log(getIndexsForPalindrome('ba'));