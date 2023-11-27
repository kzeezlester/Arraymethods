/*Write a function filterOutOdds that takes any number 
of arguments and returns an array containing only even numbers.
Use the rest parameter to collect the arguments.*/


function filterOutOdds(...params) {
    
    return params.filter(num => num % 2 === 0);    
}

console.log(filterOutOdds(1,2,3));