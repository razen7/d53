let notification = document.querySelector('.notification');

let hoveredFlag = false;

function display2Mins(isAlert = false) {
    if (isAlert !== 'skipThis') {
        notification.style.background = isAlert ?
            '#EB4748' : 'black';
        notification.style.boxShadow = isAlert ?
            '1px 1px 1px 1px #EB4748' : '1px 1px 1px 1px black';
    }

    hoveredFlag = false
    notification.style.visibility = "visible";
    setTimeout(() => {
        notification.style.visibility = hoveredFlag === false ? "hidden" : "visible";
    }, 2000);
}

function doNotHide() {
    hoveredFlag = true;
}