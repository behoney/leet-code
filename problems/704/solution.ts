function search(nums: number[], target: number): number {
    if (!nums?.length) return -1;
    let lowerBound = 0, upperBound = nums.length;

    while (1) {
        const ptr: number = Math.floor((lowerBound + upperBound) / 2);

        if (nums[ptr] === target) { return ptr }
        if (ptr === lowerBound || ptr === upperBound) { return -1; }
        if (nums[ptr] > target)
            upperBound = ptr;
        else lowerBound = ptr;

    }
};




// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1


// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4
