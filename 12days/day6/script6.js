const cars = document.getElementById('carss');
const lii = document.getElementById('car');

cars.addEventListener('click',(e)=>{
  if(e.target.tagName==='LI'){
      e.target.remove();
  }
  
})