const obj = {
  name: 'Bind',
  greet : function() {
    console.log(`Hello, I am ${this.name}`);
  }
}

//no this in g
const g = obj.greet;
g();


//bind
const a = obj.greet.bind(obj);
a();

//call
const b = obj.greet;
b.call(obj);


//apply
const c = obj.greet;
c.apply(obj);