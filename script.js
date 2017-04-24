console.log("1. Current day");
var now = new Date();
console.log(now.toString());

console.log("2. Current date");
var now = new Date();
var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var day = weekday[now.getDay()];
var hours = now.getHours();
var minutes = now.getMinutes();
console.log("Today is: " + day + ". " + hours + " hours, " + minutes + " minutes!");

console.log("3. 1st January is a Sunday");
var year;
var d;
for (year = 2014; year <= 2050; year += 1) {
    d = new Date(year, 0, 1);
    if (d.getDay() === 0) {
        console.log("1st January is a Sunday in " + year + " year;");
    }
}

console.log("4. Days until NY");
var today = new Date();
var ny = new Date(today.getFullYear() + 1, 0, 1);
var daymilisec = 1000 * 60 * 60 * 24;
console.log(Math.ceil((ny.getTime() - today.getTime()) / daymilisec) + " days left until New Year!");

console.log("5. Is array");
function is_array(value) {
    var s = typeof value;
    if (s === "object") {
        if (value) {
            if (value instanceof Array) {
                s = "array";
            } else {
                s = "not array";
            }
        } else {
            s = "not array";
        }
    } else {
        s = "not array";
    }
    return s;
}
var a = [1, 2, 4, 0];
var b = "gwe";
console.log(is_array(a));
console.log(is_array(b));

console.log("6. Clone array");
function clone_array(a) {
    var b = [];
    var i;
    for (i = 0; i < a.length; i += 1) {
        b[i] = a[i];
    }
    return b;
}
var a = [1, 2, 76, 99];
console.log(a);
var b = clone_array(a);
console.log(b);

console.log("7. the most frequent item of an array");
var a = [1, 100, 0, 100, 200, 32, 32, 100, 0, 5, 4];
var count = 1;
var k = 0;
var item;
function mostfreequent(value) {
    count = 1;
    k = 0;
    var i;
    var j;
    for (i = 0; i < value.length; i += 1) {
        for (j = i; j < value.length; j += 1) {
            if (value[i] === value[j]) {
                k += 1;
            }
            if (count < k) {
                count = k;
                item = value[i];
            }
        }
        k = 0;
    }
    return item;
}
console.log(mostfreequent(a) + " ( " + count + " times ) ");

console.log("8. invert the case of the letters ");
function invert_case(str) {
    var s = "";
    var i;
    var n;
    for (i = 0; i < str.length; i += 1) {
        n = str.charAt(i);
        if (n === n.toLowerCase()) {
            s = s + n.toUpperCase();
        } else {
            s = s + n.toLowerCase();
        }
    }
    return s;
}
var st = "Some teXt HERE";
console.log(invert_case(st));

console.log("9. Remove duplicates");
function removedup(a) {
    var value = a;
    var item = a;
    var i;
    var j;
    for (i = 0; i < item.length; i += 1) {
        if (typeof(item[i]) === "string") {
            item[i] = item[i].toLowerCase();
        }
    }
    for (i = 0; i < value.length; i += 1) {
        for (j = i + 1; j < value.length; j += 1) {
            if (item[i] === item[j]) {
                value.splice(j, 1);
            }
        }
    }
    return value;
}
var arr = [1, 100, 0, 100, 200, "TttT", "tttT", 100, 0, 5, 4, 0];
console.log(arr);
console.log(removedup(arr));

console.log("10. Shuffle array");
function shuffle_array(arr) {
    var i;
    var temp;
    var randomI;
    for (i = arr.length - 1; i > 0; i -= 1) {
        randomI = Math.floor(Math.random() * (i + 1));
        temp = arr[i];
        arr[i] = arr[randomI];
        arr[randomI] = temp;
    }
    return arr;
}
var arr1 = [1, 2, 3, 4, 5, 6];
arr1 = shuffle_array(arr1);
console.log(arr1);

console.log("11. Remove");
function removesome(item) {
    var i;
    for (i = 0; i < item.length; i += 1) {
        if (item[i] === "null" || item[i] === "0" || item[i] === "" || item[i] === "false" || item[i] === "NaN") {
            item.splice(i, 1);
        }
    }
    return item;
}
var arr = [1, 100, 0, 100, "TttT", "null", 100, 0, 5, 4, 0];
console.log(arr);
console.log(removesome(arr));

console.log("12. Sort");
var i;
var library = [
    {author: "Bill Gates", title: "The Road Ahead", libraryID: 1254},
    {author: "Steve Jobs", title: "Walter Isaacson", libraryID: 4264},
    {author: "Suzanne Collins", title: "Mockingjay: The Final Book of The Hunger Games", libraryID: 3245}
];
library.sort(function (a, b) {
    return a.title.localeCompare(b.title);
});
for (i = 0; i < library.length; i += 1) {
    console.log(library[i]);
}

console.log("13. merge arrays");
function merge_array(ar1, ar2) {
    var a = ar1.concat(ar2);
    console.log(a);
    var i;
    var j;
    for (i = 0; i < a.length; i += 1) {
        for (j = i + 1; j < a.length; j += 1) {
            if (a[i] === a[j]) {
                a.splice(j, 1);
            }
        }
    }
    return a;
}
var ar1 = [1, 5, 10, 5, 4, 16];
var ar2 = [2, 5, 3, 5, 215, 16];
console.log(merge_array(ar1, ar2));

console.log("14. Remove specific");
function removearg(arr, arg) {
    var i;
    for (i = 0; i < arr.length; i += 1) {
        if (arr[i] === arg) {
            arr.splice(i, 1);
        }
    }
    return arr;
}
var ar1 = [1, 5, 10, 5, 4, 16];
console.log(removearg(ar1, 5));

console.log("15. Random");
function randomarg(arr) {
    var i = Math.floor(Math.random() * (arr.length - 0)) + 0;
    console.log(i);
    return arr[i];
}
var ar1 = [1, 5, 10, 5, 4, 16];
console.log(ar1);
console.log(randomarg(ar1));

console.log("16. Change places");
function change_places(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    return arr;
}
var arr1 = [1, 2, 3, 4, 5, 6];
arr1 = change_places(arr1, 0, 5);
console.log(arr1);

console.log("17. Days difference");
var date1 = new Date("04/14/2017");
var date2 = new Date("04/20/2017");
function diffDays(date1, date2) {
    var daymilisec = 1000 * 60 * 60 * 24;
    var diffday = (Math.ceil((date2.getTime() - date1.getTime()) / daymilisec));
    return diffday;
}
console.log(diffDays(date1, date2));

console.log("18. Max date");
function maxdate(all_dates) {
    var max_date = all_dates[0];
    var max_dtObj = new Date(all_dates[0]);
    all_dates.forEach(function (dt) {
        if (new Date(dt) > max_dtObj) {
            max_date = dt;
            max_dtObj = new Date(dt);
        }
    });
    return max_date;
}
var datearray = ["2015/02/01", "2015/02/02", "2015/01/03"];
console.log(maxdate(datearray));

console.log("19. Split string");
function split_string(str) {
    return str.replace(".", "").replace(",", "").replace("?", "").replace("!", "").split(" ");
}
var s = "word1, word2, some text. end!";
console.log(split_string(s));

console.log("20. Capitalize first letter");
function capitalize_first(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
var s = "word1, word2, some text. end!";
console.log(capitalize_first(s));

console.log("21. camel case");
function camel_case(str) {
    return str.toLowerCase()
        .replace(/[\-_]+/g, " ")
        .replace(/[^\w\s]/g, "")
        .replace(/ (.)/g, function ($1) {
            return $1.toUpperCase();
        })
        .replace(/ /g, "");
}
var s = "word1, word2, text!";
console.log(camel_case(s));

console.log("22. Find max");
function findmax(array) {
    var max = 0;
    var counter;
    for (counter = 0; counter < array.length; counter += 1) {
        if (array[counter] > max) {
            max = array[counter];
        }
    }
    return max;
}
var arr1 = [1, 2, 3, 4, 5, 6];
console.log(findmax(arr1));

console.log("23. Find min");
function findmin(array) {
    var max = 0;
    var counter;
    for (counter = 0; counter < array.length; counter += 1) {
        if (array[counter] > max) {
            max = array[counter];
        }
    }
    var min = max;
    for (counter = 0; counter < array.length; counter += 1) {
        if (array[counter] < min) {
            min = array[counter];
        }
    }
    return min;
}
var arr1 = [1, 2, 3, 4, 5, 6];
console.log(findmin(arr1));

console.log("24. Is num");
function is_num(a) {
    var s = " not numeric";
    if (typeof(a) === "number") {
        s = " is numeric";
    }
    return s;
}
var s = 534;
console.log(s + is_num(s));

console.log("25. sum of array");
function sumOfArray(a) {
    var s = 0;
    for (var i = 0; i < a.length; i++) {
        s = s + a[i];
    }
    return s;
}
var arr1 = [1, 2, 3, 4, 5, 6];
console.log(sumOfArray(arr1));

console.log("26.  length of a JavaScript object");
function lengthOfObj(a) {
    var s = 0;
    var i;
    for (i = 0; i < a.length; i += 1) {
        s += 1;
    }
    return s;
}
var arr1 = [1, 2, 3, 4, 5, 6];
console.log(lengthOfObj(arr1));

console.log("27.  list of properties");
function listOfProperties(obj) {
    var keys = [];
    var key;
    for (key in obj) {
        keys.push(key);
    }
    return keys;
}
var person = {};
person.name = "John";
person.age = 25;
person.height = 175;
console.log(listOfProperties(person));