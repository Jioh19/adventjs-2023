function adjustLights(lights) {
	const color = [
		'🟢',
		'🔴'
	]
	let res = 0;
	for (const [index, light] of lights.entries()) {
		res += +(light == color[index%2])
	}
	return Math.min(res, lights.length - res);
}
console.log(adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢']));
