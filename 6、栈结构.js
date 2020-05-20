/**
 * 1.栈结构
 * 栈也是一种常见的是数据结构,并且在程序中应非常广泛
 * 栈顶(进站)
 * 栈底
 * 后进先出
 * 只能在一端对数据进行相关操作,出站(删除),入栈(添加)
 * 2.数组
 * 数组是一种线性结构
 * 3.生活中的栈结构
 *  自助餐的脱托盘
 *  邮箱(实体)
 *  注意:不允许改变邮件的次序,比如从最小的开始,或者处于最紧急的邮件,否则就不再是栈结构了,而是队列或者是优先级队列结构
 * 4.程序中的栈结构
 *  函数调用栈
 *  aFc -> bFc -> cFC -> DFc
 *  弹出栈就是进站相反
 *  栈结构
 *  5.栈结构面试题
 *  1)6,5,4,3,2,1的顺序进站,下列哪一个不是合法的出栈顺序
 *    先进后出
 *   例如
 *  5进站
 *  那么占地就是6
 *  6.代码栈结构的实现
 *  1)
 */

// 1) 栈结构的实现
// 基于数组的实现
// 基于链表
function Stack() {
  this.stack = []
  // 栈的操作
  Stack.prototype.push = function () {
    this.stack.push(...arguments)
  }

  // 删除栈顶,同时返回被移除的元素
  Stack.prototype.pop = function () {
    return this.stack.pop()
  }

  // 返回当前栈顶
  Stack.prototype.peek = function () {
    return this.stack[this.stack.length - 1]
  }

  // 判断是否为空栈
  Stack.prototype.isEmpty = function () {
    return this.stack.length
  }

  // 返回栈里的元素个数
  Stack.prototype.size = function () {
    return this.stack.length
  }

  // 将栈结构以字符串的形式返沪
  Stack.prototype.toString = function () {
    let result = ''
    this.stack.forEach((item) => {
      result += `${item} `
    })
    return result
  }
}

let stack = new Stack()

stack.push(11,1,1)

console.log(stack.size())
