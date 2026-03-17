function Person(){

  console.log("kkk");
  
}

const n = new Person();


console.log(n.__proto__);
console.log(Person.prototype);
console.log(n.__proto__ === Person.prototype);

