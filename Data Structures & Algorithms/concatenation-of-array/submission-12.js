class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        const newArray = []
        newArray.push(...nums,...nums)
        return newArray
    }
}
