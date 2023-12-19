function revealSabotage(store) {
    var range = [-1, 0, 1];
    var row = store.length;
    var col = store[0].length;
    var i = 0;
    for (var _i = 0, store_1 = store; _i < store_1.length; _i++) {
        var m = store_1[_i];
        var j = 0;
        for (var _a = 0, _b = store[i]; _a < _b.length; _a++) {
            var n = _b[_a];
            if (store[i][j] === '*') {
                for (var _c = 0, range_1 = range; _c < range_1.length; _c++) {
                    var x = range_1[_c];
                    for (var _d = 0, range_2 = range; _d < range_2.length; _d++) {
                        var y = range_2[_d];
                        var checkX = i + x >= 0 && i + x < row;
                        var checkY = j + y >= 0 && j + y < col;
                        if (checkX && checkY && store[i + x][j + y] !== '*') {
                            store[i + x][j + y]++;
                            store[i + x][j + y] = store[i + x][j + y].toString();
                        }
                    }
                }
            }
            j++;
        }
        i++;
    }
    return store;
}
var store = [
    ['*', ' ', ' ', ' '],
    [' ', ' ', '*', ' '],
    [' ', ' ', ' ', ' '],
    ['*', ' ', ' ', ' '],
];
console.log(revealSabotage(store));
