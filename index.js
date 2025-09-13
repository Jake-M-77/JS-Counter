let counter = 0;

function updateCounter(){
    counterText.textContent = counter;
}

document.getElementById('numberIncrease').onclick = () => updateCounter(counter++);

document.getElementById('numberDecrease').onclick = () => updateCounter(counter--);

document.getElementById('numberReset').onclick = () => updateCounter(counter = 0)

