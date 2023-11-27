/*Create a function called somma that takes any 
number of arguments and returns the sum of those arguments.
Use the rest parameter to collect arguments. 
-Print the output of the sum function to the console.*/

function somma(...args){
    return args.reduce((any,number)=>any+number,0);
}

const myAnyNumber=somma(1,2,3,4,5,6,7,8,9,10);
console.log(myAnyNumber);