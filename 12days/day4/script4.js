const display = document.getElementById('display');
const input = document.getElementById('inp');

input.addEventListener('input',()=>{
  display.innerText = input.value ;
})