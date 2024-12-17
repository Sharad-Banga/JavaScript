/*
//async fxn using callback

function callback(){
  console.log("hello callback here"); 
}

setTimeout(callback,3000);

*/


/*
//async using promises

function setTimeoutPromisified(ms){
  return new Promise();
}

function callback(){
  console.log("hello ji promise wale hai ham");
}

 
setTimeoutPromisified(3000).then(callback);
 
*/

function random(resolve){
    setTimeout(resolve,3000);
}

function callback(){
  console.log("hellooooo");
  
}

let p = new Promise(random);

p.then(callback)
