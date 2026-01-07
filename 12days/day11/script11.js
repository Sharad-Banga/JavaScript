let inptext = document.querySelector('.in');
let distext = document.querySelector('.main-text');
let rnge  = document.querySelector('.rnge');

let fnt = document.querySelector('#font');

distext.style.fontFamily = fnt.value;
distext.textContent = inptext.value;
distext.style.scale = rnge.value/10;

const inp = document.getElementById("aa");

inptext.addEventListener('input',(e)=>{
  distext.textContent = e.target.value;
})

rnge.addEventListener('input',(e)=>{
    distext.style.scale = (e.target.value)/8 + 3;
})

fnt.addEventListener('input',(e)=>{
  distext.style.fontFamily = e.target.value;
})