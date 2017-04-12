"use strict";

console.log("--Task 1:");
var a = 10;
var b = 20;
console.log(a);
console.log(b);
//---------------------//
console.log("--Task 2:");
function triangleSquare(a, b) {
    return a * b / 2;
}
var s = triangleSquare(a, b);
console.log(s);
console.log("--Task 3:");
var myarray = [1, 2, 3, 4, 5];
console.log("before:");
console.log(myarray);
function reversefor(myarray) {
    var newarray = [];
    var i = 0;
    for (i = 0; i < myarray.length; i += 1) {
        newarray[myarray.length - i - 1] = myarray[i];
    }
    return newarray;
}
function reversewhile(myarray) {
    var newarray = [];
    var i = 0;
    while (i < myarray.length) {
        newarray[myarray.length - i - 1] = myarray[i];
        i += 1;
    }
    return newarray;
}
function reversedowhile(myarray) {
    var newarray = [];
    var i = 0;
    do {
        newarray[myarray.length - i - 1] = myarray[i];
        i += 1;
    } while (i < myarray.length);
    return newarray;
}
console.log("after:");
s = reversefor(myarray);
console.log(s);
s = reversewhile(myarray);
console.log(s);
s = reversedowhile(myarray);
console.log(s);
 //---------------------//
console.log("--Task 4:");
function isneg(a) {
    if (a < 0) {
        console.log(a + " Is negative");
    } else if (a > 0) {
        console.log(a + " Is positive");
    } else if (a === 0) {
        console.log(a + " Is 0");
    } else {
        console.log(a + " Doesn't below to any of 'negative', 'positive', or '0'");
    }
}
a = "90";
isneg(a);
 //---------------------//
console.log("--Task 6:");
function fact(n) {
    var i;
    if (n === 0 || n === 1) {
        return 1;
    }
    if (n < 0) {
        return undefined;
    }
    for (i = n; i >= 0; i -= 1) {
        n *= i;
    }
    return n;
}
console.log(fact(3));
console.log(fact(4));
console.log(fact(5));