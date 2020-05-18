export const fizzbuzz = (size: number): string => {
  let phrase: string = '';
  let i: number = 0;
  while(i <= size) {
    if((i % 3) === 0) phrase += 'Fizz';
    if((i % 5) === 0) phrase += 'Buzz';
    if((i % 5 && i % 3) === 0) phrase += 'FizzBuzz';
    i++
  }
  return phrase
}
