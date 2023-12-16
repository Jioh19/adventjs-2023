function transformTree(tree) {
    function createNode(value, left, right) {
        if (left === void 0) { left = null; }
        if (right === void 0) { right = null; }
        return { value: value, left: left, right: right };
    }
    function buildTree(index) {
        if (index < tree.length && tree[index] !== null) {
            var aux = createNode(tree[index], buildTree(2 * index + 1), buildTree(2 * index + 2));
            return aux;
        }
        return null;
    }
    var result = buildTree(0);
    return result;
}
console.log(transformTree([1, 2, 3, 4, 5]));
