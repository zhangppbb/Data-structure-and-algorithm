/**
 * javascript 工具类
 */
// 创建字典函数
function Dictionay() {
  // 字典属性
  this.items = {}
  
  // 添加属性
  Dictionay.prototype.set = function (key, value) {
    this.items[key] = value;
  }

  // 判断值的存在
  Dictionay.prototype.has = function (key) {
    return this.items.hasOwnProperty(key);
  }

  // 移除属性
  Dictionay.prototype.remove = function (key) {
    if(!this.has(key)) return false
    delete this.items[key];
    return true
  }

  // 根据key 获取value
  Dictionay.prototype.get = function (key) {
    return this.has(key) ? this.items[key] : undefined;
  }

  // 获取所有的keys
  Dictionay.prototype.keys = function () {
    return Object.keys(this.items);
  }

  // 获取所有的values
  Dictionay.prototype.values = function () {
    return Object.values(this.items);
  }

  // size方法
  Dictionay.prototype.size = function () {
    return this.keys().length;
  }

  // clear 方法
  Dictionay.prototype.clear = function () {
    this.items = {}
  }
}

function Queue() {
  // 属性
  this.items = []
  // 方法
  // 队列尾部添加元素
  Queue.prototype.enqueue = function () {
    this.items.push(...arguments)
  }
  // 删除队列元素
  Queue.prototype.dequeue = function () {
    return this.items.shift()
  }
  // 查看前端元素
  Queue.prototype.front = function () {
    return this.items[0]
  }
  // 判断是否为空
  Queue.prototype.front = function () {
    return this.items.length
  }
  // 队列中
  Queue.prototype.size = function () {
    return this.items.length
  }
}

module.exports = {
  Dictionay,
  Queue
}