// let car = {
//   make : "toyota",
//   model : "camry",
//   year : 2020,
//   start : function(){
//     return `${this.make} car got started`
//   }
// }


// console.log(car.start());


// Array.prototype.showww  = function (){
//   return `showw ${this}`
// }

// let g  = [12,34];
// console.log(g.showww());




class Vehical{

  constructor(make, model){
    this.make = make;
    this.model = model;
  }

  start(){
    return "helooooo"
  }

}

class car extends Vehical{
    drive(){
      return `${this.make}`
    }
}

let g = new car("tyoto", "corolla");

console.log(g.start());


