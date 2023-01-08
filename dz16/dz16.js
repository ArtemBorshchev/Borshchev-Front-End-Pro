/* eslint-disable no-alert */
/* eslint-disable no-console */

function sumOf() {
  let startNumber;
  do {
    startNumber = +prompt('введите число');
  } while (Number.isNaN(startNumber));
  return function sum(num) {
    startNumber += num;
    return startNumber;
  };
}
const sum = sumOf(0);
console.log(sum(3));
console.log(sum(5));
console.log(sum(20));
