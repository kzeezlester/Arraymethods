const student = {
    info: { name: "Bob", age: 25 },
    grades: { math: 95, science: 89 }
  };

   const { name, age } = student.info;
    const { math, science } = student.grades;
        
    console.log(name, age, math, science);


//or you can also this way
    
/*const{
        info :{name,age},
        grades : {math, science}
        } =  student;
        
        console.log(name, age, math, science)*/