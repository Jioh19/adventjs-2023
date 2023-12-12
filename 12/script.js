function checkIsValidCopy(original, copy) {
	const ori = ['#', '+', ':', '.'];
	const cop = ['#', '+', ':', '.', ' '];
	original = original.toLowerCase();
	let i = 0;
	for (const w of original) {
		if (w != copy[i]) {
			if (w == ' ') return false;
			let oriIndex = ori.indexOf(w);
			let copyIndex = oriIndex + 1;
			// console.log(w, copy[i])
			if (!cop.slice(copyIndex).includes(copy[i])) {
				return false;
			}
		}
		i++;
	}
	return true;
}

//console.log(checkIsValidCopy('Santa Claus', 's#### c####'));  //true
//console.log(checkIsValidCopy('Santa Claus', 'sant##claus+')); //false
console.log(checkIsValidCopy('Santa Claus', 's#+:. c:. s')); //true
