const input = document.getElementById('inp');
const list = document.getElementById("list");
const button = document.getElementById("btn");

button.addEventListener('click',()=>{
  
  let newEle = document.createElement('li');
  newEle.innerText = input.value ;
  list.appendChild(newEle);
  input.value = "";
})