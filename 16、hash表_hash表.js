/**
 * hash 表的是实现(链地址发实现)
 */

function HashTable() {
  // 属性
  this.storage = [] // 数组 [[[k,v],[k.v]]]
  this.count = 0 // 长度
  this.limit = 7 // 总长度
  // 装载因子
  // loadFactor > 0.75 需要进行扩容, < 0.25 减小
  // 方法
  // 质数判断
  function isPrime(num) {
    var temp = parseInt(Math.sqrt(num))
    for (let j = 2;j <= temp;j++) {
      if (num % j === 0) {
        return false
      }
    }
    return true
  }
  HashTable.prototype.hashCode = function(str, size) {
    // 1、定义hashCode变量
    var hashCode = 0
  
    // 2、霍纳算法，来计算hashCode的值
    // cats ->  Unicode 编码
    /**
     * 第一轮 (37 * 0 + 97) % size = index
     */
    for(let i = 0; i < str.length;i++) {
      var codeAt = str.charCodeAt(i) // 编码
      
      hashCode = 37 * hashCode + codeAt // 质数
    }
    // 3、取余
    var index = hashCode % size
  
    return index
  }

  // 1、插入数据
  HashTable.prototype.put = function (key, value) {
     // 1、根据key获取对应的index
     var index = this.hashCode(key, this.limit)
    //  2、根据索引取出对应的bucket
    var bucket = this.storage[index]
    // 3、判断该bucket是否为null、
    if (!bucket) {
      bucket = []
      this.storage[index] = bucket
    }
    // 4、插入数据
    // 修改
    for(let i = 0; i < bucket.length; i++) {
      const current = bucket[i]
      if (current[0] === key) {
        current[1] = value
        return true
      }
    }
    // 添加
    bucket.push([key, value])
    // 5、长度加一
    this.count += 1
    // 6、判断是否扩容
    if (this.count > this.limit * 0.75) {
      this.resize(this.limit * 2)
    }
  }

  // 2、获取元素
  HashTable.prototype.get = function (key) {
    if (!this.count) return null
    // 1、根据key获取对应的index
    var index = this.hashCode(key, this.limit)
    //  2、根据索引取出对应的bucket
    var bucket = this.storage[index]
    if (!bucket) return null
    // 3、查找当前元素
    for(let i = 0; i < bucket.length; i++) {
      const current = bucket[i]
      if (current[0] === key) {
        return current[1]
      }
    }
  }

  // 3、删除操作
  HashTable.prototype.remove = function (key) {
    if (!this.count) return null
    // 1、根据key获取对应的index
    var index = this.hashCode(key, this.limit)
    //  2、根据索引取出对应的bucket
    var bucket = this.storage[index]
    if (!bucket) return null
    // 3、查找当前元素
    for(let i = 0; i < bucket.length; i++) {
      const current = bucket[i]
      if (current[0] === key) {
        this.count -= 1
        // 容量减小
        if (this.limit > 7 && this.count < this.limit * 0.25) {
          this.resize(Math.floor(this.limit / 2))
        }
        return bucket.splice(i, 1)
      }
    }
  }

  // 4、获取方法
  HashTable.prototype.getValue = function () {
    return this.storage
  }

  // 获取
  HashTable.prototype.getPrime = function (num) {
    var temp = num
    while(!this.isPrime(temp)) {
      temp++
    }
    return temp
  }

  // 扩容
  HashTable.prototype.resize = function (newLimit) {
    // 质数判断
    var is_Prime = isPrime(newLimit)
    var tempLimit = is_Prime ? newLimit : this.getPrime(newLimit)
    // 1、旧的数组内容
    var oldStorage = this.storage
    // 2、重置元素
    this.storage = []
    this.count = 0
    this.limit = tempLimit
    // 3、遍历oldStorage 中所有的butcket
    for (let i = 0; i< oldStorage.length; i++) {
      // 3.1、去除当前桶
      var bucket  = oldStorage[i]
      if (!bucket) {
        // 开启下次
        continue
      }
      // 3.2 子元素
      for (let j = 0;j < bucket.length;j++) {
        var tuple = bucket[j]
        this.push(tuple[0], tuple[1])
      }
    }

  }
}

var ht = new HashTable()
ht.put('abc', '123')
ht.put('cda', '321')
console.log(ht.getValue())