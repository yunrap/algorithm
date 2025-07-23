import { buildTree, TreeNode } from './utill';

export function inorderTraversal(root: TreeNode | null): number[] {
  if (root === null) return [];
  const leftVals = inorderTraversal(root.left);
  const rightVals = inorderTraversal(root.right);
  return [...leftVals, root.val, ...rightVals];
}

inorderTraversal(buildTree([1, 2, 3, 4, 5, null, 8, null, null, 6, 7, 9]));
