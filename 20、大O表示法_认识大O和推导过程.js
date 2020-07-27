/**
 * 大O表示法
 * 在算法描述中,我们也可以通过类似的快捷方式来描述计算机算法的效率
 * 在计算机中,这种粗略的度量被称作大O 表示法 * 
 * 在算法比较的过程中,我可能更喜欢说:算法A比B快两倍,但这样的比较有时候没有意义
 * 在数据项个数发生变化时,算法的效率会跟着发生变化
 * 所以我们通使用一种算法速度会如何跟随这数量的变化的
 * 大O 表示形式(随着数据量的大小,算法效率, 时间的复杂度)
 * O(1) 常数
 * O(log(n)) 对数 2^x = log2=N
 * O(n) 线性
 * O(nlog(n)) 线性和对数乘积
 * O(n^2) 平方
 * O(2n) 指数
 * 推导大O表示法的方式
 * 1.用常量1取代运行时间中所有的加法常量 表示法 O(1)
 * 2.在修改后的运行次次数函数中,只保留最高阶项 
 * 3.如果最高存在且不为1,则去除与这个项相乘的常数
 */