const display = document.getElementById("enter");

let currentNumber = "";
let operator = "";
let previousNumber = "";

function appendNumber(number) {
  currentNumber += number;
  updateDisplay();
}

function updateDisplay() {
    if(operator){
        display.value = `${previousNumber} ${operator} ${currentNumber}`;

    }
    else{
        display.value = currentNumber ;
    }
  
}

function cleardisplay() {
  currentNumber = "";
  display.value = "";
}

function appendoperator(newopeartor) {
  operator = newopeartor;
  previousNumber =currentNumber;

  currentNumber='';

  updateDisplay();
}

function calculateResult() {
  console.log("chal kyu nahi rha : ");

  switch (operator) {
    case "+":
      result = parseFloat(currentNumber) + parseFloat(previousNumber);
      break;

    case "-":
      result = parseFloat(previousNumber) - parseFloat(currentNumber);
      break;

    case "/":
      result = parseFloat(previousNumber) / parseFloat(currentNumber);
      break;

    case "*":
      result = parseFloat(previousNumber) * parseFloat(currentNumber);
      break;
  }
  currentNumber = result.toString();
  operator = ''
  previousNumber='';
  updateDisplay();

}
