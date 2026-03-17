
function a(){
  for(var i=0 ; i< 4 ; i++){
    function b(i){
      setTimeout(function(){
      console.log(i);
      },i*1000)
    }
    b(i);
  }
}

a();