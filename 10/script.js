function createChristmasTree(ornaments, height) {
    console.log(ornaments, height);
    var index = 0;
    var result = '';
    for (var i = 0; i < height; i++) {
        var line = ' '.repeat(height - 1 - i);
        for (var j = 0; j < i + 1; j++) {
            line += "".concat(ornaments[index], " ");
            if (index == ornaments.length - 1) {
                index = 0;
            }
            else {
                index++;
            }
        }
        line = line.trimEnd();
        line += '\n';
        result += line;
    }
    result += ' '.repeat(height - 1) + '|\n';
    return result;
}
console.log(createChristmasTree('123', 4));
