import { MaxHeap, MinHeap } from './util.js';

function solution(operations) {
  const maxHeap = new MaxHeap();
  const minHeap = new MinHeap();

  for (const op of operations) {
    const [condition, num] = op.split(' ');

    if (condition === 'I') {
      // insert
      maxHeap.insert(Number(num));
      minHeap.insert(Number(num));
    }

    if (condition === 'D' && num === '1') {
      // max delete
      maxHeap.extractMax();
      minHeap.extractMin();
    }

    if (condition === 'D' && num === '-1') {
      // min delete
      maxHeap.extractMax();
      minHeap.extractMin();
    }
  }

  if (!maxHeap.heap.length && !minHeap.heap.length) {
    return [0, 0];
  }

  return [Math.max(...maxHeap.heap), Math.min(...minHeap.heap)];
}
console.log(solution(['I 16', 'I -5643', 'D -1', 'D 1', 'D 1', 'I 123', 'D -1']));
