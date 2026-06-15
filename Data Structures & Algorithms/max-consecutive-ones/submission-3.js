class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let total = 0;
        let max = 0;
        for (let i = 0; i <= nums.length; i++){
            if (nums[i] === 1){
                total ++
                max = Math.max(max, total)
            } else {
                total = 0
            }
        }
        return max
    }
}
