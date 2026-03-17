
function greet(city){
  console.log(`this is greeting from ${this.name} , city : ${city}`)
}

const person = {
  name:" java "
}

//using call
greet.call(person , "delhi");

//using apply
greet.apply(person , ["delhiiiii"])


//using bind
const j = greet.bind(person,"mohali");
j();