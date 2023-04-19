function demo(){
  var xxx=10;  //local to the function
  yyy=20;   //global variable
  console.log("xxx inside method : "+xxx);
  console.log("yyy inside method : "+yyy);
}

demo();
// console.log("xxx outside method : "+xxx);
console.log("yyy outside method : "+yyy);

