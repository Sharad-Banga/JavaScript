// function fun(a , b){
//   console.log(a+b);
// }
// fun(2,3)

function calculateCartPrice( ...num1){ // rest operator , add as many values
    return num1;
}

console.log(calculateCartPrice(2,3,4));


const user = {
  username : "sharad",
  price : 199
}

function handleObject(anyObject){
  console.log(`username is ${anyObject.username} and price is ${anyObject.price}`)
}

