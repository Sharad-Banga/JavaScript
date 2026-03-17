let obj = {
  name : "sharad"
}

function greet(){

  console.log(`my name is ${this.name}`);
  
}



Function.prototype.myApply = function(o){

  o.fn = this;
  o.fn();
}

greet.myApply(obj);
