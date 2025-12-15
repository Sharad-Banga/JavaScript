const room = document.getElementById('out');
const btn = document.getElementById('button');

if(localStorage.getItem('dark')=="true"){
  room.classList.add('outer')
}

btn.addEventListener('click',()=>{
  room.classList.toggle('outer');
  localStorage.setItem('dark',
    room.classList.contains('outer')
  )
})