function manufacture(gifts: string[], materials: string) {
	const result: string[] = gifts;

	for (let i = gifts.length -1 ; i >= 0; i--) {
		for (const letter of gifts[i])
			if (!materials.includes(letter)) result.splice(i, 1);
	}
	// gifts.forEach((gift) => {
	//   let found: boolean = true;
	//   for (const letter of gift) {
	//     if (!materials.includes(letter)) found = false;
	//   }
	//   (found)? result.push(gift): null;
	// })
	return gifts;
}
console.log(manufacture(['coche', 'muñeca', 'balon'], 'ocmuñalb'));