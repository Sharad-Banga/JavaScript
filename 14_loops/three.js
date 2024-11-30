const coding = ["js","ruby","java",'python'];

coding.forEach(
  (item)=>{
    console.log(item);
  }
)

const myNums = [1,2,3,4,5,6,7,8,9,10];
const j = myNums.filter(  
  (num) => {
      return num>4;
  }
)
console.log(j);
