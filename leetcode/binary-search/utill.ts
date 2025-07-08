class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(val: number) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  root: TreeNode | null = null;

  insert(val: number) {
    this.root = this.insertNode(this.root, val);
  }

  private insertNode(node: TreeNode | null, val: number): TreeNode {
    if (node === null) return new TreeNode(val);

    if (val < node.val) {
      node.left = this.insertNode(node.left, val);
    } else {
      node.right = this.insertNode(node.right, val);
    }
    return node;
  }
}
function buildTree(arr: (number | null)[]): TreeNode | null {
  if (arr.length === 0 || arr[0] === null) return null;
  const root = new TreeNode(arr[0]);
  const queue = [root];
  let i = 1;
  while (queue.length > 0 && i < arr.length) {
    const current = queue.shift();
    if (!current) continue;
    const leftVal = arr[i++];
    if (leftVal !== undefined && leftVal !== null) {
      current.left = new TreeNode(leftVal);
      queue.push(current.left);
    }
    const rightVal = arr[i++];
    if (rightVal !== undefined && rightVal !== null) {
      current.right = new TreeNode(rightVal);
      queue.push(current.right);
    }
  }
  return root;
}

export { TreeNode, BST, buildTree };
