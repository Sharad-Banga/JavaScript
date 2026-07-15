const numbers = [1,2,3,4,5,6,7,8,9];

const j = numbers.map((num)=> num*10  )
          .filter((num)=>  num>=40)
;

console.log(j);


// reduce

// const array = [1,2,3];

// // const myTotal = array.reduce(

// //   function (acc ,currval){
// //     return acc+currval
// //   } , 0

// // )

// const sum = array.reduce((acc,curr)=>(acc+curr),1)

// console.log(sum);
