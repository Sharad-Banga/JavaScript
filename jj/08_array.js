// const arr = [1,2,3,4,5];

// arr.push(22); // add at end
// console.log(arr);

// arr.pop(); // remove from end
// console.log(arr)

// arr.unshift(9);//insert at start
// console.log(arr);

// arr.shift();
// console.log(arr);// remove from beginning

// console.log(arr.includes(9));// check if present

// console.log(arr.indexOf(3)); //2

// console.log(arr.indexOf(999)); // -1 : item not present

// const newArr = arr.join(); //it returns an array as a string
// console.log(newArr);

// // slice and splice

// const A = [1,2,3,4,5,6];

// const slice = A.slice(1,3);
// console.log("A ",A);
// console.log("slice ",slice);  //2,3
// console.log("A after slice " ,A) // 1,2,3,4,5,6

// const splice = A.splice(1,3);
// console.log("splice",splice)   //2,3,4
// console.log("A after splice " ,A)  //1,5,6

// //we can put array in array +++++++++++++++++++++++++++++++++

// // concat , spread , 

// const jj = [1,2,3,4];

// const kk = [99,88,77];

// // const ss = jj.concat(kk);

// const ss = [...jj , ...kk];
// console.log(ss);


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//flatting array

const aj = [1,2,3,[4,5],[6,7,8,[99,88]]]

const newaj = aj.flat(3);

console.log(newaj);


//check if a thing is array

console.log(Array.isArray(aj)); // true

// converting something into array

const jsjs = Array.from("sharad");
console.log(jsjs);


// different values to array

const a = 1;
const b = 2;
const c = 3;

console.log(Array.of(a,b,c));