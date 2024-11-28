const num3 = 30; //3

Number(num % 2 === 0 || num % 3 === 0 || num % 5 === 0) &&
  !(num % 2 === 0 && num % 3 === 0 || num % 3 === 0 && num % 5 === 0 || num % 5 === 0 && num % 2 === 0) &&
  !(num % 2 === 0 && num % 3 === 0 && num % 5 === 0) &&
  console.log('1');

Number(num2 % 2 === 0 && num2 % 3 === 0 || num2 % 3 === 0 && num2 % 5 === 0 || num2 % 5 === 0 && num2 % 2 === 0) &&
  !(num2 % 2 === 0 && num2 % 3 === 0 && num2 % 5 === 0) &&
  console.log('2');


Number(num3 % 2 === 0 && num3 % 3 === 0 && num3 % 5 === 0) &&
  console.log('3');
