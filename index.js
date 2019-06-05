function getDividers(number) {
  const arrayOfDividers = [];
  let index = 1;
  while (index <= number) {
    if (number % index === 0) {
      arrayOfDividers.push(index);
    }

    index++;
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
    console.log(`The number ${number} is not prime`);
    return false;
  }

  console.log(`The number ${number} is prime, its dividers are: ${dividers}`)
}

isPrimeNumber(3);
