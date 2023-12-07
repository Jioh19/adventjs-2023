function maxDistance(movements: string): number {
	let mov = 0;
  let any = movements.length;
	movements = movements.replaceAll('*', '');
  any -= movements.length;
	for (const move of movements) {
		mov += move.charCodeAt(0) - 61;
	}
	mov = Math.abs(mov);
	mov += any;
	return mov;
}

console.log(maxDistance('>>*<'));