function receivesAFunction(callback){

callback();

}
function returnsANamedFunction(){
 function add(num1,num2){
  return num1+num2;
 }
 return add
}

function returnsAnAnonymousFunction(){
  return function(){
    return 10 / 2
 
  }

}

