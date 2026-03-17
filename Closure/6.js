//once polyfill


function myOnce(fn){

  let called = 0;

  return function(){
    let res
    if(called==0){
       res = fn.apply(this);
       called++;
    }
    
    return res;
  }
}


function fn(){
  console.log("hello hello hello");
}
let j = myOnce(fn);


j();
j();
j();
j();