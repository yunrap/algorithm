import { TreeNode } from './utill';

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (!root) return false;

  // 리프에 도달했을 때, 남은 합이 자기 자신이면 OK
  if (!root.left && !root.right) {
    return root.val === targetSum;
  }

  // 왼쪽/오른쪽으로 내려가면서 합을 줄인다
  return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val);
}
