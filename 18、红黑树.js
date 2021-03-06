/**
 * AVL 平衡二叉树
 * 1、 红黑树(AVL树)
 * 底层数据结构
 * 二叉查找树
 * 性质（变换依据）
 * 1) 节点是红色或黑色
 * 2) 根节点是黑色
 * 3) 每个叶子节点都是黑色的空节点(NIL节点)
 * 4) 每个红色节点的两个子节点都是黑色.叶子节点都是黑色,出度为0满足了性质就可以近似的平衡了
 * 5) 从任一节点到其每个叶子的所有路径都包含相同数目的黑色节点
 * 关键特性
 * 从根到叶子的最长可能路径,不会超过最短可能路径的两倍
 * 结果就是这个树基本平衡
 * 虽然没有做到绝对平衡,但是可以保证在最坏的情况下,依然是高效的
 * 
 * 最长路径不超过最短路径的两倍
 * 性质四决定了路几个不能有两个相连的红色节点
 *  性质四，每个红色节点的两个子节点都是黑色，所以说两个红色节点不可能连接
 * 最短的可能路径都是黑色节点
 * 最长的可能路径是红色和黑色交替
 * 性质5所有路径都是相同数目的黑色节点
 * 这就表明了没有路径能多余任何其他路径的两倍长
 * 
 * 变换
 * 插入一个新的节点,有可能树不在平衡,可以通过三种方式的变换,让树保持平衡
 * 换色-左旋转-右旋转
 * 1)
 * 变色
 * 1、新节点以红色插入
 * 2、判断插入的元素是否符合红黑树的性质
 * 3、如符合规则插入，反之，对其进行变色，以满足红黑树性质，从而达到平衡
 * 3)旋转
 * 左旋转
 * 逆时针旋转红黑树的两个节点,使得父节点被自己的右孩子取代,而自己的左孩子
 * 图中，身为孩子的Y取代了X的位置，而X变成了y的左孩子。此为左旋转，
 * 右旋转
 * 顺时针旋转红黑树的的两个节点，使得父节点被自己的左孩子取代，而自己成为自己右孩子
 * 图中，身为孩子的Y取代了X的位置，而X变成了Y的右孩子
 * 旋转过程中
 * 如果他们有子树是否会有影响
 * 
 * 插入规则情况
 * 设
 * N 为当前节点
 * P 父亲节点
 * G 爷爷节点
 * U 叔叔节点（父亲的兄弟）
 * 情况一
 * 新节点N位于树的根上，没有父节点
 * 这种情况下。我们直接将红色变成黑色即可，这样满足性质二
 * 情况二
 * 新节点的父节点P是黑色
 * 性质4没有失效（新节点是红色的），性质5也没有任何问题
 * 尽管新节点N有两个黑色的叶子节点NIL,但是新节点N是红色的，索引通过他的路径中黑色节点的个数依然相同，满足性质五
 * 情况三
 * P和U为红
 * 操作方案
 * 将P和U变换成为黑色，并将G 变成为红色。现在新节点N有了一个黑色的父节点P,所以每条路上黑色节点的数目没有改变
 * 而从更高的路径上，必然会都经过G节点，所以那些路径的黑色节点数目也是不变的，符合性质5
 * 可能出现的问题
 * 但是， N的祖父节点G的父节也可能是红色的，这就违反了性质三，可以递归的调整颜色
 * 但是如果递归调整颜色到了根节点，就需要进行旋转。
 * 情况四
 * 父亲节点为红色节点，兄弟节点为黑色，N是左子节点，祖父节点为黑色节点
 * 变换
 * 父黑
 * 祖红
 * 右旋转
 * 情况五
 * N的叔叔U是黑色节点，且N是有孩子的
 * 父红叔黑祖黑，N是右儿子
 * 以p为根，左旋转
 * 将p作为新插入的红色节点考虑即可
 * 操作方案
 * 对 p节点进行依次左旋转，形成情况四的结果
 * 对祖父节点G进行G节点右旋转，并且改变颜色即可
 * 案例
 * 插入一下值 10 9 8 7 6 5 4 3 2 1
 * 插入 10 将节点10颜色改成黑色
 * 插入 9 符合情况2 不需要任何变换
 * 插入 8 父节点为红色符合情况四，换色右旋转，父亲节点变成黑色，祖父节点变成红色，然后进行右旋转
 * 插入 7 父节点和叔叔节点都是为红色符合情况三 颜色变换，父亲，叔叔变成黑色，祖父变成红色
 *  问题：根节点不符合规则2
 *    根节点为黑色
 * 插入 6 父亲变成黑色，祖父变成红色。进行右旋转 符合情况四，以祖父节点为根进行旋转
 * 插入 5 父亲节节点和叔叔节点为红色符合情况三， 父亲节点和叔叔节点变成黑色，祖父节点变成红色
 * 插入 4 符合情况四，祖父节点变成红色，父节点变成黑色，进行右旋转
 * 插入 3 将父亲节点和兄弟节点变成黑色，祖父节点点变成红色
 *  第二次变换符合情况四，父亲节点变成黑色，祖父节点变成红色节点，右旋转
 * 插入 2 情况四
 * 插入 1 父亲节点和兄弟节点为红色符合情况三
 * 
 */