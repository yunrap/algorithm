// 전위순회 (루, 왼, 오)
function preOrder(nodes: number[], idx: number) {
  if (idx < nodes.length) {
    let ret = `${nodes[idx]}`;
    ret += preOrder(nodes, 2 * idx + 1); // left child
    ret += preOrder(nodes, 2 * idx + 2); // right child
    return ret;
  }
  return '';
}

// 중위순회 (왼, 루, 오)
function inorder(nodes: number[], idx: number): string {
  if (idx < nodes.length) {
    let ret = inorder(nodes, 2 * idx + 1); // left child
    ret += `${nodes[idx]}`;
    ret += inorder(nodes, 2 * idx + 2); // right child
    return ret;
  }
  return '';
}

// 후위순회 (왼, 오, 루)
function postOrder(nodes: number[], idx: number): string {
  if (idx < nodes.length) {
    let ret = postOrder(nodes, 2 * idx + 1); // left child
    ret += postOrder(nodes, 2 * idx + 2); // right child
    ret += `${nodes[idx]}`;
    return ret;
  }
  return '';
}

function solution(nodes: number[]): string {
  return `preOrder: ${preOrder(nodes, 0)}\n` + `inorder: ${inorder(nodes, 0)}\n` + `postOrder: ${postOrder(nodes, 0)}`;
}

console.log(solution([1, 2, 3, 4, 5, 6, 7]));

export { preOrder, inorder, postOrder, solution };
