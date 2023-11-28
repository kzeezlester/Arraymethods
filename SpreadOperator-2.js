/*Given two objects, obj1 and obj2, create a 
new object called mergedObject using the spread operator
 that combines the properties of both objects. If there are overlapping 
properties, the values ​​of obj2 should override the values ​​of obj1.*/

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

let mergedObject = { ...obj1, ...obj2 };
console.log(mergedObject)
