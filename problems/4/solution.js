/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */



var findMedianSortedArrays = function(nums1, nums2) {
    const mergedArr = new Array(nums1.length + nums2.length).fill(-Infinity)
    
    let cnt1 = 0, cnt2 = 0
    for(let i=0;i<mergedArr.length; i++){
        if(cnt1 > nums1.length - 1){
            for(let j = cnt2; j < nums2.length; j++){
                mergedArr[i++] = nums2[j]
            }
        }
        else if(cnt2 > nums2.length - 1){
            for(let j = cnt1; j < nums1.length; j++){
                mergedArr[i++] = nums1[j]
            }
        }
        else
        {
            mergedArr[i] = (nums1[cnt1] < nums2[cnt2]) ? nums1[cnt1++] : nums2[cnt2++]
        }
    }

    return mergedArr.length % 2 ? mergedArr[Math.floor(mergedArr.length / 2)] : (mergedArr[mergedArr.length / 2 - 1] + mergedArr[mergedArr.length / 2]) / 2 

};