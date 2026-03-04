const obj = {
  name : "sam",
}

function greet(city){
  console.log(`my name is ${this.name} city ${city}`);
}


Function.prototype.myCall = function(o, ...args) {
  o.fn = this;
  o.fn(...args);
}

greet.myCall(obj ,"hello");