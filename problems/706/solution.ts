type MapType = {
  [key: number]: number;
}

class MyHashMap {
  private map: MapType = {};

  constructor() {
  }

  put(key: number, value: number): void {
    this.map[key] = value;
  }

  get(key: number): number {
    if (this.map[key] === undefined) return -1;
    else return this.map[key]
  }

  remove(key: number): void {
    delete this.map[key]
  }
}

/**
* Your MyHashMap object will be instantiated and called as such:
* var obj = new MyHashMap()
* obj.put(key,value)
* var param_2 = obj.get(key)
* obj.remove(key)
*/