
var myObj={
  "prop1":"Hello",
  "prop2":234,
  "prop3":true,
  "1":"one",
  "document":"Some value"
} 

console.log(myObj);

console.log(myObj.prop4); //undefined

console.log(myObj.prop1);
//[] to access object property if property name is reserved word/invalid identifier or property name is dynamic
console.log(myObj["prop1"]);

//console.log(myObj.1);
console.log(myObj["1"]);

console.log(myObj["document"]);
console.log(myObj.document);

var x="prop2";
console.log(myObj.x);
console.log(myObj[x]);



