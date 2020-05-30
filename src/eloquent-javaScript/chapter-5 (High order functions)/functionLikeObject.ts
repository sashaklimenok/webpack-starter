const makeCounter = () => {
  function counter() {
    counter.count ++;
    return counter
  }

  counter.count = 0;
  counter.set = (value: number) => counter.count = value;
  counter.decries = counter.count --;
  return counter;
}

const counter = makeCounter();
counter();



