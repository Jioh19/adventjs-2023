function cyberReindeer(road: string, time: number): string[] {
	let result: string[] = [];
	let tiempo = 1;
	let pos = 0;
	let myRoad = road.replace('S', '.');
	result.push(road);
	do {
		if (tiempo == 5) {
			myRoad = myRoad.replaceAll('|', '*');
		}
		if (myRoad.charAt(pos + 1) == '.' || myRoad.charAt(pos + 1) == '*') {
			pos++;
		}
		let actual = myRoad.slice(0, pos) + 'S' + myRoad.slice(pos + 1);
		result.push(actual);
		tiempo++;
	} while (time > tiempo);
	return result;
}

const road = 'S..|...|..';
const time = 10; // unidades de tiempo
const result = cyberReindeer(road, time);
console.log(result);
