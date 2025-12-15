const dis = document.getElementById("display");
const btn = document.getElementById("btn");

function counter(){
  let count = 0;

  return ()=>{
    count++;
    dis.innerText = count;
  }
}

const create = counter();

btn.addEventListener('click',create)