//version : 1
function checkAge(age) {
  if (age > 18) {
    return true;
  }
  return confirm("Did parents allow you?");
}
console.log(checkAge());

//version : 2
function checkAge(age) {
  return age > 18 ? true : confirm("Did parents allow you?");
}
console.log(checkAge());

//version : 3
function checkAge(age) {
  age > 18 || !age > 18;
  return confirm("Did parents allow you?");
}
console.log(checkAge());
