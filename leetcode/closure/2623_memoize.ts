function memoize(fn: Function): Function {
  const cache = new Map<string, any>();
  return function (...args: any[]) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }

    const result = fn(...args);
    cache.set(key, result);

    return result;
  };
}
