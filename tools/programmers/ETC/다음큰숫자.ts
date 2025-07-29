function nextBigNumber(n: number): number {
  let next = n + 1;
  const count = n.toString(2).split('1').length - 1;

  while (next.toString(2).split('1').length - 1 !== count) {
    next++;
  }

  return next;
}
export { nextBigNumber };
