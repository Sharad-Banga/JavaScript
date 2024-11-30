const user = {
  username : "sharad",
  price : 999,

  welcomeMessage : function(){
    console.log(`${this.username} he he`);
    console.log(this);
    
  }
}

user.username = "sam"
user.welcomeMessage()

console.log(this);


const num = 2;

// const chai = () => {
//     return 1+Num;
// }

//OR 

const chai = () => (1+num)

console.log(chai());
