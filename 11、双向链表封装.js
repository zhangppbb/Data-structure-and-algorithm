// 双向链表
function DoublyLinkList() {
  // 属性
  this.head = null // 头
  this.tail = null // 尾
  this.length = 0 // 长度
  function createNode(element) {
    this.data = element
    this.prev = null
    this.next = null
  }
  // 常见的操作封装
  // 末尾添加元素
  DoublyLinkList.prototype.append = function (element) {
    var node = new createNode(element)
    // 1、判断是否为第一个节点
    if (this.head === null) {
      this.head = node
      this.tail = node
    } else {
      node.prev = this.tail
      this.tail.next = node
      this.tail = node
    }
    // 2、长度++
    this.length += 1
  }
  // 特定位置插入元素
  DoublyLinkList.prototype.insert = function (position, element) {
    // 1、越界判断
    if (position < 0 || position > this.length) return false
    // 2、 根据data 创建节点
    var node = new createNode(element)
    var index = 0
    var current = this.head
    // 3、特殊位置判断
    if (this.length === 0) {
      // 没有元素情况
      this.head = node
      this.tail = node
    } else {
      // 判断非零情况
      if (position === 0) {
        // 0位插入
        // 原来的节点.prev = e
        this.head.prev = node // 当前上一个等于新的节点
        node.next = this.head  // 新的节点的下一个等于 当前节点
        this.head = node // 当前head 覆盖
      } else if (position === this.length) {
        // 末尾插入
        node.prev = this.tail  // 他个上一个等于末尾节点
        this.tail.next = node // 末尾节点
        this.tail = node // 末尾元素修改node 
      } else {  // 中间位置
        var current = this.head
        var index = 0
        while(index++ < position) {
          current = current.next
        }
        // 修改指针
        node.next = current // 下一个等于当前
        node.prev = current.prev // 上一个等于当前上一个
        current.prev.next = node // 上一个的下一个等于新的节点
        current.prev = node // 上一个等于的新的节点
      }
    }
  }
  // 获取对应位置的元素
  DoublyLinkList.prototype.get = function (position) {
     // 1、越界判断
     if (position < 0 || position > this.length) return false
     var current = this.head
    var index = 0
    while(index++ < position) {
      current = current.next
    }
    return current.data
  }
  // 返回字符串
  DoublyLinkList.prototype.toString = function () {
    return this.backwardString()
  }
  // indexof 返回当前位置信息
  DoublyLinkList.prototype.indexOf = function (element) {
    var current = this.head
    var index = 0
    while(current) {
      if (current.data === element) {
        return index
      }
      index += 1
      current = current.next
    }
    return -1
  }
  // updata 修改元素value
  DoublyLinkList.prototype.updata = function (position, element) {
    // 1、越界判断
    if (position < 0 || position > this.length) return null
    var current = this.head
    var index = 0
    while(index++ < position) {
      current = current.next
    }
    current.data = element
  }
  // removeAt 删除特定位置移除项
  DoublyLinkList.prototype.removeAt = function (position) {
    // 1、越界判断
    if (position < 0 || position > this.length) return null
    var current = this.head
    if (this.length === 0) {
      // 节点长度为一
      this.head = null
      this.tail = null
    } else {
      // 删除的是第一个节点
      if (position === 0) {
        this.head.next.prev = null
        this.head = this.head.next
      } else if (position === this.length - 1) {
        // 最后一个节点
        this.tail.prev.next = null
        this.tail = this.tail.prev
      } else {
        // 中间位置
        var index = 0
        while(index++ < position) {
          index+=0
          current = current.next
        }
        current.prev.next = current.next
        current.next.prev = current.prev
      }
    }
    this.length -= 1
  }
  // remove 
  DoublyLinkList.prototype.remove = function (element) {
    const index = this.indexOf(element)
    this.removeAt(index)
  }
  // 向前遍历
  DoublyLinkList.prototype.forwardString = function () {
    var current = this.tail
    var result = ''
    while(current) {
      result += current.data.toString()
      current = current.prev
    }
    return result
  }
  // 向后遍历
  DoublyLinkList.prototype.backwardString = function () {
    // 1、定义变量
    var current = this.head
    var result = ''
    while(current) {
      result+= current.data.toString()
      current = current.next
    }
    return result
  }
}

const list  = new DoublyLinkList()
list.append(1)
list.append(2)
list.append(3)
list.insert(0, 'a')
list.updata(0, 'value')
// list.removeAt(1)
// list.remove('value')
console.log(list.toString(), list.get(0), list.indexOf('a'))