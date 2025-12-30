const inp = document.getElementById("input");
const btn = document.getElementById("button");
const listItem = document.getElementById("listItem");

let arr = ["sharad","sham","rahul","rana","rohit"];

listItem.innerHTML =  arr.map((ele)=>{
  return (
    `<li>${ele}</li>`
  )
})


inp.addEventListener('input',()=>{
  let str = inp.value ;
  const j = arr.filter((ele)=>{
    if(ele.startsWith(str)){
      return true;
    }else{
      return false;
    }
  })
  listItem.innerHTML =  j.map((ele)=>{
    return (
      `<li>${ele}</li>`
    )
  })
})