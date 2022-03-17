function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
    const result = [];

    for (let i = 0; i < nums1.length; i++) {
        const val = nums1[i];
        const idx = nums2.indexOf(val);
        if (idx === -1 || idx + 1 >= nums2.length) {
            result.push(-1);
            continue;
        }
        else {
            let find = false;
            for (let j = idx + 1; j < nums2.length; j++) {
                if (val < nums2[j]) {
                    find = true;
                    result.push(nums2[j])
                    break;
                }
            }
            if (!find) result.push(-1);
        }
    }
    return result;
};