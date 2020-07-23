let calculatorContainer = document.getElementById("calculator");
let display = document.getElementById("display-content");

let numericButtons = document.getElementsByClassName("number-button");
let operatorButtons = document.getElementsByClassName("operator-button");

let equalBtn = document.getElementById("equal-button");
let cBtn = document.getElementById("erase-button");
let plusMinus = document.getElementById("plusmn-button");

const calculator = createCalculator(display);

// EVENT LISTENERS

for (let button of numericButtons) {
  button.addEventListener("click", () => {
    calculator.addNumber(button.firstElementChild.textContent.trim());
  });
}

for (let button of operatorButtons) {
  button.addEventListener("click", () => {
    calculator.addOperator(button.getAttribute("data-operator"));
  });
}

plusMinus.addEventListener("click", calculator.changeLastNumberSign);
equalBtn.addEventListener("click", calculator.computeOperation);
cBtn.addEventListener("click", calculator.reset);

// Switch Button

let switchButton = document.getElementById("switch");

switchButton.addEventListener("click", () => {
  calculatorContainer.classList.toggle("dark-theme");
  calculatorContainer.classList.toggle("light-theme");
});

function showLogs() {
  calculator.showLog();
}
