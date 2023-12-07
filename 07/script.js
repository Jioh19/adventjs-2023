function drawGift(size, symbol) {
    var result = [];
    var start = ' '.repeat(size - 1) + symbol.repeat(size);
    result.push(start);
    for (var i = 0; i < size - 2; i++) {
        if (size - 2 - i < 0)
            continue;
        var inner = ' '.repeat(size - 2 - i) +
            '#' +
            symbol.repeat(size - 2) +
            '#' +
            symbol.repeat(i) +
            '#';
        result.push(inner);
    }
    if (size - 2 >= 0) {
        var mid = '#'.repeat(size) + symbol.repeat(size - 2) + '#';
        result.push(mid);
    }
    for (var i = 0; i < size - 2; i++) {
        result.push(result[size - 2 - i].split('').reverse().join(''));
    }
    result.push(start.split('').reverse().join(''));
    result.push('');
    return result;
}
console.log(drawGift(1, '*'));
