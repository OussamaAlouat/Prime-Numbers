function isPrimeNumber(number) {
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
  console.log(arrayOfDividers);

  if (dividers > 2) {
    console.log('Is not prime number'); 
  }
}

isPrimeNumber(100);
