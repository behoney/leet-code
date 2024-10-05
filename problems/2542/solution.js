// Rep1 ~ 47min 26sec
// NOTE:: rep2 required
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var maxScore = function(nums1, nums2, k) {
    if(nums1.length === k) return nums1.reduce((acc,cur)=>acc+cur, 0) * Math.min(...nums2)

    const tempMap = new Map()

    for(let i=0; i < nums1.length; i++){
        if(!tempMap.has(nums2.at(i)))
            tempMap.set(nums2.at(i), [])
        tempMap.get(nums2.at(i)).push(nums1.at(i))
    }

    const _nums1 = []
    const _nums2 = [...nums2]
    _nums2.sort((a,b)=> b-a)

    for(let i=0; i < _nums2.length && tempMap.size; i++)
    {
        if(tempMap.has(_nums2.at(i)))
            _nums1.push(...tempMap.get(_nums2.at(i)))
        tempMap.delete(_nums2.at(i))
    }

    let max = 0

    const minHeap = new MinPriorityQueue();
    let sum = 0
    for(let i=0; i < _nums2.length; i++ )
    {
        minHeap.enqueue(_nums1.at(i))
        sum += _nums1.at(i)
        
        if(minHeap.size() === k)
        {
            max = Math.max(max, sum * _nums2.at(i))
            sum -= minHeap.dequeue().element
        }
    }

    return max
};