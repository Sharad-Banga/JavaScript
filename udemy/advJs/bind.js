const obj = {
  name : "sharad",
  greet : function(){
    console.log(`my name is ${this.name}`);
  }
}

obj.greet();

let a = obj.greet;
a();


let b = obj.greet.bind({name:"hash"});
b();