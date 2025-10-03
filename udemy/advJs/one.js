function closure(){
  let counter = 2;
  return function(){
    counter++;
    return counter;
  }
}

let p = closure();
console.log(p());
