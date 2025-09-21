// function Car(name , model){
//   this.car = name;
//   this.model = model;
// }

// let car1 = new Car("tesla", "model s");
// console.log(car1);




//******************************************************* */

// function Jet(name , model){
//   this.name = name;
//   this.model = model;
//   this.isFlying = ()=>{
//     return `jet ${name} ${model} is FLYINGG...`
//   };
// }

// let jet1 = new Jet("boeing" , "787");
// console.log(jet1.isFlying());



//********************************************************* */

function Animal(breed){
  if(!new.target){
    throw new "ttttttttttttttttt"
  }
  this.breed = breed;
}
Animal.prototype.sound = function(){
  return "soundd...";
}
let dog =  Animal("dog");
// console.log(dog.sound());


//************************************************** */

