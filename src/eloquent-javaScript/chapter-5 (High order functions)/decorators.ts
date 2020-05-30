export interface Obj {
  some: () => number;
  slow: (x: number) => number;
}

const cacheDecorator = (fn: (x: number) => number) => {
  const cache = new Map();
  return function(x: number) {
    if (cache.has(x)) {
      console.log('from cache');
      return cache.get(x);
    }

    const result = fn.call(this, x);
    cache.set(x, result);
    return result;
  }
}

const obj: Obj = {
  some() {
    return 2;
  },

  slow(x) {
    return x * this.some()
  }
}

obj.slow = cacheDecorator(obj.slow);

