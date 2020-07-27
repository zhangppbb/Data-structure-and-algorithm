/**
 * hash 函数实现
 * 1、将字符串转换成数字
 * 2、将大的数字hashCode压缩到数组范围之内
 */
moudel.exports = function hashFunc(str, size) {
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

console.log(hashFunc('abc', 7))
console.log(hashFunc('b', 7))
console.log(hashFunc('c', 7))
console.log(hashFunc('d', 7))