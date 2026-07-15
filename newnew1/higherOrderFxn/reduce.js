let a = [1,2,3,4,5,6,7,8,9,10];


let j = a.reduce(function(acc, num , idx , a){

  return acc + num;
},100)

console.log(j)