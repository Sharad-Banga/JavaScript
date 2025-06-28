class Rectangle{


  constructor(width , height, color){
    this.width = width;
    this.height = height;
    this.color = color;
  }

  area(){
    return this.width*this.height;
  }

  rang(){
    return this.color;
  }

}

const j = new Rectangle(2,3,"red");

console.log(j.area());

console.log(j.rang());
