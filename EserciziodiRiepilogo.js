const studenti = [
    { nome: "Alice", voto: 95 },
    { nome: "Bob", voto: 88 },
    { nome: "Carol", voto: 76 },
    { nome: "David", voto: 92 },
    { nome: "Eve", voto: 84 },
  ];

  //forEach
  console.log(" ");
  console.log("This is the result forech " );
  const names = studenti.forEach((student)=>{
    console.log(student.nome )
});
  
  
  console.log(" ");
  console.log("This is the result find" );
  const result= studenti.find(students=> 
    students.voto >=90 
  
);
console.log(result ); 


console.log(" ");
console.log("This is the result reduce" );
const sum = studenti.reduce((a, number) => a + number.voto,0);
const average= sum /studenti.length;
console.log(average);


console.log(" ");
console.log("This is the result map" );
const students = ['Alice', 'Bob', 'David', 'Eve'];
const converToUpperCase = students.map(studentName => studentName.toUpperCase());
console.log(converToUpperCase);

console.log(" ");
console.log("This is the result filter" );
const myresult = studenti.filter( stud =>  stud.voto >=85);
console.log(myresult);

