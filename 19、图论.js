/**
 * 1、图论
 * 什么是图
 * 图的结构是一种与数据结构有些相似的数据结构
 * 图论是数学的一个分支，并且，在数学的该概念上，树是图的一种
 * 他以图为研究对象，研究顶点和边的组成的图形的数学理论和方法
 * 主要研究的目的是事务之间的关系，顶点代表事务。边代表两个事务的关系
 * 图模拟的生活场景
 * 人与人之间的关系网
 * 地铁
 * 六度空间理论
 * 理论上认为世界上的任何两个互不认识的两人
 * 只需要很少的中间人就可以建立起联系
 * 并非一定要经过6步，只是需要很少的步骤
 * 图论的术语
 * 顶点V(Vertex) 表示顶点集合
 * 边 E(Edge) 表示边的集合
 * A -- b，通常表示无向，A ---> B,通常表示有向
 * 欧拉
 * 奇点的数目不是0个就是两个
 * 连到一点的边的数目如是奇数条，就称为奇点
 * 如果是偶数条就成为偶数
 * 要想一笔化成，必须中间的点均是偶数
 * 也就是来路必有另一条去路，奇点只可能在两端，因此任何图能一笔化成，奇点的要么在两端
 * 图的术语
 * 顶点
 * 表示图中的一个节点
 * 边
 * 表示顶点和顶点之间的连线
 * 度
 * 一个顶点和相邻顶点的个数
 * 路径
 * 简单路径不包含重复路径
 * 回路
 * 0 1 2 -》 2 1 0
 * 无向图
 * 所有的边都没有方向
 * 有向图
 * 图中的边是有方向的
 * 无权图
 * 图中的边没有任何意义
 * 带权图
 * 表示边有一定的权重
 * 这里的权重可以是任意你希望表示的数据
 * 比如距离或者花费的时间或者票价
 * 图的表示
 * 顶点的表示
 * A、B
 * 边的表示
 * 邻接矩阵
 * 一种比较常见的表示方式：邻接矩阵
 * 邻接矩阵让每个节点和一个整数向关联，该整数作为数组的下标值
 * 我们用一个二维数组来表示顶点之间的关系
 * 邻接矩阵的问题
 * 邻接矩阵还有一个比较严重的问题，就是如果图是一个稀疏图
 * 那么矩阵中存在大量的0，这意味着我们浪费了计算机存储空间来表示根本不存在的边
 * 邻接表
 * 另外一种常用的表示图的方式：邻接表
 * 邻接表由图中每个顶点以及和顶点相邻的顶点列表组成
 * 这个列表有很多种方式来存储：数组、链表、字典（哈希表）都可以
 * 邻接表的问题
 * 邻接表计算度是比较简单的（出度：指向别人的数量。入度指向自己的数量）
 * 邻接表如果需要计算有向的入度，那么是非常麻烦的一件事情
 * 他必须构造一个逆邻接表，才能有效地计算入度，但是开发中出度相对用的比较少
 * 图的遍历
 * 图的遍历意味着需要将图中每个访问顶点访问一遍，并且不能有重复的访问
 * 有两种算法可以对图进行遍历
 * 广度优先搜索（Breadth-First-Search）DFS
 * 广度优先搜索算法思路
 * 广度优先算法会从指定的第一个顶点开始遍历图，先访问其所有的相邻点，就像一次访问图的一层
 * 就是先宽后深的访问顶点
 * 深度有限搜索（Depth-First-Search）DFS
 * 深度优先搜索的思路
 * 深度优先搜索算法将会从第一个指定的顶点开始遍历图，沿着路径最后被访问了
 * 接着原来回退并探索的一条路径
 * 深度优先搜索算法实现
 * 广度优先算法我们使用的是队列，这里可以使用栈完成，也可以使用递归
 * 方便带书写，我们还是使用递归（递归本质就是函数栈的调用）
 * 两种遍历算法。都需要明确指定第一个被访问的顶点
 */
const { Dictionay, Queue } = require('./utils');

// 封装图结构
function Graph() {
  // 属性： 顶点
  this.vertexes = []; // 顶点
  this.edges = new Dictionay() // 边
  // 方法
  // 添加顶点
  Graph.prototype.addVerTexes = function (v) {
    this.vertexes.push(v)
    this.edges.set(v, []);
  }
  // 添加边
  Graph.prototype.addEdge = function (v1, v2) { // 顶点
    this.edges.get(v1).push(v2);
    this.edges.get(v1).push(v1);
  }
  // toString
  Graph.prototype.toString = function () {
    return {
      vertexes: this.vertexes,
      edges: this.edges,
    }
  }

  /**
   * 图的遍历
   * BFS：基于队列，入队列的顶点先被探索
   * BFS：基于栈或用于递，通过将顶点存入栈中，顶点是沿着路径被探索的，存在新的相邻顶点就去访问
   * 为了记录顶点是否被访问过，我们使三种颜色来反映他们的状态
   * 白色：表示该顶点还没有被访问
   * 灰色：表示该顶点北方问过，但并违背探索过
   * 黑色：表示该顶点被访问过且被完全探索过
   */
  // 初始化状态
  Graph.prototype.initIalizeColor = function () {
    var colors = {};
    for(
      var i = 0, len = this.vertexes.lenght;
      i < len;
      i++ ) {
      colors[this.vertexes[i]] = 'white';
    }
    return colors;
  }
  // 广度优先搜索（BFS）
  Graph.prototype.bfs = function (initV, handler) {
    // 1、初始化颜色
    var colors = this.initIalizeColor();

    // 2、创建队列
    var queue = new Queue();

    // 3、将顶点加入队列
    queue.enqueue(initV);

    // 4、循环从队列中取出元素
    while(queue.size()) {
      // 4.1从队列取出一个顶点
      var v = queue.dequeue()

      // 4.2 获取和顶点相连的另外顶点
      var vList = this.edges.get(v)

      // 4.3 将v的颜色设置成灰色
      colors[v] = 'gray'

      // 4.4 遍历所有顶点，并且加入到队列中
      for(
        var i = 0, len = vList.lenght;
        i < len;
        i++
      ) {
        var e = vList[i];
        if (colors[e] === 'white') {
          colors[e] = 'gray'
          queue.enqueue(e)
        }
      }

      // 4.5 访问节点
      handler(v)

      // 4.6 将顶点设置为黑色
      colors[v] = 'black'
    }
  }
  // 深度优先搜索（DFS）
  Graph.prototype.dfs = function (v, handler) {
    // 1、初始化颜色
    var colors = this.initIalizeColor();

    this.dfsVisit(v, colors, handler)
  }

  Graph.prototype.dfsVisit = function (v, colors, handler) {
    // 1、将颜色设置成灰色
    colors[v] = 'gray'

    // 2. 处理v顶点
    handler(v)

    // 3.访问相邻的顶点
    var vList = this.edges.get(v)
    for(
      var i = 0, len = vList.length;
      i < len;
      i ++
    ) {
      var e = vList[i]
      if (colors[e] === 'white') {
        this.dfsVisit(e, colors, handler)
      }
    }

    // 4、将颜色设置成黑色
    colors[v] = 'black'
  }
}

var graph = new Graph();
graph.addVerTexes('A');
graph.addVerTexes('B');
graph.addVerTexes('C');
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'C');
var result = ''
graph.dfs(graph.vertexes[0], (v) => {
  result += v;
})
console.log(result)
// console.log(graph.toString())