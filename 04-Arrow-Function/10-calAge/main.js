// function isLeap(year) {
//   return year % 4 == 0 && (year % 100 != 0 || year % 400 == 0);
// }
const calAge = (isLeap) => {
  let currentYear = 2020;
  let period = currentYear - isLeap;
  console.log(`${period} years`);
  let totalDay = 365;
  let leapYear = 366;
  let sum = 0;

  for (let i = 0; i < period; i++) {
    if (i % 4 == 0) {
      sum += leapYear;
    } else {
      sum += totalDay;
    }
  }
  let countDay = period * totalDay;
  console.log(`Count day not including February : ${countDay} day`);
  console.log(`Count day including February : ${sum} day`);
  return sum;
};
console.log(calAge(1995));
