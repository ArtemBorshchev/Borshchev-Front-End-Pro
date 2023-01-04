/* eslint-disable no-alert */
/* eslint-disable no-console */

function sumOf(num1) {
  return function sum(num2) {
    return num1 + num2;
  };
}
let user1Number;
let user2Number;
do {
  user1Number = +prompt('Введіть початкове значення функції');
  const sum = sumOf(user1Number);
  user2Number = +prompt('Введіть число, що додати');
  console.log(sum(user2Number));
} while (user1Number !== 0 || user2Number > 0);
// тобто щоб покинути цикл: 2 кліки ОК або ВІДМІНА
