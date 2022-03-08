
无限Debugger的反爬/反调试
JS禁止右键功能
JS无限循环弹出(function anonymous( ) { debugger })

打开链接，打开开发者工具，过了几秒后，就会被打上断点，暂停掉：  
点击运行又会跳回这个页面，怎么点都没用，代码都查看不了，这就是无限 debugger，要解决呢，这里介绍两种办法，

第一是最直接简单的，取消断点，但这样做的话自己要打断点调试就不可以了，有局限。
第二种使用 Fiddler 修改网页返回内容过滤掉debugger标签可以破解此套路。



无限的实现无非就是递归循环，while，setTimeout，setInterval等等都能实现。
关于代码保护，禁止打开控制台，之前写了篇文章JS禁止打开控制台
[JS禁止打开控制台](https://segmentfault.com/a/1190000021459140)




[JS逆向 | 无限Debugger之淘大象](https://cloud.tencent.com/developer/article/1595283)  
[突破前端反调试--阻止页面不断debugger](https://segmentfault.com/a/1190000012359015)  
[问卷星自动填写](https://cloud.tencent.com/developer/article/1758251)  
[爬虫技巧----突破前端反调试(无限debugger)](https://blog.csdn.net/qq_26712977/article/details/99071009)  
[解决某网站无法调试的问题(function anonymous( ) { debugger })](https://blog.csdn.net/chinatopno1/article/details/104177921)  
[]()



