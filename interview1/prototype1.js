// function Car(color){
//   this.color = color;
// }
// Car.prototype = {
//   "hello" : "hi"
// }

// const tesla = new Car("cherry");

// console.log(tesla);
// console.log(tesla.__proto__);

car = {
	"hello" : "hiii"
}

const obj = Object.create(car);

console.log(obj.__proto__);
