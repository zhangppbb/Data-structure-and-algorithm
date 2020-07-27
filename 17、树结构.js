/**
 * 1、树结构
 * 树的特点、
 * 树通常有个根，连接着根的是树干
 * 树干到上面之后会进行分叉树枝。
 * 树干到上面之后会进行分叉成树枝，树枝还会分叉成树枝，树枝还会分叉成更小的树枝。、
 * 在树枝的最后是叶子
 * 树的抽象
 * 专家们对树的结构进行了抽象，发现树可以模拟生活中的很多场景
 * 2、生活中的树结构
 * 公司的组织架构、家谱等
 * 3、树结构的抽象
 *      1
 *  2       3
 * 2 2     3 3
 * 4、树的优点
 * 因为树结构的分线性的，可以表示一对多的关系
 * 比如文件管理系统
 * 5、树的术语
 * 树（Tree）: n(n>=0)个节点构成的有限集合
 * 当n=0时，称为空树
 * 对于任一颗，非空树（n>0）,它具备一下性质：
 * 树中有一个成为根（Root），的特殊节点。用r表述
 * 其余的节点为，m（m>0）个互不相交的有限集T1,T2，其中每个集合本身又是一棵树，称为原来的子树（subTree）
 * ==============================
 * 节点的度
 * 树的度
 * 6、普通的表示方式
 * 7、二叉树
 * 7-1、概念
 * 如果树中每个子节点最多只能有两个子节点，这样的树就成为，二叉树
 * 7-2、特性
 * 一个二叉树第i层的最大节点数为：2^(i-1), i >= 1
 * 深度为k的二叉树有最大节点数为2^k-1, k >= 1
 * 对任何非空二叉树T, 若n0表示节点数的个数，n2是度为2的非叶子节点个数，那么两者满足关系n0=n1+1
 * 7-3、完美二叉树
 * 在二叉树中。除了最下一层的叶节点外，每层节点都有2个子节点，就构成二叉树
 * 7-4、完全二叉树
 * 只能缺少右边的节点
 * 8、二叉树的存储
 * 二叉树存储常见的方式是数组（只能保存完二叉树）和链表
 * 9、二叉搜索树
 * 二叉搜索树（BST，binary search tree）,也称二叉排序树或二叉查找树
 * 二叉搜索树是一颗二叉树，可以为空
 * 如果不为空，满足一下性质
 * 非空左子树的所有键值小于其根节点的键值
 * 非空右子树的所有键值大于其根节点的键值
 * 左、右子树本身也都是二叉搜索树
 * 特点
 * 相对较小的值总是保存在左节点，较大的值保存在右节点
 */

// 代码封装
function BinarySearchTree() {
  // 节点构造函数
  function Node(key) {
    this.key = key
    this.left = null
    this.right = null
  }
  this.root = null // 根节点
  this.length = 0 // 节点个数
  this.orderTravesalValue = '' // 节点value

  // 方法
  // 插入节点
  BinarySearchTree.prototype.insert = function (key) {
    // 1、创建节点
    const newNode = new Node(key)
    // 2、判断根节点
    if (this.root === null) {
      this.root = newNode
    } else {
      // 没有根节点
      this.insertNode(this.root, newNode)
    }
    this.length += 1
  }
  // 内部类插入子节点
  BinarySearchTree.prototype.insertNode = function (node, newNode) {
    if (newNode.key < node.key) { // left
      if (node.left === null) {
        node.left = newNode
      } else {
        this.insertNode(node.left, newNode)
      }
    } else { // right
      if (node.right === null) {
        node.right = newNode
      } else {
        this.insertNode(node.right, newNode)
      }
    }
  }

  // 获取树结构
  BinarySearchTree.prototype.getTree = function () {
    return this.root
  }
  // 遍历二叉搜索树
  // 先序遍历
    // 1、访问根节点，2、先序遍历其左子树。3、先序遍历其右子树
  BinarySearchTree.prototype.preOrderTravesal = function () {
    this.orderTravesalValue = ''
    this.preOrderTravesalNode(this.root)
    return this.orderTravesalValue
  }

  BinarySearchTree.prototype.preOrderTravesalNode = function (node) {
    if (node !== null) {
      // 1、根节点
      this.orderTravesalValue += `${node.key},`
      // 2、处理经过节点的子节点
      this.preOrderTravesalNode(node.left)
      // 3.处理右子节点
      this.preOrderTravesalNode(node.right)
    }
  }
  // 中序遍历
    // 1、遍历其左子树；2、访问根节点3、遍历其右子树
  BinarySearchTree.prototype.inOrderTravesal = function () {
    this.orderTravesalValue = ''
    this.inOrderTravesalNode(this.root)
    return this.orderTravesalValue
  }

  BinarySearchTree.prototype.inOrderTravesalNode = function (node) {
    if (node !== null) {
      // 1、处理经过节点的子节点
      this.inOrderTravesalNode(node.left)
      // 2、根节点
      this.orderTravesalValue += `${node.key},`
      // 3.处理右子节点
      this.inOrderTravesalNode(node.right)
    }
  }
  // 后序遍历
    // 1、遍历其左子树2、遍历其右子树；3、访问根节点
  BinarySearchTree.prototype.postOrderTravesal = function () {
    this.orderTravesalValue = ''
    this.postOrderTravesalNode(this.root)
    return this.orderTravesalValue
  }

  BinarySearchTree.prototype.postOrderTravesalNode = function (node) {
    if (node !== null) {
      // 1、处理经过节点的子节点
      this.postOrderTravesalNode(node.left)
      // 2.处理右子节点
      this.postOrderTravesalNode(node.right)
      // 3、根节点
      this.orderTravesalValue += `${node.key},`
    }
  }
  // 层级遍历（了解）
  
  // 最小值
  BinarySearchTree.prototype.min = function () {
    var node = this.root
    while(node.left !== null) {
      node = node.left
    }
    return node.key
  }

  // 最大值
  BinarySearchTree.prototype.max = function () {
    var node = this.root
    while(node.right !== null) {
      node = node.right
    }
    return node.key
  }

  // 搜索某一个key
  BinarySearchTree.prototype.search = function (key) {
    var node = this.root
    while(node !== null) {
      if (node.key > key) {
        node = node.left
      } else if(node.key < key) {
        node = node.right
      } else {
        return true
      }
    }
    return false
  }

  // 删除操作
  BinarySearchTree.prototype.remove = function (key) {
    // 1、查找删除节点
    const is_search = this.search(key)
    if (!is_search) return null
    var current = this.root // 当前节点
    var isLeft = false // 是否为左节点
    var parent = null // 父节点
    // 2、查找结点
    while(current.key !== key) {
      parent = current
      if (key < current.key) {
        isLeft = true
        current = current.left
      } else {
        current = current.right
        isLeft = false
      }
      if (current === null) { // 结束循环
        return null
      }
    }
    // 3、删除节点
      // 3.1、删除的叶子节点
      if (current.left == null && current.right === null) {
        if (current.key ===  this.root.key) {
          this.root = null
        } else if (isLeft) {  // 左子节点
          parent.left = null
        } else { // 右子节点
          parent.right = null
        }
      }
      // 3.2、删除的节点有一个子节点
      else if (current.right == null) {
        if (parent.key === this.root.key) {
          this.root = current.left
        } else {
          if (isLeft) {
            parent.left = current.left
          } else {
            parent.right = current.left
          }
        }
      } else if (current.left == null) {
        if (parent.key === this.root.key) {
          this.root = current.right
        } else {
          if (isLeft) {
            parent.left = current.right
          } else {
            parent.right = current.right
          }
        }
      }
      // 3.3、删除的节点有两个子节点 p98
      else {
        // 1.获取后继节点
        var successor = this.getSuccessor(current)
        // 2.是否根节点
        if (current.key === this.root.key) {
          this.root = successor
        } else if (isLeft) {
          parent.left = successor
        } else {
          parent.right = successor
        }
        // 3、 将删除节点的左子树 = current left
        successor.left = current.left
      }
  }

  // 寻找后继节点
  BinarySearchTree.prototype.getSuccessor = function (delNode) {
    // 1、后继
    var successor = delNode
    var successorParent = delNode
    var current = delNode.right

    // 2、循环查找
    while(current !== null) {
      successorParent = successor
      successor = current
      current = current.left
    }

    // 3、判断寻找的后继节点是否直接就是delNode 的right 节点
    if (successor != delNode.right) {
      successorParent.left = successor.right
      successor.right = delNode.right
    }
    
    return successor
  }
}

const bst = new BinarySearchTree()

bst.insert(8)
bst.insert(7)
bst.insert(9)
bst.remove(9)
// console.log(root.preOrderTravesal())
// logN = 次数 a^2 = n logN = a
console.log(bst.max(), bst.min(), bst.search(7))