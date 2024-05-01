//task 1

for (let i = 0; i <= 100; i++) {
  console.log(i);
}

//task 2

let i = 0;
while (i <= 50) {
  console.log(i);
  i++;
}

//task 3

let namesArray = ["Ronaldo", "Messi", "Zidane", "Becks", "Ronney"];

console.log(namesArray);

let removedLastPlayer = namesArray.pop();
console.log(namesArray);

let removedFirstPlayer = namesArray.shift();
console.log(namesArray);

namesArray.unshift("Frank Lampard");
console.log(namesArray);

namesArray.push("Scholes");
console.log(namesArray);

delete namesArray[1];
namesArray[1] = "Berbatov";
console.log(namesArray);

//task 4

let numbersArray = [];
for (let i = 1; i <= 10000; i++) {
  numbersArray.push(i * i);
}
console.log(numbersArray);

//while

let numbersArrayWhile = [];
let j = 1;
while (j <= 10000) {
  numbersArrayWhile.push(j * j);
  j++;
}
console.log(numbersArrayWhile);

//do while

let numbersArrayDoWhile = [];
let k = 1;
do {
  numbersArrayDoWhile.push(k * k);
  k++;
} while (k <= 10000);
console.log(numbersArrayDoWhile);

//task 5

let numbersTwoArray = [8, 17, 65, 23, 25];
let sum = 0;
for (let i = 0; i < numbersTwoArray.length; i++) {
  sum += numbersTwoArray[i];
}
console.log(sum);

//task 6

function oddOrEven(x) {
  if (x % 2 === 0) {
    console.log("False");
  } else {
    console.log("True");
  }
}
oddOrEven(2);
oddOrEven(5);
oddOrEven(11241);
oddOrEven(5424);

//task 7

function toLowerCase(str) {
  return str.toLowerCase();
}
let lowerCaseString = toLowerCase("I AM SMART ACADEMY STUDENT");
console.log(lowerCaseString);

//task 8

function filterEvenNumbers(numbers) {
  return numbers.filter(function (number) {
    return number % 2 === 0;
  });
}

let numbersFilterArray = [134, 2123, 341, 4144, 5124, 6362];
let evenNumbersArray = filterEvenNumbers(numbersFilterArray);
console.log(evenNumbersArray);
