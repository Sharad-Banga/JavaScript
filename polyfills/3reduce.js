let arr = [1,2,3,4,5];

Array.prototype.myReduce = function (cb, Init){

  let res = Init;
  let i = 0;
  //sometimes init is not given , then 
  if (Init === undefined) {
    res = this[0];
    i = 1;
  }
  for(;i<this.length ; i++){
    res = cb(res , this[i], i , this);
  }
  return res;
}

let s = arr.myReduce((sum , curr , i , arr)=>{
  return sum + curr;
},0);

console.log(s);