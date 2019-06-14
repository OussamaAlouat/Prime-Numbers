/*
 * Version 0.2.0
 */

function getDividers(number) {
  const arrayOfDividers = [];
  for (let index = 1; index <= number; index++) {
    if (number % index === 0) {
      arrayOfDividers.push(index);
    }
  }

  return arrayOfDividers;
}

function isPrimeNumber(number) {
  if (number  === 1 || (number!== 2 && number%2 === 0)) {
    return false;
  }

  const dividers = getDividers(number);
  if (dividers.length > 2) {
    return false;
  }

  return true;
}


function processNumbers (numbers) {
  for (const number of numbers) {
    const isPrime = isPrimeNumber(number);
    const message = isPrime ? `The number ${number} is prime`: `The number ${number}, is not prime`;
    console.log(message);
  }
} 

const numbers = [2, 3, 5, 7, 11, 13, 20, 25, 33, 77, 99, 101, 999, 1029, 9999, 999999999];
processNumbers(numbers);
