class DynamicArray {
    /**
     * @constructor
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.size = 0
        this.array = []
    }

    /**
     * @param {number} i
     * @returns {number}
     */
    get(i) {
        return this.array[i]
    }

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i, n) {
        return this.array[i] = n
    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n) {
        
        if (this.size != this.capacity) {
            this.size ++
            return this.array[this.size - 1] = n
        } else {
            this.resize()
            this.size ++
            return this.array[this.size - 1] = n            
        }
    }

    /**
     * @returns {number}
     */
    popback() {
        const last = this.array[this.size - 1]
        this.size --;
        return last
    }

    /**
     * @returns {void}
     */
    resize() {
        this.capacity *= 2;
        const newArray = new Array(this.capacity);

        for (let i = 0; i<this.size; i++){
            newArray[i] = this.array[i]
        }

        return this.array = newArray
    }

    /**
     * @returns {number}
     */
    getSize() {
        return this.size
    }

    /**
     * @returns {number}
     */
    getCapacity() {
        return this.capacity
    }
}
