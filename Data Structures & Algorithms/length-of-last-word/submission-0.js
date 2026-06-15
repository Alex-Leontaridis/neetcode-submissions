class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLastWord(s) {
        const array = s.trim().split(' ')
        return array[array.length - 1].length
    }
}
