function cyberReindeer(road: string, time: number): string[] {
	const result: string[] = [];
	let pos = 0;
	road = road.replace('S', '.');
	for (let tiempo = 0; tiempo < time; tiempo++) {
		let actual = road.slice(0, pos) + 'S' + road.slice(pos + 1);
		result.push(actual);
		if (tiempo == 4) road = road.replaceAll('|', '*');
		if (road.charAt(pos + 1) != '|') pos++;
	}
	return result;
}

const road = 'S..|...|..';
const time = 10; // unidades de tiempo
const result = cyberReindeer(road, time);
console.log(result);
