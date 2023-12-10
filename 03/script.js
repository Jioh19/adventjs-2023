function findNaughtyStep(original, modified) {
  let i = 0;
	for (const orig of original) {
		if (orig != modified[i]) {
      const res = [
        modified[i],
        orig
      ]
			return res[+(original.length > modified.length)] 
		}
    i++;
	}

	return modified[original.length] ?? '';
}

const original = 'stepfor';
const modified = 'stepor';
console.log(findNaughtyStep(original, modified));