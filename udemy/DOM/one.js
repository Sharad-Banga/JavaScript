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

let list = document.getElementById("shoppingList-5");
let button = document.getElementById("removeItem");

button.addEventListener('click',()=>{
  list.lastElementChild.remove();
})