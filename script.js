var num1 = window.prompt("Enter a number");
var operator = window.prompt("Enter operator(+, -, /, *)");
var num2 = window.prompt("Enter another number");

num1 = parseFloat(num1);
num2 = parseFloat(num2);

//read operator
let result = 0;
if (isNaN(num1) || isNaN(num2)) {
  alert("Wrong input! Refresh the page and provide that data");
} else {
  if (operator == "+") {
    result = num1 + num2;
  } else if (operator == "-") {
    result = num1 - num2;
  } else if (operator == "*") {
    result = num1 * num2;
  } else if (operator == "/") {
    result = num1 / num2;
  }
  document.write(num1 + operator + num2 + " = " + result);
}
