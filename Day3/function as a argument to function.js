//first class function
var value=function(arg1){
//   console.log(arg1);
  arg1();
  return "hello everyone!";
}
var val1=10;
var val=function(){
  console.log("Welcome");
}

// value(val1);
// value(10);
// console.log("================");
value(val);
value(function(){
  console.log("Welcome from anonymous function");
});












