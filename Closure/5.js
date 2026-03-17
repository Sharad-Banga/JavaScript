// make it run only once

let view ;

function likeTheVideo(){
  let clicked= 0;
  
  return function(){
    if(clicked==0){
      view = "rodesidecoder";
      console.log("subscribe to : ",view)
      clicked++;
    }
    else{
      console.log("already done");
    }
  }
}

let j = likeTheVideo();
j();
j();
j();