import { TreeNode } from './utill';

export function searchBST(root: TreeNode | null, val: number): TreeNode | null {
  while (root !== null) {
    if (root.val === val) return root;
    root = val < root.val ? root.left : root.right;
  }
  return null;
}

const root = [4, 2, 7, 1, 3];
const bst = new BST();
root.forEach((val) => bst.insert(val));
console.log(searchBST(bst.root, 2));
