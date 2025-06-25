import { TreeNode } from './utill';

export function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  const queue1: (TreeNode | null)[] = [p];
  const queue2: (TreeNode | null)[] = [q];

  //
  while (queue1.length > 0 && queue2.length > 0) {
    const que1 = queue1.shift();
    const que2 = queue2.shift();

    // 둘다 값이없을때
    if (!que1 && !que2) continue;

    // 하나만 널이거나 값이다른경우
    if (!que1 || !que2 || que1.val !== que2.val) {
      return false;
    }

    // push로 자식노드 유지
    queue1.push(que1.right);
    queue1.push(que1.left);
    queue2.push(que2.right);
    queue2.push(que2.left);
  }

  return queue1.length === queue2.length;
}
