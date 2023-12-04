function decode(message: string) {
	while (message.includes('(')) {
		const s1 = message.lastIndexOf('(');
		const e1 = message.indexOf(')', s1);
		const slice1 = message.slice(s1 + 1, e1);
		const cambio = slice1.split('').reverse().join('');
		message = message.slice(0, s1) + cambio + message.slice(e1 + 1);
	}
	return message;
}

const a = decode('hola (odnum)');
console.log(a); // hola mundo

const b = decode('(olleh) (dlrow)!');
console.log(b); // hello world!

const c = decode('sa(u(cla)atn)s');
console.log(c);

const d = decode('((nta)(sa))');
console.log(d);
