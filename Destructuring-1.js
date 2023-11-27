/*Given an object person with properties nome and età, 
use object destructuring to create name and age variables that 
contain the values ​​of the object.*/

const person = { name: "Alice", age: 30 };

//const {name , age} = person
//console.log(person);


const{ name: name, age: age } = person;
console.log(name, age);