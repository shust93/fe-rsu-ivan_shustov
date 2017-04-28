"use strict";
var allNumbers = [1, 2, 4, 5, 6, 7, 8];
var someNumbers = [1, 2, "привет", 4, 5, "ololo", 6, 7, 8];
var noNumbers = ["это", "массив", "без", "чисел"];

function isAllTrue(src, filterFn) {
    if (src.length === 0) {
        console.log("Массив пустой");
    }
    var result = true;
    var i = 0;
    while (result !== false && i < src.length) {
        if (filterFn(src[i]) !== true) {
            result = false;
        }
        i += 1;
    }
    return result;
}

function isNumber(val) {
    return typeof val === "number";
}
console.log(isAllTrue(allNumbers, isNumber)); //вернет true
console.log(isAllTrue(someNumbers, isNumber)); //вернет false
console.log(isAllTrue(noNumbers, isNumber)); //вернет false

