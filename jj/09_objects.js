mySym = Symbol("key1");

const user = {
  name : "sharad",
  class : "cse",
  sem : "fifth",
  male : true,
  age : 21,
  [mySym] : "key"
}

console.log(user);
console.log(user[mySym])
console.log(typeof mySym) 

// Object.freeze(obj_name) :method prevents any changes to an object.

Object.freeze(user);
user.name = "Sam";

console.log(user);