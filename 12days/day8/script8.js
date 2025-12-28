const outer = document.querySelector('.outer');
const modal = document.querySelector('.modal');
const button = document.getElementById('btn');

button.addEventListener('click',(e)=>{
  modal.classList.remove('hid');
  e.stopPropagation();
})

outer.addEventListener('click',()=>{
  modal.classList.add('hid');
})

modal.addEventListener('click',(e)=>{
  e.stopPropagation();
})