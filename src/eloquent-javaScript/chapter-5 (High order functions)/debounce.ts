export const debounce = (fn: any, ms: number) => {
  let isHoldOn = false;
  return function(...args: any) {
    if (isHoldOn) return console.log(`fuck you! wait ${ms}ms`);
    isHoldOn = true;
    fn.apply(this, args);
    setTimeout(() => isHoldOn = false, ms)
  }
}
