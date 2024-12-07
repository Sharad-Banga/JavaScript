let num = '12';

const id = Symbol(num);

const an = Symbol(num);
console.log(id===an); //false

