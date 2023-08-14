//#1 :Named FontFace, FN ceclaration
//function add() {}

//#2 :Anonymous
//IIFE : Intermediate Invoke Function Expression
// (function (message) {
//   console.log(message);
// })("Hi");

// (function (x, y) {
//   console.log(x + y);
// })(20, 6);

//expression
// let a = (function (x, y) {
//   return x + y;
// })(20, 6);
// console.log(a);

//2B
// //Variable = FN (FN==Expression)
// let myVar = ((5 + 2 + 20) / 2) * 3;
// //variable = FN (FN==Expression)
// //Function Expression
// const myFunc = function (x, y)
// {
//   return x * y;
// }
// //Assign named FN to Variable
// console.log(myFunc(5,10));

//Arrow Function
let a = function (x) {
  return x ** 2;
};
//Shortest
let b = (x, y) => x + y;

//Bracket
let c = (x, y) => {
  let res = x + y;
  return res;
};
console.log(a(5));
/*
1. Function Declaration / Named function
2. Function Expression / Anonymous Function
 #How to use
1. Define => Name,Input
2. call
*/

//Define
function sayHi(name, lastName) {
  console.log(`Hello ${name} ${lastName}`);
}
//call
sayHi("Parita");
sayHi("Sriwasut");

//Return Value : Function is execute.
function add(x, y) {
  let res = s + y;
  return res;
}
let r = add(4, 6); //reusable result
console.log(r);
console.log(add(5, 6)); //one time use

function isEven(n) {
  // if (n % 2 === 0) {
  //   return true;
  // }
  // return false;
  return n % 2 === 0; //refactor code
}
console.log(isEven(5));

//Checkpoint
//-Declare
//- Params
//- call
//-return

//###### Function Expression
let a = 5 * 2 + 7;
//Variable = expression
/*
expression : the things that can be evaluated many value to one value etc.
-single value // 7 or...
-combine expression : 7+2
-function result : add(4+5)
*/

let myFunc = add;
let z = console.log;
// Format : variable = Function(Function expression)
//Functiin expression : assign function to variable.
console.log(myFunc(1, 7));
z("Hi");

//Anonymous : No named function
//Function express : assigning anonymous function for sayHello function
const sayHello = function (name) {
  console.log("Hi " + name);
};
sayHello("Expression");

//1. function add () {} //declaration
//2. let add = function () {} //Anonymous
//3. let add = () => {} //arrow

// const minus = (a, b) =>
// {
//   return a - b;
// }

const minus = (a, b) => a - b;
const minusTwo = (a) => a - 2;
