(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{542:function(o,v,_){"use strict";_.r(v);var n={props:["slot-key"],mounted:function(){this.$nextTick(function(){this.$vuepress.$emit("AsyncMarkdownContentMounted",this.slotKey)})}},l=_(2),t=Object(l.a)(n,function(){var o=this,v=o.$createElement,_=o._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":o.slotKey}},[_("h1",{attrs:{id:"事务"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#事务","aria-hidden":"true"}},[o._v("#")]),o._v(" 事务")]),o._v(" "),_("h3",{attrs:{id:"transactional不生效的场景"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#transactional不生效的场景","aria-hidden":"true"}},[o._v("#")]),o._v(" @Transactional不生效的场景")]),o._v(" "),_("ol",[_("li",[o._v("数据库引擎是否支持事务（MySql的MyIsam引擎不支持事物）")]),o._v(" "),_("li",[o._v("注解所在的类是否被加载成Bean")]),o._v(" "),_("li",[o._v("注解所在方法是否为public修饰的")]),o._v(" "),_("li",[o._v("是否发生了自调用问题")]),o._v(" "),_("li",[o._v("所用数据源是否加载了事务管理器")]),o._v(" "),_("li",[o._v("@Transactional的扩展配置propagation是否正确")])]),o._v(" "),_("hr"),o._v(" "),_("h3",{attrs:{id:"数据库的事务隔离级别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#数据库的事务隔离级别","aria-hidden":"true"}},[o._v("#")]),o._v(" 数据库的事务隔离级别")]),o._v(" "),_("p",[o._v("事务的四大特性(ACID):")]),o._v(" "),_("ol",[_("li",[o._v("原子性，是指事务是最小的执行单位,事务包含的所有操作要么全部成功，要么全部失败回滚")]),o._v(" "),_("li",[o._v("一致性，执行事务前后，数据保持一致，多个事务对同一个数据读取的结果是相同的。")]),o._v(" "),_("li",[o._v("隔离性，当多个用户并发访问数据库时，比如操作同一张表时，数据库为每一个用户开启的事务，不能被其他事务的操作所干扰")]),o._v(" "),_("li",[o._v("持久性，一个事务被提交之后。它对数据库中数据的改变是持久的，即使数据库发生故障也不应该对其有任何影响")])]),o._v(" "),_("blockquote",[_("p",[o._v("InnoDB引擎的事务的ACID是通过InnoDB日志和锁来保证的。"),_("br"),o._v("\n原子性和一致性通过Undo log（回撤日志）来实现的"),_("br"),o._v("\n隔离性是通过数据库锁的机制实现的"),_("br"),o._v("\n持久性通过redo log（重做日志）来实现的"),_("br")]),o._v(" "),_("p",[o._v("Undo Log的原理很简单，为了满足事务的原子性，在操作任何数据之前，首先将数据备份到一个地方（Undo Log）。然后进行数据的修改。如果出现了错误或者用户执行了roll back语句，系统可以利用Undo Log中的备份将数据恢复到事务开始之前的状态。 "),_("br"),o._v("\n和Undo Log相反，Redo Log记录的是新数据的备份。在事务提交前，只要将RedoLog持久化即可，不需要将数据持久化。当系统崩溃时，虽然数据没有持久化，但是RedoLog已经持久化。系统可以根据Redo Log的内容，将所有数据恢复到最新的状态。")])]),o._v(" "),_("p",[o._v("事务的隔离级别:")]),o._v(" "),_("ol",[_("li",[o._v("脏读,是指在一个事务执行过程中读取了另一个未提交事务中的数据")]),o._v(" "),_("li",[o._v("不可重复读,是指某个数据库中的数据，一个事务范围内多次查询却返回了不同的数据值，这是由于在查询间隔，被另一个事务修改并提交了。")]),o._v(" "),_("li",[o._v("幻读,是指在一个事务(T1)读取了几行数据之后，接着另一个并发事务(T2)插入了一些数据,就会发现多了一些原本不存在的记录.")])]),o._v(" "),_("blockquote",[_("p",[o._v("以上问题都是数据库读一致性问题，必须由数据库提供一定的事务隔离机制来解决。数据库实现事务隔离的方式，基本上可分为以下两种：")]),o._v(" "),_("ul",[_("li",[o._v("一种是在读取数据前，对其加锁，阻止其他事务对数据进行修改。")]),o._v(" "),_("li",[o._v("另一种是不用加任何锁，通过一定机制生成一个数据请求时间点的一致性数据快照（Snapshot)，并用这个快照来提供一定级别（语句级或事务级）的一致性读取。从用户的角度来看，好像是数据库可以提供同一数据的多个版本，因此，这种技术叫做数据多版本并发控制（MultiVersion Concurrency Control，简称MVCC或MCC），也经常称为多版本数据库。")])])]),o._v(" "),_("p",[o._v("SQL 标准定义了四个隔离级别:")]),o._v(" "),_("ul",[_("li",[o._v("读取未提交(READ-UNCOMMITTED): 最低的隔离级别，允许读取尚未提交的数据变更，可能会导致脏读、幻读或不可重复读。")]),o._v(" "),_("li",[o._v("读取已提交(READ-COMMITTED): 允许读取并发事务已经提交的数据，可以阻止脏读，但是幻读或不可重复读仍有可能发生。")]),o._v(" "),_("li",[o._v("可重读(REPEATABLE-READ): 对同一字段的多次读取结果都是一致的，除非数据是被本身事务自己所修改，可以阻止脏读和不可重复读，但幻读仍有可能发生。")]),o._v(" "),_("li",[o._v("可串行化(SERIALIZABLE): 最高的隔离级别，完全服从ACID的隔离级别。所有的事务依次逐个执行，这样事务之间就完全不可能产生干扰，也就是说，该级别可以防止脏读、不可重复读以及 幻读。")])]),o._v(" "),_("blockquote",[_("p",[o._v("MySQL InnoDB 存储引擎的默认支持的隔离级别是 REPEATABLE-READ(可重读)。我们可以通过 SELECT @@tx_isolation;命令来查看"),_("br"),o._v("\n与SQL标准不同的地方在于InnoDB存储引擎在可重读事务隔离级别下使用的是Next-Key Lock锁算法，因此可以避免幻读的产生，这与其他数据库系统(如 SQL Server) 是不同的。所以说InnoDB存储引擎的默认支持的隔离级别是可重读,已经可以完全保证事务的隔离性要求，即达到了SQL标准的可串行化隔离级别。因为隔离级别越低，事务请求的锁越少，所以大部分数据库系统的隔离级别都是 READ- COMMITTED(读取提交内容) ，但是你要知道的是InnoDB存储引擎默认使用可重读级别并不会有任何性能损失。")])]),o._v(" "),_("p",[o._v("锁机制:")]),o._v(" "),_("ul",[_("li",[o._v("MyISAM采用表级锁(table-level locking)。")]),o._v(" "),_("li",[o._v("InnoDB支持行级锁(row-level locking)和表级锁,默认为行级锁")])]),o._v(" "),_("p",[o._v("InnoDB存储引擎的锁的算法有三种:")]),o._v(" "),_("ul",[_("li",[o._v("Record lock:单个行记录上的锁")]),o._v(" "),_("li",[o._v("Gap lock:间隙锁，锁定一个范围，不包括记录本身")]),o._v(" "),_("li",[o._v("Next-key lock:record+gap 锁定一个范围，包含记录本身")])])])},[],!1,null,null,null);t.options.__file="transactional.md";v.default=t.exports}}]);