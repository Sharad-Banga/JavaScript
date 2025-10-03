// const promiseOne = new Promise(function(resolve , reject){
//     //do an async task
//     //db calls , cryptography , network
//     setTimeout(function(){
//       console.log('async task is complete');
//       resolve();
//     },1000)
// });


// promiseOne.then(function(){
//   console.log("promise consumed");
  
// })


// new Promise(function(resolve , reject){
//   setTimeout(function(){
//       console.log("async 2");
//       resolve()
//   },1000)
// }).then(function(){
//   console.log("2 resolved");
// })




// const j = {username:"sharad" , email:"sharadiit03@gmail.com"};

// const promThree = new Promise(function(resolve,reject){
//       setTimeout(function(){
//           resolve(j)
//       },1000)
// })

// promThree.then(function(user){
//   console.log(user);
  
// })
//


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// const promiseFour = new Promise(function(resolve,reject){

//   setTimeout(function(){
//   const error = true
//   if(!error){
//     resolve({username:"sham" , pass:"sss"})

//   }else{
//     reject('ERROOORRRRR')
//   }
//   },1000)
// })

//   // promiseFour.then(function(user){
//   //     console.log("USER .......",user)
//   //     return user.username
//   // }).then(function(username){
//   //     console.log("user name" ,username);

//   // }).catch(function(err){
//   //     console.log("error",err);
      
//   // }).finally(function(){
//   //   console.log("FINALY HEHEHEHEHEHEJU");
    
//   // })

//   //     OR

//   async function consumePromiseFive(){
//         try{
//           const response = await promiseFour;
//           console.log(response)
//         }
//         catch(error){
//           console.error(error)
//         }
//   }

  // consumePromiseFive();


  //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  // async function getAllUsers(){

  //   try {
  //     const res = await fetch('https://jsonplaceholder.typicode.com/users')
  //     const data = await res.json()
  //     console.log(data);

  //   } catch (error) {
  //     console.log("ee",error);
      
  //   }
    
  // }
  // getAllUsers();


  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

fetch('https://jsonplaceholder.typicode.com/users')
.then((res) => res )
.then((res)=>{console.log(res);
}).catch((err)=>{
  console.log("errorrr haiiiiiiiiiiiiiii");
  
})