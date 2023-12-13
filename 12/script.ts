function checkIsValidCopy(original: string, copy: string) {
	const o = ['#', '+', ':', '.'];
	const c = ['#', '+', ':', '.', ' '];
	let i = 0;
	for (const w of original) {
		if (w != copy[i] && w.toLowerCase() != copy[i]) {
			//console.log( w, copy[i], i);
			const co = c.slice(o.indexOf(w) + 1).includes(copy[i]);
			if (!co || w == ' ') {
				return false;
			}
		}
		i++;
	}
	return true;
}

console.log(checkIsValidCopy('S#n:a Claus', 'S#+:. c:. s'));
console.log(checkIsValidCopy('Santa Claus is coming', 'p#nt: cla#s #s c+min#'));