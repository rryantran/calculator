// operations
function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  if (b == 0) {
    return "error";
  }
  return a / b;
}

function operate(operator, a, b) {
  a = Number(a);
  b = Number(b);
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "x":
      return multiply(a, b);
    case "÷":
      return divide(a, b);
    default:
      null;
  }
}

function display(num) {
  mainDisplay.textContent = num;
}

function clearDisplay() {
  subDisplay.textContent = "";
  mainDisplay.textContent = "0";
}

function storeHistory(num) {
  firstNum = num;
}

function clearHistory() {
  firstNum = "";
  operator = "";
  secondNum = "";
}

let firstNum = "";
let operator = "";
let secondNum = "";
const operators = ["+", "-", "x", "÷"];

const mainDisplay = document.getElementById("main");
const subDisplay = document.getElementById("sub");

const mathBtns = document.getElementById("math-btns");
mathBtns.addEventListener("click", (e) => {
  if (e.target.nodeName == "BUTTON") {
    if (e.target.className == "operator" && firstNum && !operator) {
      operator = e.target.textContent;
      display();
    } else if (e.target.className == "num") {
      if (!operator) {
        firstNum += e.target.textContent;
        display(firstNum);
      } else {
        secondNum += e.target.textContent;
        display(secondNum);
      }
    } else if (e.target.id == "equals" && firstNum) {
      subDisplay.textContent = `${firstNum} ${operator} ${secondNum}`;
      let solution = operate(operator, firstNum, secondNum);
      display(solution);
      storeHistory(solution);
      operator = "";
      secondNum = "";
    }
  }
});

const btns = document.getElementById("btns");
btns.addEventListener("click", (e) => {
  if (e.target.id == "clear") {
    clearDisplay();
    clearHistory();
  }
});
