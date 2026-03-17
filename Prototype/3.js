obj = {

  "hgello" : "sssssss"
}

let o = Object.create(obj);

console.log(o.__proto__);
console.log(Object.getPrototypeOf(o))
