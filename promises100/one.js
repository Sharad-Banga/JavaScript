//classes in JS
class Rectangle{

  //constructor defined in class
  constructor(width, height, color){
    this.width = width;
    this.height = height;
    this.color = color;
  }

  //area function
  area(){
    return this.width*this.height;
  }

  //paint function
  paint(){
    return this.color;
  }

}
const j = new Rectangle(2,3,"red");

console.log(j.area());
console.log(j.paint());


//more classes 

//date class
const now = new Date();
console.log(now.getMonth());

//Map class

const map = new Map();
map.set('name','sharad');
console.log(map.get('name'));

