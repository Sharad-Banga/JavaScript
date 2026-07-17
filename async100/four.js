import fs from "fs"


//? Sync code -> it will block the thread
// const res = fs.readFileSync('./a.txt','utf-8');
// console.log(res);



fs.readFile('./a.txt','utf-8',(e,d)=>{
    console.log(d)
})


fs.readFile('./b.txt','utf-8',(e,d)=>{
    console.log(d)
})


console.log("hahaha")