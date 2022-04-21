class MyHashSet {
  set:Set<number> = new Set<number>();
  constructor() {
  }

  add(key: number): void {
    this.set.add(key)
  }

  remove(key: number): void {
    this.set.delete(key)
  }

  contains(key: number): boolean {
    return this.set.has(key)
  }
}

/**
* Your MyHashSet object will be instantiated and called as such:
* var obj = new MyHashSet()
* obj.add(key)
* obj.remove(key)
* var param_3 = obj.contains(key)
*/