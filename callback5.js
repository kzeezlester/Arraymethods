/*Create a function that takes due numeri and una funzione di callback as arguments.
The function should perform a mathematical operation on the numbers 
and pass the result to the callback function.
For example, you can create a function to add two numbers and pass 
a callback function that displays the result.*/

function performOperation(a, b, callback) {
  let sum = a * b;
  callback( sum);
}

function displayResult(result) {
  console.log(result)
}

performOperation(5, 3, displayResult);

