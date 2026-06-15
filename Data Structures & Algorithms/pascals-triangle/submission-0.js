class Solution {
    /**
     * @param {number} numRows
     * @return {number[][]}
     */
    generate(numRows) {
        const map = []

        for (let i = 0; i < numRows; i++){
            map[i] = []
            map[i][0] = 1
            map[i][i] = 1

            for (let j = 1; j < i; j++){
                if (i > 1){
                    map[i][j] = map[i - 1][j] + map[i - 1][j - 1]
                }
            }
        }

        return map
    }
}
