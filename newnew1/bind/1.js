const user = {
  name: "Alice",
  greet() {
    console.log(this.name);
  }
};

// let greetFxn = user.greet   -> undefined
// let greetFxn = user.greet.bind(user);   -> alice

let greetFxn = user.greet ;
// greetFxn.call(user)

greetFxn.apply(user)