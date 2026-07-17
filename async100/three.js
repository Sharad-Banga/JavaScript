const { log } = require('console');
const fs = require('fs');

function car(err,data){
  if(err){
    console.log("error hai bhai");
    
  }
  else{
    console.log("wooo : " ,data);
    
  }
}

fs.readFile('./a.txt',"utf-8",car);

fs.readFile('./b.txt',"utf-8",car);

console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");


console.log("hiiiiii");

function jj(){
  console.log("5 sec completed");
  
}

setTimeout(jj,3000);

console.log("donnee");

