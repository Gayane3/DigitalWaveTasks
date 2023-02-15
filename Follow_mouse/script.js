let elem = document.getElementById('block');


document.onmousedown = function (e) {
    elem.style.left = e.clientX + "px";
    elem.style.top = e.clientY + "px";

}

