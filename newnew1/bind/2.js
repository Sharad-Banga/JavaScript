
function car(model , color){
  console.log(`this is ${this.name} , model : ${model} and color : ${color}`)
}

const carr = {name:"tesla"}

car.call(carr,"s plain", "cherry")

car.apply(carr , ["x","white"])