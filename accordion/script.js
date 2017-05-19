var acc = document.getElementsByClassName("accordion");
var pan = document.getElementsByClassName("panel");
var elemI = document.getElementsByTagName("i");
var i;

for (i = 0; i < acc.length; i += 1) {
    acc[i].onclick = (function(index){
        return function() {
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.classList.remove("active");
                panel.classList.add("nonactive");
                panel.style.display = "none";
                acc[index].style.backgroundColor = "#f6f6f6";
                acc[index].style.color = "black";
            } else {
            panel.classList.add("active");
			panel.classList.remove("nonactive");
            panel.style.display = "block";
            acc[index].style.backgroundColor = "blue";
            acc[index].style.color = "white";
            }
        }
    })(i)
}