function numSubarrayProductLessThanK(nums: number[], k: number): number {
    if (k == 0) return 0;
    if (nums.length == 1) return nums[0] < k ? 1 : 0;


    const subsets = [];
    for (let len = 1; len <= nums.length; len++) {
        for (let idx = 0; idx < nums.length; idx++) {
            const set = nums.slice(idx, len);
            if (set.length > 0)
                subsets.push(set);

        }
    }

    // console.log(subsets);

    const result = subsets.filter((e: number[]) => {
        let result = 1;
        for (const n of e) result *= n;
        return result < k
    })

    // console.log(result);

    return result.length

};