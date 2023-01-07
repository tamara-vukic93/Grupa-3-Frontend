var buttons = document.querySelectorAll('button');
var screenDisplay = document.querySelector('.screen');

var calculation = [];
var accumulativeCalculation;

function calculate(button) {
    var value = button.textContent;
    if (value === "CLEAR") {
        calculation = [];
        screenDisplay.textContent = '0';
    } else if (value === "=") {
        screenDisplay.textContent = eval(accumulativeCalculation);
    } else {
        calculation.push(value);
        accumulativeCalculation = calculation.join('');
        screenDisplay.textContent = accumulativeCalculation;
    }


}

buttons.forEach(button => button.addEventListener('click', () => calculate(button)));