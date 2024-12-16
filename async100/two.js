// const fs = require("fs");


// const con1 = fs.readFileSync("./a.txt","utf-8");
// console.log(con1);


// const con2  = fs.readFileSync("./b.txt","utf-8");
// console.log(con2);

// //this is synchronous approach

// // one by one

// /**
//  * 
//  *
//       task 1
//         \/
//       task 2
//         \/
//       task 3


//  * 
//  */

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// functional arguments

function sum(a,b){
    return a+b;
}

function multi(a,b){
  return a*b;
}


function doOperations(a,b,fxn){
  let ans = fxn(a,b);
  return ans;
}


// console.log(sum(a,b));
// console.log(multi(a,b));

console.log(doOperations(2,3,multi));

console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")


