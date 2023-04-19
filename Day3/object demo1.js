//Js is object oriented programming language however it is not class based

//JS objects are freeform, they are not bound to any class.

//In JS we can't control if the property is public/private . Any property is always accessible
var myobj={};
console.log(myobj);

myobj.fname="Sujata";
console.log(myobj);
console.log(typeof myobj);

myobj.lname="Batra";
myobj.yearofexp=22;
myobj.prop1=true;
console.log(myobj);
console.log(typeof myobj);

myobj.addr={
  hNo:101,
  Street:"Street Name",
  city:"Delhi",
  state:"Delhi",
  pincode:110001
}
console.log(myobj);
console.log(typeof myobj);

myobj.prop2=null;
console.log(myobj);
console.log(typeof myobj);

console.log("datatype of fname: "+typeof myobj.fname);
console.log("datatype of lname: "+typeof myobj.lname);
console.log("datatype of addr: "+typeof myobj.addr);
console.log("datatype of prop1: "+typeof myobj.prop1);
console.log("datatype of prop2: "+typeof myobj.prop2);






