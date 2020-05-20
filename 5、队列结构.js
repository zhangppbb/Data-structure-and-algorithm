/**
 * 5、队列结构
 *   受限的线性结构，栈结构
 * 1、什么是队列
 *  受限的线性结构，先进先出（FIFO First In First Out）
 *  它允许在表的前端进行删除操作
 *  在表的后端进行插入操作
 *  开启多线程
 *  线程队列会依照次序来启动线程，并处对应的任务
 * 2、队列类的创建
 *  基于数组
 *  基于链表
 * 3、面试题
 *  击鼓传花
 */
// 队列队列装
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

// 击鼓传花面试题
function passGames(nameList, num) {
  this.nameList = nameList || [],
  this.num = num || this.nameList.length
  const queue = new Queue()
  // 添加人员
  queue.enqueue(...this.nameList)

  // 开始计算数字
  while(queue.size() > 1) {
    for(let i = 0, len = this.num - 1; i < len; i ++) {
      queue.enqueue(queue.dequeue())
    }
    queue.dequeue()
  }
}