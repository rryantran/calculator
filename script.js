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
  mainDisplay.textContent = "";
}

function storeHistory(num) {
  firstNum = num;
}

function cleaHistory() {
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

const btns = document.querySelectorAll("button");
btns.forEach((btn) => {
  btn.addEventListener("click", function () {
    if (this.className == "math operator" && firstNum) {
      operator = this.textContent;
      display();
      console.log(firstNum, operator, secondNum);
    } else if (this.className == "math num" && !operator) {
      firstNum += this.textContent;
      display(firstNum);
      console.log(firstNum, operator, secondNum);
    } else if (this.className == "math num" && operator) {
      secondNum += this.textContent;
      display(secondNum);
      console.log(firstNum, operator, secondNum);
    } else if (this.className == "math equals") {
      subDisplay.textContent = `${firstNum} ${operator} ${secondNum}`;
      let solution = operate(operator, firstNum, secondNum);
      display(solution);
      storeHistory(solution);
      operator = "";
      secondNum = "";
    } else if (this.className == "erase clear") {
      cleaHistory();
      clearDisplay();
    }
  });
});
