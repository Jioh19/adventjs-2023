function cyberReindeer(road, time) {
    var result = [];
    var tiempo = 0;
    var pos = 0;
    var onlyRoad = road.replace('S', '.');
    result.push(road);
    while (time > tiempo + 1) {
        if (tiempo == 4) {
            onlyRoad = onlyRoad.replaceAll('|', '*');
        }
        if (onlyRoad.charAt(pos + 1) == '.' || onlyRoad.charAt(pos + 1) == '*') {
            pos++;
        }
        var actual = onlyRoad.slice(0, pos) + 'S' + onlyRoad.slice(pos + 1);
        result.push(actual);
        console.log(tiempo);
        tiempo++;
    }
    // while (result[result.length - 1].indexOf("S") != road.length - 2) {
    //   time++;
    // }
    return result;
}
var road = 'S..|...|..';
var time = 10; // unidades de tiempo
var result = cyberReindeer(road, time);
console.log(result);
