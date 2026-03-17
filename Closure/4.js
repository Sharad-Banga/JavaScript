//private counter


function counter(){

  let _counter = 0;

  function add(){
    _counter++;
  }

  function dis(){
    console.log(_counter);
  }

  return {
    add , dis
  }
  
}

let {add, dis}  = counter();

dis()
add();
dis()
add();
dis()