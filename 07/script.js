function drawGift(size, symbol) {
    var result = new Array(size);
    var start = ' '.repeat(size - 1) + '#'.repeat(size);
    result[0] = start;
    for (var _i = 0, _a = result.slice(0, size - 2); _i < _a.length; _i++) {
        var _b = _a[_i], i = _b[0], c = _b[1];
        // }
        // for (let i = 0; i < size - 2; i++) {
        var up = ' '.repeat(size - 2 - i) + '#' + symbol.repeat(size - 2);
        up += '#' + symbol.repeat(i) + '#';
        result[i + 1] = up;
        var lo = '#' + symbol.repeat(size - 2) + '#';
        lo += symbol.repeat(size - 3 - i) + '#';
        result.push(lo);
    }
    if (size > 1) {
        var mid = '#'.repeat(size) + symbol.repeat(size - 2) + '#';
        result[size - 1] = mid;
        result.push(start.split('').reverse().join('').trim());
    }
    result.push('');
    return result.join('\n');
}
console.log(drawGift(1, '*'));
