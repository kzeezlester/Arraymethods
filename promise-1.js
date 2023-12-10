function fetchDataFromAPI(age) {
    let data =
    {
      name: "John",
      age: 30
    }
    return new Promise((resolve, reject)=>{
if (age>=30){
    resolve(data);
}else{
    reject("no data found")
}
    })

  }
  
  
  
  let see=fetchDataFromAPI(30).then((datas)=>{
 console.log(datas)
  }).catch((error)=>{
    console.log(error);
  })