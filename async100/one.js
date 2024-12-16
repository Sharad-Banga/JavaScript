// function sum(a,b){
//   return parseInt(a)+b;
// }

// let ans = sum("2",3)

// console.log(ans);


// function sum(n){

//   let a = 0;
//   for(let i=1 ; i<=n ; i++){
//     console.log(i); 
//   }
// }

function sum(n){
  
  if(n==1) return 1;
  console.log(n);
  return sum(n-1);
}


sum(20)