function CharNode(value){
    this.char = value
    this.children = []
    this.isEnd = false

    this.has = (val)=>{
        return this.children.some(node=>node.char === val)
    }

    this.get = (val)=>{
        return this.children.find(node => node.char === val) || null
    }

    this.getAll = ()=>{
        return this.children
    }

    this.addChild = (val)=>{
        if(this.has(val)) return this.get(val)
        else
        {
            const node = new CharNode(val)
            this.children.push(node)
            return node
        }
    }
}

var WordDictionary = function() {
    this.root = new CharNode()
    this.addRecords = new Set()
    this.searchHitRecords = new Set()
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    if(this.addRecords.has(word))
    return;

    const chars = word.split("").reverse();
    let head = this.root
    while(chars.length){
        const char = chars.pop()
        head = head.addChild(char)
    }
    head.isEnd = true
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    if(this.searchHitRecords.has(word)) return true

    const searchHelper = (word, root)=>{
        const chars = word.split("").reverse();
        let head = root
        while(chars.length){
            const char = chars.pop()
            if(char === ".")
            {
                const rem = chars.reverse().join("")
                return head.getAll().some(node => searchHelper(rem, node))
            }
            else if(head.has(char)){
                head = head.get(char)
                if(head === null) return false
            }
            else return false
        }
        return head.isEnd
    }
    const result = searchHelper(word, this.root)
    if(result) this.searchHitRecords.add(result)
    return result
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */