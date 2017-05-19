
function deleteTextNodes(element) {
	var el = document.getElementById(element), 
	child = el.firstChild, 
	nextChild;
	//element.style.backgroundColor = "yellow";
    while (child) {
        nextChild = child.nextSibling;
        if (child.nodeType == 3) {
            el.removeChild(child);
        }
        child = nextChild;
    }
}

var btn = document.getElementsByClassName('button');
btn[0].onclick = function() {
    deleteTextNodes('element');
}
