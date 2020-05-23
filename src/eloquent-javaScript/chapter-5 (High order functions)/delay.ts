export const delay = (fn: any, ms: number) => {
  return (...args: any[]) => {
    setTimeout(fn, ms, ...args);
  }
}
