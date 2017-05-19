"use strict";
function prepend(container, newElement) {
    newElement = document.createElement(newElement);
    var el = document.getElementsByTagName(container);
    el[0].style.backgroundColor = "yellow";
    el[0].appendChild(newElement);
    newElement.innerHTML = "new element";
    newElement.style.backgroundColor = "red";
    newElement.style.margin = "10px";
}
var btn = document.getElementsByClassName("button");
btn[0].onclick = function () {
    prepend("iv", "p");
}
