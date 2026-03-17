
function createBase(num){

  return function(x){
    console.log(x+num);
  }
}



var addSix = createBase(8);
addSix(10);