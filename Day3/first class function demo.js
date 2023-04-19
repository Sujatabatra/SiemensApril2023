//first class function
var value=function(){
  return "hello everyone!";
}

console.log(typeof value);
var msg=value();
console.log(msg);

var obj={
  prop1:10,
  prop2:"ABC",
  prop3:false,
  prop4:{},
  prop5:null,
  prop6:undefined,
  prop7:function(){
    console.log("function inside object");
  }
}

console.log(obj);










