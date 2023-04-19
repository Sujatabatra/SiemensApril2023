function print(arg1,arg2,arg3){
//   console.log("arg1 : "+arg1);
//   console.log("arg2 : "+arg2);
//   console.log("arg3 : "+arg3);
  console.log("arguments : "+arguments.length);
  for(i=0;i<arguments.length;i++){
    console.log("argument "+i+": "+arguments[i]);
  }
}

console.log(print);
print(12,24,39);
console.log("==================");
print(12,"Sujata",true);
console.log("===================");
print("12",19);
console.log("===================");
print();
console.log("===================");
print("12",19,"AAA","XYZ","MNO","ABC");









