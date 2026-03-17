const obj1 = {
  name  : "sharad",
  greet(){
    console.log(`helo ${this.name}`);
    
  }
}

const a = ()=>{
  obj1.greet();
}

const b = function(){
  return obj1.greet();
}

a();
b();