/*Given two arrays, arr1 and arr2, create 
a new array called mergedArray 
using the spread operator that 
combines the elements of both arrays.*/

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];

const mergedArray = [...arr1, ...arr2];
console.log(mergedArray);

//output
//[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]