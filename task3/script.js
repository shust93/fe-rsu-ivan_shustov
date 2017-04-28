"use strict";
function consoleRec(arr, i) {
    if (i === undefined) {
        i = 0;
    }	
    if (i < arr.length) {
        console.log(arr[i]);
        i += 1;
        consoleRec(arr, i);
    }
    if (i = arr.length) {
        i = 0;
    }
}

var array = ["я", "умею", "писать", "рекурсивные", "функции"];
consoleRec(array);
consoleRec(array);
