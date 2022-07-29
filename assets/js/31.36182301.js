(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{536:function(t,a,n){"use strict";n.r(a);var s={props:["slot-key"],mounted:function(){this.$nextTick(function(){this.$vuepress.$emit("AsyncMarkdownContentMounted",this.slotKey)})}},v=n(2),_=Object(v.a)(s,function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.slotKey}},[n("h1",{attrs:{id:"分布式事务解决数据一致性"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#分布式事务解决数据一致性","aria-hidden":"true"}},[t._v("#")]),t._v(" 分布式事务解决数据一致性")]),t._v(" "),n("h4",{attrs:{id:"示例解决方案1"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#示例解决方案1","aria-hidden":"true"}},[t._v("#")]),t._v(" 示例解决方案1")]),t._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("try")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tconn "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" DriveManager"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("getConnection")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("jdbc"),n("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v("mysqlxxxxxxxx"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  stmt "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" conn"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("createStatement")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  \n  "),n("span",{attrs:{class:"token comment"}},[t._v("//数据库生成订单操作")]),t._v("\n  stmt"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("executeUpdate")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"insert xx values xx"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("//生成发送的消息内容")]),t._v("\n  MsgObject "),n("span",{attrs:{class:"token function"}},[t._v("MsgContent")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("orderID"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("//发送消息")]),t._v("\n  MQClient"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("sendMsg")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("MsgContent"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("//事务提交")]),t._v("\n  conn"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("commit")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token class-name"}},[t._v("Exception")]),t._v(" e"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  log"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("error")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("try")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("//操作不成功则回退")]),t._v("\n    conn"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("rollback")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token class-name"}},[t._v("Exception")]),t._v(" e1"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    log"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("error")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e1"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h4",{attrs:{id:"存在的问题："}},[n("a",{staticClass:"header-anchor",attrs:{href:"#存在的问题：","aria-hidden":"true"}},[t._v("#")]),t._v(" 存在的问题：")]),t._v(" "),n("ul",[n("li",[t._v("当发送MQ时，超时或者无法判断MQ是否发送成功时，则无法保证一致性。")]),t._v(" "),n("li",[t._v("如果MQ发送成功，但是DB提交失败，则消息已经发送出去了，无法保证一致性。")])]),t._v(" "),n("h3",{attrs:{id:"分布式事务分类"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#分布式事务分类","aria-hidden":"true"}},[t._v("#")]),t._v(" 分布式事务分类")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("刚性分布式事务")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("强一致性")]),t._v(" "),n("p",[t._v("ACID=原子性（Atomicity）、一致性（Consistency）、"),n("strong",[t._v("隔离性")]),t._v("（Lsolation）、持久性（Durability）")])]),t._v(" "),n("li",[n("p",[t._v("XA模型")])])])]),t._v(" "),n("li",[n("p",[t._v("柔性分布式事务")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("最终一致性")])]),t._v(" "),n("li",[n("p",[t._v("CAP、BASE理论")]),t._v(" "),n("p",[t._v("CAP：分布式环境下P一定需要，CA权衡折中。")]),t._v(" "),n("p",[t._v("BASE：")]),t._v(" "),n("pre",[n("code",[t._v("- Basically Available 基本可用\n- Soft state 柔性状态\n- Eventual consistency 最终一致性\n")])])]),t._v(" "),n("li",[n("p",[t._v("TCC模型")])]),t._v(" "),n("li",[n("p",[t._v("Sage模型")])])])])]),t._v(" "),n("h3",{attrs:{id:"xa模型"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#xa模型","aria-hidden":"true"}},[t._v("#")]),t._v(" XA模型")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("XA模型由AP、RM、TM组成")]),t._v(" "),n("ul",[n("li",[t._v("应用程序（Application Program）：定义事务边界(定义事务开始和结束)并访问事务边界内的资源。")]),t._v(" "),n("li",[t._v("资源管理器（Resouce Manager）：管理计算机共享的资源（数据库等）")]),t._v(" "),n("li",[t._v("事务管理器（Transaction Manager）：负责管理全局事务，分配事务唯一标识，监控事务的执行进度，负责事务的提交，回滚，失败恢复等。")])])]),t._v(" "),n("li",[n("p",[t._v("二阶段提交，是XA规范标准实现。")])]),t._v(" "),n("li",[n("p",[t._v("过程：")]),t._v(" "),n("ul",[n("li",[t._v("TM发起prepare投票。")]),t._v(" "),n("li",[t._v("RM都同意后，TM再发起commit。")]),t._v(" "),n("li",[t._v("commit过程出现宕机等异常，节点服务重启后，根据XA recover再次进行commit补偿。")])])]),t._v(" "),n("li",[n("p",[t._v("缺点：")]),t._v(" "),n("ul",[n("li",[t._v("同步阻塞模型")]),t._v(" "),n("li",[t._v("数据库资源锁定时间很长")]),t._v(" "),n("li",[t._v("全局锁（隔离级别串行化），并发低")]),t._v(" "),n("li",[t._v("不适合长事务场景")])])])]),t._v(" "),n("h3",{attrs:{id:"tcc模型"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#tcc模型","aria-hidden":"true"}},[t._v("#")]),t._v(" TCC模型")]),t._v(" "),n("ul",[n("li",[t._v("Try-Confirm-Cancel")]),t._v(" "),n("li",[t._v("TCC模型完全交友业务实现，每个子业务都需要实现TCC接口。"),n("strong",[t._v("对业务侵入大；资源锁定交由业务方")])]),t._v(" "),n("li",[t._v("Try：尝试执行业务，完成所有业务检查，预留必要的业务资源")]),t._v(" "),n("li",[t._v("Confirm：真正执行业务，不再做业务检查")]),t._v(" "),n("li",[t._v("Cancel：释放Try阶段预留的业务资源")])]),t._v(" "),n("h3",{attrs:{id:"saga模型"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#saga模型","aria-hidden":"true"}},[t._v("#")]),t._v(" Saga模型")]),t._v(" "),n("ul",[n("li",[t._v("把一个分布式事务拆分为多个本地事务，每个本地事务都有相应的执行模块和补偿模块(对应TCC中的Confirm和Cancel)。")]),t._v(" "),n("li",[t._v("当Saga事务中任意一个本地事务出错时，可以通过调用相关的补偿方法恢复之前的事务，达到事务最终一致性。")]),t._v(" "),n("li",[t._v("当每个子事务T1,T2…Tn都有对应的补偿定义C1,C2…"),n("strong",[t._v("Cn-1")]),t._v(" "),n("ul",[n("li",[t._v("最佳情况T1,T2…Tn成功完成")]),t._v(" "),n("li",[t._v("或者T1,T2…Tj，Cj-1…C2,c1，0<j<n得以完成。意思就是一旦有事务执行失败，就依次执行反向补偿。")])])]),t._v(" "),n("li",[t._v("隔离性\n"),n("ul",[n("li",[t._v("业务层控制并发\n"),n("ul",[n("li",[t._v("在应用层加锁")]),t._v(" "),n("li",[t._v("应用层预先冻结资源")])])])])]),t._v(" "),n("li",[t._v("恢复方式\n"),n("ul",[n("li",[t._v("向后恢复")]),t._v(" "),n("li",[t._v("向前恢复")])])])]),t._v(" "),n("h3",{attrs:{id:"特性比较"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#特性比较","aria-hidden":"true"}},[t._v("#")]),t._v(" 特性比较")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",{staticStyle:{"text-align":"center"}}),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[t._v("刚性事务")]),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[t._v("柔性事务")])])]),t._v(" "),n("tbody",[n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("业务改造")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("无")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("有")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("回滚")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("支持")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("实现补偿接口")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("一致性")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("强一致")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("最终一致")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("隔离性")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("原生支持")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("实现资源锁定接口")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("并发性能")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("严重衰退")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("略微衰退")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("适合场景")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("短事务并发较低")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("长事务高并发")])])])]),t._v(" "),n("h3",{attrs:{id:"异步场景分布式事务设计"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#异步场景分布式事务设计","aria-hidden":"true"}},[t._v("#")]),t._v(" 异步场景分布式事务设计")]),t._v(" "),n("h4",{attrs:{id:"方案一：业务方提供本地操作成功回查功能"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#方案一：业务方提供本地操作成功回查功能","aria-hidden":"true"}},[t._v("#")]),t._v(" 方案一：业务方提供本地操作成功回查功能")]),t._v(" "),n("ul",[n("li",[t._v("MQ分布式事务消息设计\n"),n("ul",[n("li",[t._v("MQ事务消息设计事务消息作为一种异步确保性事务，将两个事务分支通过MQ进行异步解耦，MQ事务消息的设计流程同样借鉴了两段提交理论")]),t._v(" "),n("li",[t._v("1.事务发起方首先发送prepare消息到MQ")]),t._v(" "),n("li",[t._v("2.在发送prepare消息成功后执行本地事务")]),t._v(" "),n("li",[t._v("3.根据本地事务执行结果返回commit或者rollback")]),t._v(" "),n("li",[t._v("4.如果消息是rollback，MQ将删除该prepare消息不进行下发，如果是commit消息，MQ将会消息发送给consumer段")]),t._v(" "),n("li",[t._v("5.如果执行本地事务过程中，执行端挂掉，或者超时，MQ服务器端将不停的询问producer来获取事务状态（"),n("strong",[t._v("半消息状态")]),t._v("）")]),t._v(" "),n("li",[t._v("6.Consumer端的消费成功机制有MQ保证")])])])]),t._v(" "),n("p",[n("img",{attrs:{src:"/img/distributed/2.png",alt:"1"}})]),t._v(" "),n("ul",[n("li",[n("p",[t._v("优点：")]),t._v(" "),n("ul",[n("li",[t._v("通用")])])]),t._v(" "),n("li",[n("p",[t._v("缺点")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("业务方需要提供回查接口，业务侵入较大")])]),t._v(" "),n("li",[n("p",[t._v("发送消息非幂等")])]),t._v(" "),n("li",[n("p",[t._v("消费端需要处理幂等")])])])])]),t._v(" "),n("h4",{attrs:{id:"方案二：本地事务消息表"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#方案二：本地事务消息表","aria-hidden":"true"}},[t._v("#")]),t._v(" 方案二：本地事务消息表")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("​\t本地操作和发送消息通过本地事务强一致性")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("本地事务操作表")])]),t._v(" "),n("li",[n("p",[t._v("本地事务消息表")]),t._v(" "),n("ul",[n("li",[t._v("mqMessages(msgid，content，topic，status)")])])])])])]),t._v(" "),n("p",[n("img",{attrs:{src:"/img/distributed/3.png",alt:"3"}})]),t._v(" "),n("ul",[n("li",[t._v("发送端消息不幂等\n"),n("ul",[n("li",[t._v("At least once")]),t._v(" "),n("li",[t._v("Only once")]),t._v(" "),n("li",[t._v("At more once")])])]),t._v(" "),n("li",[t._v("消费端处理消息幂等\n"),n("ul",[n("li",[t._v("分布式锁")])])]),t._v(" "),n("li",[t._v("T1->T2->T3\n"),n("ul",[n("li",[t._v("T1、T2成功，T3失败\n"),n("ul",[n("li",[t._v("记录错误日志")]),t._v(" "),n("li",[t._v("报警")]),t._v(" "),n("li",[t._v("人工介入")])])])])]),t._v(" "),n("li",[t._v("优点\n"),n("ul",[n("li",[t._v("业务侵入小")])])])])])},[],!1,null,null,null);_.options.__file="distributed-transaction.md";a.default=_.exports}}]);