const menu = document.getElementById("menu");
const btn = document.getElementById("button");

btn.addEventListener("click",()=>{
  menu.classList.remove('c');
})

btn.addEventListener('blur',()=>{
  menu.classList.add('c');
})