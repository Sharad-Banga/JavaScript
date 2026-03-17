let obj = {
  name : "rahul"
}

function greet(){
  console.log(`this is my name : ${this.name}`);
}


Function.prototype.myBind = function(o){

  o.fn = this;
  return function(){
    return o.fn();
  }
} 

let a = greet.myBind(obj);
a();