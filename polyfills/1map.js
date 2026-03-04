

Array.prototype.myMap = function(cb){

  let temp = [];
  for(let i = 0; i<this.length ; i++){
    temp.push(cb(this[i],i,arr));
  }

  return temp;
}

let arr = [1,2,3,4];
const j = arr.myMap((a, i , arr)=>{
  return a*3;
})

console.log(j);