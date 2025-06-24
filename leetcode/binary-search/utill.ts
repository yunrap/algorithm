// 노드 클래스정의
export class TreeNode {
  left: TreeNode | null;
  right: TreeNode | null;
  val: number;

  constructor(key: any) {
    this.left = null;
    this.right = null;
    this.val = key;
  }
}

// 이진탐색 트리 클래스정의
export class BST {
  root: TreeNode | null;
  constructor() {
    this.root = null;
  }

  insert(key: number) {
    if (!this.root) {
      // 루트노드가없는경우
      this.root = new TreeNode(key);
    } else {
      let curr = this.root;
      while (true) {
        // 왼쪽자식노드이동
        if (key < curr.val) {
          if (curr.left) {
            curr = curr.left;
          } else {
            curr.left = new TreeNode(key);
            break;
          }
        } else {
          if (curr.right) {
            curr = curr.right;
          } else {
            curr.right = new TreeNode(key);
            break;
          }
        }
      }
    }
  }
}
