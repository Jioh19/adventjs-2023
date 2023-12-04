function findFirstRepeated(gifts) {
    var aux = [];
    var _loop_1 = function (gift) {
        var result_1 = -1;
        aux.forEach(function (num) {
            if (num == gift)
                result_1 = gift;
            console.log(num, gift);
        });
        if (result_1 != -1)
            return { value: result_1 };
        aux.push(gift);
    };
    for (var _i = 0, gifts_1 = gifts; _i < gifts_1.length; _i++) {
        var gift = gifts_1[_i];
        var state_1 = _loop_1(gift);
        if (typeof state_1 === "object")
            return state_1.value;
    }
    return -1;
}
var result = findFirstRepeated([2, 1, 3, 5, 3, 2]);
console.log(result);
