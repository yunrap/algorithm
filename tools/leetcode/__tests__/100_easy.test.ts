import { isSameTree } from '../binary-search/100_easy';

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val ?? 0;
    this.left = left ?? null;
    this.right = right ?? null;
  }
}

describe('isSameTree', () => {
  test('두 빈 트리는 같다', () => {
    expect(isSameTree(null, null)).toBe(true);
  });

  test('같은 단일 노드 트리', () => {
    const p = new TreeNode(1);
    const q = new TreeNode(1);
    expect(isSameTree(p, q)).toBe(true);
  });

  test('다른 값이 있는 트리', () => {
    const p = new TreeNode(1);
    const q = new TreeNode(2);
    expect(isSameTree(p, q)).toBe(false);
  });

  test('서브트리 구조 다르면 false', () => {
    const p = new TreeNode(1, new TreeNode(2), null);
    const q = new TreeNode(1, null, new TreeNode(2));
    expect(isSameTree(p, q)).toBe(false);
  });

  test('복잡한 동일 구조 트리', () => {
    const p = new TreeNode(1, new TreeNode(2), new TreeNode(3));
    const q = new TreeNode(1, new TreeNode(2), new TreeNode(3));
    expect(isSameTree(p, q)).toBe(true);
  });
});
