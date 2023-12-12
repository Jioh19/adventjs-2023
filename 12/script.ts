function checkIsValidCopy(original: string, copy: string) {
	const o = ['#', '+', ':', '.'];
	const c = ['#', '+', ':', '.', ' '];
	original = original.toLowerCase();
	let i = 0;
	for (const w of original) {
		const co = c.slice(o.indexOf(w) + 1).includes(copy[i]);
		if (w != copy[i] && (!co || w == ' ')) {
			return false;
		}
		i++;
	}
	return true;
}
