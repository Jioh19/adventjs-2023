function organizeGifts(gifts) {
    var amounts = gifts.match(/\d+[a-zA-Z]+/g);
    var str = '';
    for (var _i = 0, _a = amounts.entries(); _i < _a.length; _i++) {
        var _b = _a[_i], i = _b[0], gift = _b[1];
        var c = gift[gift.length - 1];
        var amount = Number(gift.slice(0, gift.length - 1));
        console.log(i, c, amount);
        var pallet = (amount / 50) | 0;
        var box = ((amount % 50) / 10) | 0;
        var unit = amount % 10;
        var sUnit = '(' + c.repeat(unit) + ')';
        str += "[".concat(c, "]").repeat(pallet) + "{".concat(c, "}").repeat(box);
        str += sUnit.repeat(unit > 0);
    }
    return str;
}
var result1 = organizeGifts("76a11b");
console.log(result1);
