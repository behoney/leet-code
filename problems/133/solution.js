// Rep1 ~ 38min 19sec
/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function(node) {
    if(!node) return node

    const head = new _Node(node.val, [])
    const traverse = new Set()
    const cloneGraph = new Map()
    cloneGraph.set(node.val, head)

    const dfs = (node)=>{
        if(traverse.has(node.val)) return;
        else
        {
            traverse.add(node.val)

            if(!cloneGraph.has(node.val))
                cloneGraph.set(node.val, new _Node(node.val, []))
            const _node = cloneGraph.get(node.val)

            
            for(const neighbor of node.neighbors)
            {   
                dfs(neighbor)
                _node.neighbors.push(cloneGraph.get(neighbor.val))
            }
        }
    }

    dfs(node)

    return head
};