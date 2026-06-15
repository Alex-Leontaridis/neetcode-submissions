class Solution {
    /**
     * @param {string} ransomNote
     * @param {string} magazine
     * @return {boolean}
     */
    canConstruct(ransomNote, magazine) {
        if (ransomNote.length > magazine.length){
            return false
        }

        const countR = {}
        const countM = {}

        for (let i=0; i < ransomNote.length; i++){
            countR[ransomNote[i]] = (ransomNote[i], (countR[ransomNote[i]] ?? 0) + 1)
        }

        for (let i=0; i < magazine.length; i++){
            countM[magazine[i]] = (magazine[i], (countM[magazine[i]] ?? 0) + 1)
        }

        for (const r in countR){
            console.log(countM[r])
            if (countR[r] > countM[r] || countM[r] === undefined){
                return false
            }
        }
        return true
    }

}
