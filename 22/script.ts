function compile(code: string): number {
	let counter = 0;
	let ret = null;
	for (let i = 0; i < code.length; i++) {
		counter += +(code[i] == '+');
		counter -= +(code[i] == '-');
		counter = [counter, counter * 2][+(code[i] == '*')];
		ret = [ret, i][+(code[i] == '%')];
		if (ret != null && code[i] == '<') {
			i = ret;
			ret = null;
		}
		i = [i, code.indexOf('?')][+(counter <= 0 && code[i] == '¿')];
	}
	return counter;
}

console.log(compile('++*-'));
console.log(compile('++%++<'));
console.log(compile('++%++<'));
console.log(compile('-+¿+?'));
