export const spy = (fn: any) => {
  wrapper.calls = [] as any[];
  function wrapper(...args: number[]) {
    wrapper.calls.push(args);
    return fn(...args);
  }

  return wrapper;
}
