//for in loop 

// use for of in Map
// use for in for plain objects


// const Obj = {
//   js :"java script",
//   cpp : 'c++',
//   rb : 'ruby'
// }

// for(const key in Obj){
//   console.log(key , " : haha : " ,Obj[key]);
// }

const map = new Map()
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('Fr', "France");
map.set('IN', "India");

for(const [key , value] of map ){
  console.log(key , ":-" , value )  ;
}