// 가장큰값을 맨앞에 둬서 -1 n 감소할것

import { MaxHeap } from './util.js';

function solution(n, works) {
  const heap = new MaxHeap();

  for (let i = 0; i < works.length; i++) {
    heap.insert(works[i]);
  }

  while (n > 0) {
    const maxWork = heap.extractMax();
    if (maxWork === null || maxWork === 0) break;

    heap.insert(maxWork - 1);
    n--;
  }

  console.log(heap.heap);

  return heap.heap.reduce((acc, cur) => acc + cur * cur, 0);
}

console.log(solution(3, [1, 1]));
