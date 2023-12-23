function compile(code) {
	let counter = 0;
	let ret = null;
	for (let i = 0; i < code.length; i++) {
		counter += +(code[i] == '+');
		counter -= +(code[i] == '-');

		counter = [counter, counter * 2][+(code[i] == '*')];

		ret = [ret, counter][+(code[i] == '%')];
		// counter += [0, counter - ret][+(ret != null) * +(code[i] == '<')];
		// ret = [ret, null][+(ret != null) * +(code[i] == '<')];

		console.log(counter, ret)
		// const condicion = [
		// 	(counter <= 0),
		// 	(code[i] == '<'),
		// ][+(counter <= 0 < code[i] == '<')];
		[counter, ret] = [[0, ret],[counter - ret, null]][+(counter <= 0) * +(code[i] == '<')];
		console.log(counter, ret)

		i = [i, code.indexOf('?')][+(counter <= 0) * +(code[i] == '¿')];
	}
	return counter;
}
console.log(compile('++*-'));
console.log(compile('++%++<'));
console.log(compile('++%++<'));
console.log(compile('-+¿+?'));
