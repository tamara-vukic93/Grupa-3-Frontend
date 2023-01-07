var showHideCell = document.querySelectorAll('.cell');

function handleHide(e) {
    var element = e.target;
    element.classList.toggle('cell');
}

function handleShow(e) {
    var element = e.target;
    element.classList.toggle('cell');
}

for (var i = 0; i < showHideCell.length; i++) {
    var cellHide = showHideCell[i];
    cellHide.addEventListener('mouseover', handleHide);
}

for (var i = 0; i < showHideCell.length; i++) {
    var cellShow = showHideCell[i];
    cellShow.addEventListener('mouseout', handleShow);
}

function handleVisible() {
    showHideCell.classList.toggle('visible');
}

for (var i = 0; i < showHideCell.length; i++) {
    var cellVisible = showHideCell[i];
    cellVisible.addEventListener('click', handleVisible);
}