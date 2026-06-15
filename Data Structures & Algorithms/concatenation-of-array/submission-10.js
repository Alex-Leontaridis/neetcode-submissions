class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        const newArray = nums
        newArray.push(...nums)
        return newArray
    }
}
