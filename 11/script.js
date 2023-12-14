function getIndexsForPalindrome(word) {
	const len = word.length;
	const arr = [];
	const arr2 = new Array(Number.parseInt(len / 2)).fill(0);
	let result = 0;

	// Convert the string to lowercase to make the palindrome check case-insensitive
	const lowerCaseWord = word.toLowerCase();

	// Iterate through each character in the wording
	for (let i = 0; i < lowerCaseWord.length; i++) {
		// Use XOR (^) to toggle the result value based on the ASCII code of the character
		result ^=
			lowerCaseWord.charCodeAt(i) ^
			lowerCaseWord.charCodeAt(lowerCaseWord.length - 1 - i);
	}

	// If the wording is a palindrome, the result will be 0
	return result === 0;
}


console.log(getIndexsForPalindrome('abab'));
console.log(getIndexsForPalindrome('aaaabaaaa'));
console.log(getIndexsForPalindrome('rasdfdsaf'));
console.log(getIndexsForPalindrome('aaababa'));
console.log(getIndexsForPalindrome('rotaratov'));
console.log(getIndexsForPalindrome('saippuakivikauppias'));
