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
    console.log(`The number ${number} is not prime`);
    return false;
  }

  const dividers = getDividers(number);
  if (dividers.length > 2) {
    console.log(`The number ${number} is not prime, dividers ${dividers}`);
    return false;
  }

  console.log(`The number ${number} is prime, its dividers are: ${dividers}`)
}


/*
 * Test of functions
 * This is not very correct, the most correct option is use testing library
 */

const numbers = [2, 3, 5, 7, 11, 13, 20, 25, 33, 77, 99, 101, 999, 1029, 9999, 999999999];

for(const number of numbers) {
  isPrimeNumber(number);
}