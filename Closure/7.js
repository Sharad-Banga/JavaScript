//memoize function
// in last que , we only run function once, not saving the value
// here if the calculation is already done , no need to re calculate it


function myMemoise(fn , context){
  const  res = {};
  return function(...args){
    let arg = JSON.stringify(args);
    if(!res[arg]){
      res[arg] = fn.call(context||this , ...arg);
    }
    return res[arg];
  }
}

const clumsyProduct = (a,b)=>{
  for(let i =0 ; i<10000000 ; i++){}
  return a * b;
}

let mm = myMemoise(clumsyProduct);
console.log(mm(1,2));

