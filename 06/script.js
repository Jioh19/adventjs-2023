function maxDistance(movements) {
    var mov = 0;
    var any = movements.length;
    movements = movements.replaceAll('*', '');
    any -= movements.length;
    for (var _i = 0, movements_1 = movements; _i < movements_1.length; _i++) {
        var move = movements_1[_i];
        mov += move.charCodeAt(0) - 61;
    }
    mov = Math.abs(mov);
    mov += any;
    return mov;
}
console.log(maxDistance('>>*<'));
