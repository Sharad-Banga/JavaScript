
//************** */ //encapsulation *****************

// class Account{

//   #balance=0;

//   getBalance(){
//     console.log(`ur balance is ${this.#balance}`);
//   }

//   addBalance(paisa){
//     this.#balance += paisa;
//   }

// }

// let sharadAcc = new Account();
// sharadAcc.addBalance(100);

// sharadAcc.getBalance();



//********* POLYMORPHISM ******** */

class Bird{

  fly(){
    return `i am flying...`
  }

}


class penguin extends Bird{

  fly(){
    return `penguins cant fly`
  }
}

let bird1 = new Bird();
let p = new penguin();

// console.log(bird1.fly());
// console.log(p.fly());




//***** STATIC METHOD ******* */


class Calculator {
  static add(a,b){
    return a+b;
  }
}

console.log(Calculator.add(1,2));
