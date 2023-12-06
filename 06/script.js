function maxDistance(movements) {
    var mov = 0;
    var any = movements.length;
    movements = movements.replaceAll('*', '');
    any -= movements.length;
    for (var i = 0; i < movements.length; i++) {
        mov += movements.charCodeAt(i) - 61;
    }
    mov = Math.abs(mov);
    console.log(any, movements);
    mov += any;
    return mov;
}
console.log(maxDistance('>>*<'));
