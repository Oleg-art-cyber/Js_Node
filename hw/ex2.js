for (let num = 2; num < 237; num++) {
  let isPrime = true;
  for (let i = 2; i <= Math.sqrt(num) && isPrime; i++) {
    isPrime = num % i !== 0;
  }
  isPrime && console.log(num);
}
