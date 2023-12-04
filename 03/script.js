"use strict";
function findNaughtyStep(original, modified) {
    let result = '';
    let j = 0;
    for (const orig of original) {
        if (orig == modified[j]) {
            j++;
            continue;
        }
        return orig
    }
    return result;
}
const original = 'stepor';
const modified = 'stepfor';
console.log(findNaughtyStep(original, modified));
