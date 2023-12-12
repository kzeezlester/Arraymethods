//-Create a simple Promise that resolves 
//after a 2 second delay. -Use setTimeout 
//to simulate an asynchronous operation.


const thisPromise =
    new Promise((resolve, reject)=>{
    setTimeout(()=>{
        reject(" resolves after a 2 second delay");
    },2000);
   
    });
    

thisPromise.then((outPuts)=>{
    console.log(outPuts)
})
.catch((error)=>{
    console.log(error)
})