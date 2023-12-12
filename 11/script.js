function getIndexsForPalindrome(word) {
	const len = word.length;
	const arr = [];
	const arr2 = new Array(Number.parseInt(len / 2)).fill(0);
	
	for (const [i, zero] of arr2.entries()) {
		if (word[i] != word[len - i - 1]) {
			arr.push(i, len - i - 1);
		}
	}

	let pivot;
	if (arr.length == 0) return [];
	//console.log('arr: ', arr);
	if (arr.length == 2 && word.length % 2 != 0 ){

		pivot = len / 2 - 0.5;
		return word[arr[0]] == word[pivot] ? [pivot, arr[1]] : [arr[0], pivot];
	}
	if (arr.length == 4 && word.length % 2 == 0) {
		if (word[arr[0]] == word[arr[2]] && word[arr[1]] == word[arr[3]])
			return [arr[0], arr[3]];
	//	console.log(word[arr[0]], word[arr[1]], word[arr[2]], word[arr[3]]);
		if (word[arr[0]] == word[arr[3]] && word[arr[1]] == word[arr[2]]) {
			//console.log('entro');
			return [arr[0], arr[2]];
		}
	}
	return null;
}

console.log(getIndexsForPalindrome('abab'));
console.log(getIndexsForPalindrome('aaaabaaaa'));
console.log(getIndexsForPalindrome('rasdfdsaf'));
console.log(getIndexsForPalindrome('aaababa'));
console.log(getIndexsForPalindrome('rotaratov'));
console.log(getIndexsForPalindrome('saippuakivikauppias'));
