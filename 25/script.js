function travelDistance(map) {
	let len = map.indexOf('\n') +1;
    len ||= map.length;
	const chars = [...map.matchAll('[1-9S]')];
	chars.sort();
	let moves = 0;
	let i = (chars.at(-1).index / len) | 0;
	let j = chars.at(-1).index % len;
	for (const c of chars.slice(0, chars.length - 1)) {
		let mi = (c.index / len) | 0;
		let mj = c.index % len;
		moves += Math.abs(mi - i) + Math.abs(mj - j);
		i = mi;
		j = mj;
	}
	return moves;
}

const map = `.....1....
..S.......
..........
....3.....
......2...`;

//console.log(travelDistance(map));
console.log(travelDistance(`S12....3`));