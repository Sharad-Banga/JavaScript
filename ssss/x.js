function promi(ms){
  return new Promise((resolve)=>{
      setTimeout(resolve,ms);
  })
}

async function main(){

  await promi(1000);
  console.log("hi");

  await promi(3000);
  console.log("hello");

  await promi(5000);
  console.log("hello there");
  
  
  
}


main();