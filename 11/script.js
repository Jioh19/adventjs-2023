function getIndexsForPalindrome(word) {
	function isPalindrome(str) {
		for (let i = 0; i < str.length / 2; i++) {
			if (str[i] !== str[str.length - i - 1]) {
				return false;
			}
		}
		return true;
	}

	if (isPalindrome(word)) return [];

	for (let i = 0; i < word.length; i++) {
    if(word[i] != word[word.length - i - 1]) {
      for (let j = i; j < word.length; j++) {
        let swapped = word.slice(0, i) + word[j];
        swapped += word.slice(i + 1, j) + word[i] + word.slice(j + 1);
        console.log("1: ", swapped, i, j);
        if (isPalindrome(swapped)) {
          return [i, j];
        }
        swapped = word.slice(0, i) + word[j];
				swapped +=
					word.slice(i + 1, j) +
					word[i + word.length / 2 - 1] +
					word.slice(j + word.length / 2);
        console.log("2: ", swapped, i, j)
      }
      // for (let j = word.length - 1; j > i; j--) {
      //   let swapped = word.slice(0, i) + word[j];
      //   swapped += word.slice(i + 1, j) + word[i] + word.slice(j + 1);
      //   console.log(swapped)
      // }

    }
	}
	return null;
}
//console.log(getIndexsForPalindrome('asadsaababa'));
//console.log(getIndexsForPalindrome('aaaabba'));
//console.log(getIndexsForPalindrome('aaababa'));
console.log(getIndexsForPalindrome('rotaratov'));
