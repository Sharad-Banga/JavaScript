// const tinderUser = {};

// tinderUser.id = "11";
// tinderUser.name = "sam";
// tinderUser.isLoggedIn = true;
// //console.log(tinderUser);


// const obj1 = { 1:'a' , 2:'b'}
// const obj2 = { 3:'c' , 4:'d'}
// const obj3 = { 5:'e' , 6:'f'}

// //const obj = Object.assign({},obj1, obj2 ,obj3);

// //            OR

// const obj = {...obj1 , ...obj2} // spread

// console.log(obj);

// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));

// +++++++++++   destructuring of objects +++++++++

const user = {
  name : "sharad",
  age : "twenty one",
  class : "5th"
}

const {name} = user;
console.log(name);
