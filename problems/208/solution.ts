class TrieNode {
    value:string
    children: {[key:string]:TrieNode}
    isEndWord: boolean
    
    constructor(value: string) {
        this.value = value
        this.children = {}
        this.isEndWord = false
    }

    hasChildren (): boolean {
        return Boolean(Object.keys(this.children).length)
    }

    getChildren (str: string) : TrieNode | null {
        return this.children[str]
    }
}

class Trie {
    private head: TrieNode
    constructor() {
        this.head = new TrieNode("")
    }

    insert(word: string): void {
        let node = this.head
        const chars = word.split('').reverse()

        while(node.hasChildren()){
            const word = chars.at(-1)
            const childNode = node.getChildren(word)
            
            if(!childNode) break;
            else{
                chars.pop()
                node = childNode
            }
        }

        while(chars.length){
            const value = chars.pop()
            const newNode = new TrieNode(value)
            node.children[value] = newNode
            node = newNode
        }
        node.isEndWord = true
    }

    search(word: string): boolean {
        let node = this.head
        const chars = word.split('').reverse()

        while(node.hasChildren() && chars.length){
            const _word = chars.at(-1)
            const childNode = node.getChildren(_word)

            console.log(word, _word, childNode?.value, chars)
            
            if(!childNode) break;
            else{
                chars.pop()
                node = childNode
            }
        }

        return !chars.length && node.isEndWord
    }

    startsWith(prefix: string): boolean {
        let node = this.head
        const chars = prefix.split('').reverse()

        while(node.hasChildren() && chars.length){
            const word = chars.at(-1)
            const childNode = node.getChildren(word)
            
            if(!childNode) break;
            else{
                chars.pop()
                node = childNode
            }
        }
        
        return !chars.length
    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */