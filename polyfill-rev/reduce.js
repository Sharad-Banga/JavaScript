

Array.prototype.myFilter = function(cb , init){

  let ans = init;
  let i=0;

  if(init === undefined){
    i=1;
    ans = this[0];
  }

  for(;i<this.length ; i++){
    res = cb(res,this[i],i,this);
  }

  return ans;
}







let arr = [1,2,3,4,5];

let j = arr.reduce((acc, num ,i , arr)=>{

  return acc + num;
})


console.log(j)