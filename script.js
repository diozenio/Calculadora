var expressionText = document.getElementById("expressionText");
expressionText.innerHTML = "0";

let n1 = expressionText.innerHTML;
let n2 = expressionText.innerHTML;
let firstNumber = 0;
let secondNumber = 0;
let signal = "";
let afterSignal = false;
let afterResult = false;

function numberUpdate(number) {
  if (afterResult) {
    clearExpression();
  }
  if (expressionText.innerHTML.length <= 20) {
    if (expressionText.innerHTML == "0") {
      expressionText.innerHTML = number;
    } else {
      expressionText.innerHTML += number;
    }
    if (!afterSignal) {
      n1 += number;
      firstNumber = parseInt(n1);
    } else {
      n2 += number;
      secondNumber = parseInt(n2);
    }
  }
}

function signalUpdate(signalChar) {
  if (!afterResult) {
    if (afterSignal) {
      expressionText.innerHTML = firstNumber + " " + signalChar + " ";
    } else {
      expressionText.innerHTML += " " + signalChar + " ";
    }
    signal = signalChar;
    afterSignal = true;
  }
}

function clearExpression() {
  signal = "";
  afterSignal = false;
  afterResult = false;
  expressionText.innerHTML = "0";
  n1 = "";
  n2 = "";
  firstNumber = 0;
  secondNumber = 0;
}

function result() {
  switch (signal) {
    case "+":
      expressionText.innerHTML = firstNumber + secondNumber;
      afterResult = true;
      break;
    case "/":
      expressionText.innerHTML = firstNumber / secondNumber;
      afterResult = true;
      break;
    case "*":
      expressionText.innerHTML = firstNumber * secondNumber;
      afterResult = true;
      break;
    case "-":
      expressionText.innerHTML = firstNumber - secondNumber;
      afterResult = true;
      break;
  }
}
