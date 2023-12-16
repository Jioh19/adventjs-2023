function transformTree(tree: number[]) {
	function createNode(value: number, left = null, right = null) {
		return { value, left, right };
	}

	function buildTree(index: number) {
		if (index < tree.length && tree[index] !== null) {
			const aux = createNode(
				tree[index],
				buildTree(2 * index + 1),
				buildTree(2 * index + 2)
			);
			return aux;
		}
		return null;
	}

	const result = buildTree(0);
	return result;
}
console.log(transformTree([1, 2, 3, 4, 5]));
