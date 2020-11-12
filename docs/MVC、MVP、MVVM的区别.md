MVC、MVP、MVVM的区别

- MVC简要：Model-View-Controller，Model、View、Controller，分别表示数据、视图、控制器。
- MVVM简要：Model-View-ViewModel



MVC（Model-View-Controller）：
- 视图（View）：用户界面。
- 控制器（Controller）：业务逻辑
- 模型（Model）：数据保存

1. View 传送指令到 Controller
2. Controller 完成业务逻辑后，要求 Model 改变状态
3. Model 将新的数据发送到 View，用户得到反馈


MVVM简要：Model-View-ViewModel  
它采用双向绑定（data-binding）：View的变动，自动反映在 ViewModel，反之亦然。Angular 和 Ember 都采用这种模式。




[什么是MVVM框架？](https://zhuanlan.zhihu.com/p/59467370)  
[MVC，MVP 和 MVVM 的图示](https://www.ruanyifeng.com/blog/2015/02/mvcmvp_mvvm.html)  
[MVVM框架理解及其原理实现](https://segmentfault.com/a/1190000015895017)  



