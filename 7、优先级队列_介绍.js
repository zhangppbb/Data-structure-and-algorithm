/**
 * 优先级队列_介绍
 * 插入数据会考虑该数据的优先级
 * 比较完成
 * 1、生活中的队列优先级
 *  登机
 *  急诊科
 *  线程 优先级来重新排序队列
 */

// 优先级队列实现
function PriorityQueue() {
  // 内部类
  function QueueElement(element, priority) {
    this.element = element
    this.priority = priority
  }
  this.items = []
  PriorityQueue.prototype.enqueue = function (element, priority) {
    // 1、创建队列
    var queueElement = new QueueElement(element, priority)
    // 2、添加当前
    if (!this.isEmpty()) {
      this.items.push(queueElement)
    } else {
      try {
        const items = JSON.parse(JSON.stringify(this.items))
        for (
          let index = 0,
            len = items.length;
            index < len;
            index++) {
          console.log(index)
          if (queueElement.priority < this.items[index].priority) {
            this.items.splice(index, 0, queueElement)
            throw false
          }
        }
        throw true
      } catch (error) {
        if (error) {
          console.log(error)
          this.items.push(queueElement)
        }
      }
    }
  }
  PriorityQueue.prototype.isEmpty= function () {
    return this.items.length
  }
}

var priorityQueue = new PriorityQueue()
priorityQueue.enqueue(1,1)
priorityQueue.enqueue(3,3)
priorityQueue.enqueue(2,2)
console.log(priorityQueue)