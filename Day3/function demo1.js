//without return type and without argument
function first(){
  console.log("Welcome to JS Functions");
}

first();//calling function

//without return type and with argument
function greet(name){
  console.log("Welcome "+name);
}

greet("Jyotsna");

console.log("type of first : "+typeof first);
console.log("type of greet : "+typeof greet);

//with return type and without argument
function message(){
  return "Welcome to the world of Java Script";
}

var msg=message();
console.log(msg);
console.log("type of message : "+typeof message);

//with argument and with return type
function wish(name){
  return "Good Afternoon "+name;
}
console.log(wish("Mahesh"));
console.log("type of wish :"+typeof wish);






