console.log("scope");

let message = "Hi"; //global

let sayHi = () => {
  let message = "Hello";
  console.log(message); //Function scope
};
console.log(message); //global
