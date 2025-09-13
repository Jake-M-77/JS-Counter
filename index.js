let counter = 0;

function updateCounter(){
    counterText.textContent = counter;
}


document.getElementById('numberIncrease').onclick = function () {
    counter++;
    updateCounter();
}

document.getElementById('numberDecrease').onclick = function () {
    counter--;
    updateCounter();

}

document.getElementById('numberReset').onclick = function () {
    counter = 0;
    updateCounter();

}