
/*
  Create a function that multiplies two numbers
  passed in as arguments. Return the product.
 */
function multiply (first, second) {
  return first * second;
}


/*
  Create a function that adds two numbers
  passed in as arguments. Return the sum.
 */
function add (first, second) {
  return first + second;
}



/*
  Create a function that subtracts two numbers
  passed in as arguments. Return the difference.
 */
function subtract (first, second) {
  return first - second;
}


/*
  Create a function that divides two numbers
  passed in as arguments. Return the quotient.
 */
function divide (first, second) {
  return first / second;
}

/*
  Create a function that accepts three arguments.
    1. First number
    2. Second number
    3. A function that performs an operation on them

  Return the value of the operation.
 */


var buttons = document.getElementsByTagName("button");
var firstNumber, secondNumber;

function operation() {

}
 
function performCalculation(first, second, operation) {
  return operation(first, second);
}

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function(event) {
    firstNumber = parseInt(document.getElementById("firstNumber").value, 10);
    secondNumber = parseInt(document.getElementById("secondNumber").value);

    var operation = window[event.target.id];

    var result = performCalculation(firstNumber, secondNumber, operation);

    document.getElementById("result").innerHTML = result;
    console.log("result",result);
  });
}








