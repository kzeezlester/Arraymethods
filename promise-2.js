/*- Create a chain of Promises to simulate a multi-step 
asynchronous operation. 
-The first Promise recovers user data 
{ id: 1, name: 'John' }.
 -The second Promise retrieves the user's
  posts ['Post 1', 'Post 2', 'Post 3']. -Finally, call the 
  functions to retrieve and print the user's 
  name and post titles in the console.*/

function fetchUserData() {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
           const data = { id: 1, name: 'John' }
            //if(data == true){
                resolve(data)
           // }else{
            //    reject("no date")
           // }

        },1000)
        
    })

    }
  function fetchUserPosts(userId, userName) {
   return new Promise((resolve, reject)=>{
    setTimeout(()=>{
        const userPost=['Post 1', 'Post 2', 'Post 3']
       // if(userPost == true){
            resolve(userPost)
        //}
       // else{
        //    reject('no such user')
       // }
    },1000)
   })
  }
  
  fetchUserData().then((data)=>{
    console.log(`${data.name}`)
    return fetchUserPosts( data.id,  data.name)
  })
  .then((userPost)=>{
    console.log('user pos')
  }).catch((error)=>console.error(error))