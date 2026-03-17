class Car{

  constructor(color){
    this.color = color;
  }

  getColor(){
    console.log(`this is my color ${this.color}`);
    
  }
}


console.log(Car.prototype);

let tesla = new Car("cherry");
console.log(Car.prototype);

console.log(tesla.__proto__ == Car.prototype);
tesla.getColor();


