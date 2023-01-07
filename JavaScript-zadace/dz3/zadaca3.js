var showHideCell = document.querySelectorAll('.cell');
var onClick = document.querySelectorAll('.cell');

//Funkcije

function handleHide(e) {
    var element = e.target;
    element.classList.toggle('cell');
}

function handleShow(e) {
    var element = e.target;
    element.classList.toggle('cell');
}

function handleClick(e) {
    var element = e.target;
    element.classList.toggle('on-click');
}



//Petlje

for (var i = 0; i < showHideCell.length; i++) {
    var cellHide = showHideCell[i];
    cellHide.addEventListener('mouseover', handleHide);
}

for (var i = 0; i < showHideCell.length; i++) {
    var cellShow = showHideCell[i];
    cellShow.addEventListener('mouseout', handleShow);
}

for (var i = 0; i < showHideCell.length; i++) {
    var cellClick = showHideCell[i];
    cellClick.addEventListener('click', handleClick);
}