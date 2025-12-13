let score = "13a"

let num = Number(score);
// console.log(typeof num);
// console.log(num)

// string 13 is converted into number then it prints 13
// but if we convert 13a into number , which cannot be converted into number , then if we print , it giv NaN
// "" => false
// "sharad" => true

const id = Symbol('12');

const an = Symbol('12');
console.log(id===an); //false

// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack (primitive) , heap (non-primitive)

let myYoutubename = " sharad banga";

let anothername = myYoutubename;

console.log(anothername)

let user = {
  email : "hello",
  pass : "11"
}

console.log(user[email])

