function calculateTime(deliveries: string[]) {
	const timeLimit = 7 * 60 * 60;
	let totalTime: number = 0;
	for (const time of deliveries) {
		const [h, m, s] = time.split(':');
		totalTime += +h * 60 * 60;
		totalTime += +m * 60;
		totalTime += +s;
	}
	totalTime = timeLimit - totalTime;

	const negative = totalTime > 0;
	totalTime = Math.abs(totalTime);
	const hour = totalTime / 3600;
	const minute = (totalTime / 60) % 60;
	const second = (totalTime) % 60;
	const strhour = hour.toString().padStart(2, '0');
	const strminute = minute.toString().padStart(2, '0');
	const strsecond = second.toString().padStart(2, '0');

	return `${'-'.repeat(negative)}${strhour}:${strminute}:${strsecond}`;
}
console.log(calculateTime(['00:10:00', '01:00:00', '03:30:00']));

console.log(calculateTime(['00:10:00', '01:00:00', '03:30:00'])); //-02:20:00
console.log(calculateTime(['02:00:00', '05:00:00', '00:30:00'])); //-00:30:00
console.log(calculateTime(['00:10:00', '01:00:00', '03:30:00']));
console.log(calculateTime(['00:10:00', '01:00:00', '03:30:00']));