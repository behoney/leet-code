/**
 * Definition for node.
 * class Node {
 *     val: number
 *     children: Node[]
 *     constructor(val?: number) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = []
 *     }
 * }
 */

function preorder(root: Node | null): number[] {
  if (!root) return []
  const result = [];

  const dfs = (node) => {
    if (!node) return;

    result.push(node.val);
    node.children.map(child => {
      dfs(child);
    })
  }
  dfs(root);
  return result;
};