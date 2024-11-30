// Imediately invoked function expression (IIFE)


//named iife

(function chai(jj,ss){
  console.log('DB CONNECTED',jj , ss);
})("sam","sss"); 

(
  (name)=>{
    console.log(`DB CONNECTED 2 ${name}`);
    
  }

)("sharad")


// this functions invoke as we run the code
//()()
// in first bracket fxn is writtem
// in second bracket pass argument used in function