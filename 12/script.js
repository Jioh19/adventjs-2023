function checkIsValidCopy(original, copy) {
    var o = ['#', '+', ':', '.'];
    var c = ['#', '+', ':', '.', ' '];
    original = original.toLowerCase();
    var i = 0;
    for (var _i = 0, original_1 = original; _i < original_1.length; _i++) {
        var w = original_1[_i];
        var co = c.slice(o.indexOf(w) + 1).includes(copy[i]);
        if (w != copy[i] && (!co || w == ' ')) {
            return false;
        }
        i++;
    }
    return true;
}
