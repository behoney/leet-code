/**
 * Definition for a binary tree node.

 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  const pTraversal = [];
  const qTraversal = [];

  const dfsPreorder = (node, traversal) => {
    if (node == null) return;

    traversal.push(node.val);
    if (node.left != null) dfsPreorder(node.left, traversal);
    else traversal.push(-Infinity)
    if (node.right != null) dfsPreorder(node.right, traversal);
    else traversal.push(-Infinity)
  };
  dfsPreorder(p, pTraversal);
  dfsPreorder(q, qTraversal);

  const isSameArr = (a, b) => {
    let i = 0;
    if (b.length != a.length) return false;
    for (; i < a.length; i++) {
      if (i >= b.length) return false;
      if (a[i] != b[i]) return false;
    }
    return true;
  };

  const result = isSameArr(pTraversal, qTraversal);
  console.log(pTraversal);
  console.log(qTraversal);

  return result;
};
