function isPrimeNumber(number) {
  if (number  === 1 || (number!== 2 && number%2 === 0)) {
    console.log(`The number ${number} is not prime`);
    return false;
  }

  let dividers = 0;
  const arrayOfDividers = [];
  let index = 1;
  while (index <= number) {
    if (number % index === 0) {
      dividers +=1;
      arrayOfDividers.push(index);
    }

    index++;
  }

  if (dividers > 2) {
    console.log(`The number ${number} is not prime`);
    return false;
  }

  console.log(`The number ${number} is prime, its dividers are: ${arrayOfDividers}`)
}

isPrimeNumber(3);
