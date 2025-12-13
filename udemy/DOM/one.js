// example 1

// let a = document.getElementById("myParagraph");
// let b = document.getElementById("changeTextButton");


// b.addEventListener('click',()=>{
//   if(a.innerText=="ggg"){
//     a.innerText = "This is a Paragraph. Click the button to change me!";
//   }
//   else{
//     a.innerText = "ggg";
//   }
// }) 


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++

//example 2

// let a = document.getElementById("citiesList").firstElementChild;

// let b = document.getElementById("HighlightFirstCity");

// b.addEventListener('click',()=>{

//     if(a.classList.contains("high")){
//       a.classList.remove("high")
//     }else{
//       a.classList.add("high");
//     }
// });

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//example 3

// let a = document.getElementById("coffeeType");

// let button = document.getElementById("changeOrder");
// button.addEventListener('click',()=>{
//   a.innerText = "Espresso"
// })



//++++++++++++++++++++++++++++++++++++++++++++++++++++++
//example 4

// let list = document.getElementById("shoppingList");
// let button = document.getElementById("addNewItem");


// button.addEventListener('click',()=>{
//   let newItem = document.createElement('li');
//   newItem.innerText = "eggggg";

//   list.appendChild(newItem);
// })



//+++++++++++++++++++++++++++++++++++++++++++++++++++++
//example 5

// let list = document.getElementById("shoppingList-5");
// let button = document.getElementById("removeItem");

// button.addEventListener('click',()=>{
//   list.lastElementChild.remove();
// })


//+++++++++++++++++++++++++++++++++++++++++++++++++++++
//example 7

// let list = document.getElementById("teaList");

// list.addEventListener('click',(event)=>{
//     console.log(event.target.textContent);
    
// })


//+++++++++++++++++++++++++++++++++++++++++++++++++++++
//example-8


// let input = document.getElementById("feedbackInput");
// let form = document.getElementById("example-8");
// let display = document.getElementById("feedbackDisplay");
// form.addEventListener('submit',(event)=>{
//    event.preventDefault();  
//     display.innerHTML = input.value;
    
// })


//++++++++++++++++++++++++++++++++++++++++++++++++++++++



//1
// const p = document.getElementById('myParagraph');
// const btn = document.getElementById('changeTextButton');

// btn.addEventListener('click',()=>{
//   p.innerText = "jindabaad";
// })



//2
// const item = document.getElementById('citiesList').firstElementChild;
// const btn = document.getElementById('HighlightFirstCity');

// btn.addEventListener('click',()=>{
//     if(item.classList.contains("high")){
//       item.classList.remove('high');
//     }
//     else{
//       item.classList.add('high');
//     }
// })


//3
// const itm = document.getElementById('coffeeType');
// const btn = document.getElementById('changeOrder');

// btn.addEventListener('click',()=>{
//   itm.innerText = "Espresso"
// })


// //4
// const list = document.getElementById("shoppingList");
// const btn = document.getElementById('addNewItem');

// btn.addEventListener('click',()=>{
//   let newEle = document.createElement('li');
//   newEle.innerText = "eggs";
//   list.appendChild(newEle);
// })

//5
// const list = document.getElementById('shoppingList-5');
// const btn = document.getElementById('removeItem');

// btn.addEventListener('click',()=>{
//   list.lastChild.remove();
// })

//7

// const list = document.getElementById('teaList');

// list.addEventListener('click',(e)=>{
//     alert(e.target.textContent)
// })


// const inp = document.getElementById('feedbackInput');
// const btn = document.getElementById('b');
// const dis = document.getElementById('feedbackDisplay');

// btn.addEventListener('click',(e)=>{
//   dis.innerText = inp.value;
//   e.preventDefault();

// })