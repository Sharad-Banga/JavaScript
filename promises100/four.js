import fs from "fs"
//! readfile promisified

// let p = new Promise((resolve , reject)=>{

//     fs.readFile("./s.txt","utf-8",(err,data)=>{
//       if(err){
//         reject(err)
//       }
//       else{
//         resolve(data)
//       }
//     })
// })

// p.then((d)=>{
//   console.log(d)
// })
// .catch((e)=>{
//   console.log(e)
// })



//! setTimeout

// function setTimeoutPromisified(time, data){

//   return new Promise((resolve , reject)=>{

//     setTimeout(()=>{
//       resolve(data)
//     },time)
//   })
// }

// setTimeoutPromisified(4000,"helo gg").then((d)=>{
//       console.log("xxxx : ",d)
// })


//! writefile promisified

function writeFilePromisified(data){
    return new Promise((resolve , reject)=>{
        fs.writeFile("./s.txt", data,(err,d)=>{
          if(err){
            reject(err)
          }
          else{
            resolve(d)
          }
        })
    })
}

writeFilePromisified("ggg ajj cjp protest hai").then(()=>{
  console.log("done done")
})
.catch((e)=>{
  console.log(e)
})