let elem = document.getElementById('block');


document.onkeydown = moveElem;
function moveElem (e) {
    let positionLeft = elem.offsetLeft;
    let positionTop = elem.offsetTop;

    if(e.keyCode == "38"){
        elem.style.top = (positionTop - 50)+ "px"
    }else if(e.keyCode == "40"){
        elem.style.top = (positionTop + 50) + "px";
    }else if(e.keyCode == "37"){
        elem.style.left = (positionLeft - 50) + "px";
    } else if (e.keyCode == "39") {
        elem.style.left = (positionLeft + 50) + "px";
    }
}

