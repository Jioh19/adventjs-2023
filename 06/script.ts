function maxDistance(movements: string): number {
	let mov = 0;
  let any = movements.length;
	movements = movements.replaceAll('*', '');
  any -= movements.length;
	for (let i = 0; i < movements.length; i++){
    mov += movements.charCodeAt(i) - 61;
  }
	mov = Math.abs(mov);
	mov += any;
	return mov;
}

console.log(maxDistance('>>*<'));