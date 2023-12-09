function adjustLights(lights) {
	const color = ['🟢', '🔴'];
	let res = 0;
	for (const [i, light] of lights.entries()) {
		res += +(light == color[i % 2]);
	}
	return Math.min(res, lights.length - res);
}
console.log(adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢']));
