function drawClock(time) {
	const clock = new Array(7);
	const myMap = new Map();
	myMap.set(' ', [[' '], [' '], [' '], [' '], [' '], [' '], [' ']]);
	myMap.set(':', [[' '], [' '], ['*'], [' '], ['*'], [' '], [' ']]);
	myMap.set('0', [
		['*', '*', '*'],
		['*', ' ', '*'],
		['*', ' ', '*'],
		['*', ' ', '*'],
		['*', ' ', '*'],
		['*', ' ', '*'],
		['*', '*', '*'],
	]);
	myMap.set('1', [
		[' ', ' ', '*'],
		[' ', ' ', '*'],
		[' ', ' ', '*'],
		[' ', ' ', '*'],
		[' ', ' ', '*'],
		[' ', ' ', '*'],
		[' ', ' ', '*'],
	]);

	myMap.set('2', [
		['*', '*', '*'],
		[' ', ' ', '*'],
		[' ', ' ', '*'],
		['*', '*', '*'],
		['*', ' ', ' '],
		['*', ' ', ' '],
		['*', '*', '*'],
	]);
	myMap.set('3', [
		['*', '*', '*'],
		[' ', ' ', '*'],
		[' ', ' ', '*'],
		['*', '*', '*'],
		[' ', ' ', '*'],
		[' ', ' ', '*'],
		['*', '*', '*'],
	]);
	myMap.set('4', [
		['*', ' ', '*'],
		['*', ' ', '*'],
		['*', ' ', '*'],
		['*', '*', '*'],
		[' ', ' ', '*'],
		[' ', ' ', '*'],
		[' ', ' ', '*'],
	]);
	myMap.set('5', [
		['*', '*', '*'],
		['*', ' ', ' '],
		['*', ' ', ' '],
		['*', '*', '*'],
		[' ', ' ', '*'],
		[' ', ' ', '*'],
		['*', '*', '*'],
	]);
	myMap.set('6', [
		['*', '*', '*'],
		['*', ' ', ' '],
		['*', ' ', ' '],
		['*', '*', '*'],
		['*', ' ', '*'],
		['*', ' ', '*'],
		['*', '*', '*'],
	]);
	myMap.set('7', [
		['*', '*', '*'],
		[' ', ' ', '*'],
		[' ', ' ', '*'],
		[' ', ' ', '*'],
		[' ', ' ', '*'],
		[' ', ' ', '*'],
		[' ', ' ', '*'],
	]);
	myMap.set('8', [
		['*', '*', '*'],
		['*', ' ', '*'],
		['*', ' ', '*'],
		['*', '*', '*'],
		['*', ' ', '*'],
		['*', ' ', '*'],
		['*', '*', '*'],
	]);
	myMap.set('9', [
		['*', '*', '*'],
		['*', ' ', '*'],
		['*', ' ', '*'],
		['*', '*', '*'],
		[' ', ' ', '*'],
		[' ', ' ', '*'],
		['*', '*', '*'],
	]);

	console.log(time);

	// for (const val of nums[0]) {
	// 	console.log(i);
  const len = myMap.get(' ').length
  for (let i = 0; i < len; i++) {
    clock[i] = myMap.get(time[0])[i];
    for (const d of time.slice(1)) {
      //console.log(myMap.get(d));
      clock[i] = clock[i].concat(' ');
      clock[i] = clock[i].concat(myMap.get(d)[i]);
      //console.log(clock[i]);
    }
  }
	// 	i++;
	// }
	console.log(
		'\n' +
			result
				.map((r) => r.join(''))
				.join('\n')
				.replaceAll('*', '█')
	);
	return [];
}
drawClock('01:30');

// ***   *   *** ***
// * *   *     * * *
// * *   * *   * * *
// * *   *   *** * *
// * *   * *   * * *
// * *   *     * * *
// ***   *   *** ***
