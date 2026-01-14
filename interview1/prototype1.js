function createUser(name , price){
  this.name = name;
  this.price = price;
}


createUser.prototype.show = function(){
  console.log("price is : ");
  
  console.log(this.price);
}

const a = new createUser("A", 50);
a.show();

const b = new createUser("b", 500);
b.show();