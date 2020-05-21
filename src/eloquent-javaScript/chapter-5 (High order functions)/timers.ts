export const printNumbers = (from: number, to: number) => {
  let currentNumber: number = from;
  let timerID = setTimeout(function counter(number: number) {
    console.log(number);
    if (currentNumber <= to) {
      timerID = setTimeout(counter, 1e3, currentNumber++);
    } else {
      clearTimeout(timerID);
    }
  }, 1e3, currentNumber++);
}
