/* eslint-disable no-alert */
/* eslint-disable no-console */

function getPow(num, degree) {
  return (degree === 1) ? num : num * (getPow(num, degree - 1));
}

// function getPow(num, degree) {
//   if (degree === 1) {
//     return num;
//   }
//   return num * (getPow(num, degree - 1));
// }
const userNumber = prompt('Введіть число');
const userDegree = prompt('Введіть степень');

const resultNum = getPow(userNumber, userDegree);
console.log(resultNum);
