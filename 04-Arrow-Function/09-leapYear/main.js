// let leapYear = (year) => {
//1
//   if (year % 4 === 0 && year % 100 !== 0) {
//     return true;
//   } else if (year % 100 === 0 && year % 4 !== 0) {
//     return false;
//   } else if (year % 400 === 0) {
//     return true;
//   }else{
//return false;
//}
//2
// if (year % 400 === 0)
// {
//   return true;
// } else if (year % 100 === 0)
// {
//   return false;
// } else if (year % 4 === 0)
// {
//   return true;
// } else
// {
//   return false;
// }

//3
// if (year % 400 === 0)
// {
//   return true;
// }
// if (year % 4 === 0)
// {
//   return false;
// }
// if (year % 4 === 0)
// {
//   return true;
// }else{
//return false;

//4
// return year % 400 === 0
//   ? true
//   : year % 4 === 0
//   ? false
//   : year % 4 === 0
//   ? true
//   : false;

//5
// if (year % 100 === 0) {
//   return year % 400 === 0;
// }
// return year % 4 === 0;

//6
//   return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
// };
let leapYear = (year) => (year % 100 === 0 ? year % 400 === 0 : year % 4 === 0);
console.log(leapYear(1988));
console.log(leapYear(2000));
