/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function widthOfBinaryTree(root: TreeNode | null): number {

  const tree = {};

  const dfs = (node: TreeNode, idx = 0) => {
    if (!node) {
      if (tree[idx] !== undefined)
        tree[idx].push(-Infinity)
      return;
    }
    if (tree[idx] === undefined) tree[idx] = [];

    dfs(node.left, idx + 1);
    tree[idx].push(node.val)
    dfs(node.right, idx + 1);
  }

  dfs(root);

  console.log(tree);
  let result = 0;
  for (const e of Object.keys(tree)) {
    result = Math.max(result, tree[e].filter(e => e != -Infinity).length);

    // {
    //   '0': [ 1 ],
    //   '1': [ 3, -Infinity ],
    //   '2': [ 5, 3 ],
    //   '3': [ 5, -Infinity ],
    //   '4': [ 8, -Infinity ],
    //   '5': [ 9, 10 ],
    //   '6': [ 1, -Infinity, -Infinity, 1 ]    // need to handle this case
    // }
    
    
  }

  return result
}