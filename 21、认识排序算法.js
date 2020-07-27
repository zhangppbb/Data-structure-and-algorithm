/**
 * 认识排序算法
 * 冒泡排序/选择排序/插入排序/归并排序/计数排序/基数排序/希尔排序/堆排序/桶排序
 * 简单排序:冒泡排序/选择排序/插入排序
 * 高级排序:希尔排序/快速排序
 * 
 */

const { format } = require("path");

// 排序原始数据
var arrList = [2, 4, 43, 43, 211, 2]

function ArrayList() {
  // 属性
  this.array = [];

  ArrayList.prototype.insert = function (...arg) {
    this.array.push(...arg)
  }

  ArrayList.prototype.toString = function() {
    return this.array.join('-')
  }

  // 交换数据
  ArrayList.prototype.swap = function (m, n) {
    var temp = this.array[m];
    this.array[m] = this.array[n];
    this.array[n] = temp;
  }

  /**
   * 大O表示 N*(N - 1) / 2这个冒泡排序所需的次数
   * O(n^2)
   */
  ArrayList.prototype.bubbesort = function () {
    var length = this.array.length
    for(
      var j = length - 1;
      j >= 0;
      j--
    ) {
      for(
        let i = 0;
        i < j;
        i ++
      ) {
       if (this.array[i] > this.array[i+1]) { // 最大的永远在后面
         this.swap(i, i+1)
       }
      }
    }
  }

  // 选择排序
  ArrayList.prototype.selectsort = function () {
    var length = this.array.length
    for (
      var j = 0;
      j < length - 1;
      j++
    ) {
      var min = j
      for(
        var i = min + 1;
        i < length;
        i++
      ) {
        if (this.array[min] > this.array[i]) { // 寻找最小的
          min = i
        }
      }
      this.swap(min, j)
    }
  }

  // 插入排序
  ArrayList.prototype.insertSort = function () {
    var length = this.array.length
    for (var j = 1; j < length; j++) {
      var temp = this.array[j]
      var i = j
      while(this.array[i - 1] > temp && i > 0) {
        this.array[i] = this.array[i - 1]
        i--
      }
      this.array[i] = temp
    }
  }

  /**
   * 希尔排序
   * 选择合适的增量
   * 他建议的原稿中,他建议初始间距是N/2,简单的把每趟排序分成两半
   * 也就是说,对于N = 100 的数组.是增量间隔序列为, 50, 25, 12, 6, 3, 1
   * Hibbard 增量排序
   * Sedgewick增量排序
   */
  ArrayList.prototype.shellSort = function () {
    var length = this.array.length
    // 初始化的增量
    var gap = Math.floor(length/2)
    // 3.gap 不断减小
    while(gap >= 1) {
      // 4.以gap 作为间隔，进行分组，对分组进行插入排序
      for (var i = gap; i < length; i++) {
        var temp = this.array[i]
        var j = i
        while(this.array[j - gap] > temp && j > gap - 1) {
          this.array[j] = this.array[j - gap]
          j -= gap
        }
        // 5.将j位置的元素赋值temp
        this.array[j] = temp
      }
      gap = Math.floor(gap/2)
    }
  }

  // 快速排序
  ArrayList.prototype.quickSort = function () {
    this.quick(0, this.array.length - 1)
  }

  // 快速排序
  ArrayList.prototype.quick = function (left, right) {
    // 1、结束条件
    if (left >= right) return false 
    
    // 2、获取枢纽
    var pivot = this.median(left, right)

    // 3、定义变量，用于记录当前找到的位置
    var i = left
    var j = right - 1

    // 4、开始交换
    while(true) {
      while(this.array[++i] < pivot) {}
      while(this.array[--j] > pivot) {}
      if (i < j) {
        this.swap(i, j)
      } else {
        break
      }
    }
    // 5、将枢纽放置在正确的位置，i的位置
    this.swap(i, right - 1)
    // 6、分而治之
    this.quick(left, i - 1)
    this.quick(i + 1, right)
  }

  // 选择枢纽
  ArrayList.prototype.median = function (left, right) {
    // 1、取出中间位置
    var center = Math.floor((left + right) / 2)

    // 2、判断大小并且进行交换
    if (this.array[left] > this.array[center]) {
      this.swap(left, center)
    }
    if (this.array[center] > this.array[right]) {
      this.swap(center, right)
    }
    if (this.array[left] > this.array[right]) {
      this.swap(left, right)
    }
    // 3、将center 换到 right - 1 的位置
    this.swap(center, right - 1)

    return this.array[right - 1]
  }
}

var arr = new ArrayList();
arr.insert(...arrList)
arr.quickSort()
console.log(arr.toString())
