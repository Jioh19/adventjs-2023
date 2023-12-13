function calculateTime(deliveries) {
    var timeLimit = 7 * 60 * 60;
    var totalTime = 0;
    for (var _i = 0, deliveries_1 = deliveries; _i < deliveries_1.length; _i++) {
        var time = deliveries_1[_i];
        var _a = time.split(':'), h = _a[0], m = _a[1], s = _a[2];
        totalTime += +h * 60 * 60;
        totalTime += +m * 60;
        totalTime += +s;
    }
    totalTime = timeLimit - totalTime;
    var negative = totalTime > 0;
    totalTime = Math.abs(totalTime);
    var hour = totalTime / 3600;
    var minute = (totalTime / 60) % 60;
    var second = (totalTime) % 60;
    var strhour = hour.toString().padStart(2, '0');
    var strminute = minute.toString().padStart(2, '0');
    var strsecond = second.toString().padStart(2, '0');
    return "".concat('-'.repeat(negative)).concat(strhour, ":").concat(strminute, ":").concat(strsecond);
}
console.log(calculateTime(['00:10:00', '01:00:00', '03:30:00']));
console.log(calculateTime(['00:10:00', '01:00:00', '03:30:00'])); //-02:20:00
console.log(calculateTime(['02:00:00', '05:00:00', '00:30:00'])); //-00:30:00
console.log(calculateTime(['00:10:00', '01:00:00', '03:30:00']));
console.log(calculateTime(['00:10:00', '01:00:00', '03:30:00']));
