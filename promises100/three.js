
const fs = require('fs');

function readFile(resolve){
  fs.readFile('./s.txt','utf-8', function(err,data){
    resolve(data);
  })
}

function call(content){
    console.log(content);
    
}

new Promise(readFile).then(call)