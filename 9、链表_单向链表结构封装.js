/**
 * 单项列表封装
 * head 属性火车头
 * data 数据
 * next 下一个节点
 * 以此类推
 * data、next 
 * 
 */

// 链表封装
function LinkList() {
  this.head = null // 指针
  // 内部类，节点类
  function Node(data, next = null) {
    this.data = data
    this.next = next
  }
  // 1、链表长度
  this.length = 0
  // 向列表尾部添加一个新的项
  LinkList.prototype.append = function (element)  {
    const node = new Node(element)
    // 1、判断是否为第一个节点
    if (this.length === 0) {
      this.head = node
    } else {
      // 1、寻找最后一个节点
      var current = this.head
      while (current.next) {
        current = current.next
      }
      current.next = node
    }
    this.length += 1
  }

  // 2、返回链表字符串
  LinkList.prototype.toString = function () {
    var linkString = ''
    if (this.length > 0) {
      // 1、第一变量
      var current = this.head
      linkString += current.data.toString()
      // 2、循环节点
      while(current.next) {
        console.log()
        linkString += current.next.data.toString()
        current = current.next
      }
    }
    return linkString
  }

  // 3、向链表的特定位置插入一个新的项
  LinkList.prototype.insert = function (position/* 位置 */, element/* 元素 */) {
    // 1、position 越界判断
    if (position < 0 || position > this.length) return false
    // 2、根据data 创建node
    const newNode = new Node(element)
    // 3.插入特殊位置
    // 0位插入
    if (position === 0) {
      newNode.next = this.head
      this.head = newNode
    } else {
      // 其他情况
      var previous = null
      var index = 0
      var current = this.head
      while(index++ < position) {
        previous = current
        current = current.next
      }
      console.log(newNode, current)
      newNode.next = current
      previous.next = newNode
    }
    this.length += 1
    return true
  }
  // 获取元素的位置
  LinkList.prototype.get = function (position) {
    // 1.越界判断
    if (position < 0 || position >= this.length) return null
    // 2、获取data
    var current = this.head
    var index = 0
    while(index++ < position) {
      current = current.next
    }
    return current.data
  }
  // 返回元素在列表中的索引。如果列表中没有该元素则返回-1
  LinkList.prototype.indexOf = function (element) {
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
  // 修改某个元素
  LinkList.prototype.update = function (position, element) {
    // 1.越界判断
    if (position < 0 || position >= this.length) return null
    // 2、获取data
    var current = this.head
    var index = 0
    while(index++ < position) {
      current = current.next
    }
    // 将position 修改
    current.data = element
    return true
  }
  // 从列表删除特定元素
  LinkList.prototype.removeAt = function (position) {
    // 1.越界判断
    if (position < 0 || position >= this.length) return null
    // 2.判断删除节点
    var current = this.head
    if (position === 0) {
      this.head = this.head.next
    } else {
      // position = 2
      var index = 0
      var previous = null
      while(index++ < position) {
        previous = current
        current = current.next
      }
      previous.next = current.next
    }
    this.length -= 1
    return current.data
  }
  // 移除一项
  LinkList.prototype.remove = function (element) {
    // 1、获取位置
    var position = this.indexOf(element)
    return this.removeAt(position)
  }
}

var  linklist = new  LinkList()
linklist.append('1')
linklist.append('2')
linklist.append('3')
// linklist.insert(1,'4')
const indexOfData = linklist.indexOf('3')
const currentData = linklist.get(1)
// linklist.removeAt(0)
linklist.remove('1')
// linklist.update(0, '2')
console.log(linklist.toString(), currentData, indexOfData)

