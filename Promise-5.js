//Convert the following callback-based function to a Promise-based function.

function Promise_basedFunction(arg1, arg2) { 
    return new Promise((resolve, reject)=>{
        setTimeout(() => { 
            const result = arg1 + arg2; 
            if (result % 2 !== 0) { 
            resolve(null, result); 
            } else { 
            reject(new Error('Result is not odd!'), null); } }, 1000);
    })

  }
  Promise_basedFunction(1, 2)
  .then(result => console.log(result))
  .catch(error => console.error(error));