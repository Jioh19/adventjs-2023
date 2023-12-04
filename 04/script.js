function decode(message) {
    while (message.includes("(")) {
        var s1 = message.lastIndexOf('(');
        var e1 = message.indexOf(')', s1);
        if (s1 == -1)
            return message;
        var slice1 = message.slice(s1 + 1, e1);
        var cambio = '';
        for (var i = slice1.length - 1; i >= 0; i--) {
            cambio += slice1[i];
        }
        message = message.slice(0, s1) + cambio + message.slice(e1 + 1);
    }
    return message;
}
var a = decode('hola (odnum)');
console.log(a); // hola mundo
var b = decode('(olleh) (dlrow)!');
console.log(b); // hello world!
var c = decode('sa(u(cla)atn)s');
console.log(c);
var d = decode('((nta)(sa))');
console.log(d);
