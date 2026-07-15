let a = [1,2,3,4,5];

let o = {x:22}

let j = a.map(function(num , idx , a){
    return num + this.x
},o)

console.log(j)