AJAX即“Asynchronous JavaScript and XML”（异步的JavaScript与XML技术），指的是一套综合了多项技术的浏览器端网页开发技术。

尽管X在Ajax中代表XML, 但由于JSON的许多优势，比如更加轻量以及作为Javascript的一部分，目前JSON的使用比XML更加普遍。JSON和XML都被用于在Ajax模型中打包信息。

XMLHttpRequest 支持同步和异步通信。但是，一般来说，出于性能原因，异步请求应优先于同步请求。同步请求阻止代码的执行，这会导致屏幕上出现“冻结”和无响应的用户体验。

jquery的async:false,这个属性  
默认是true：异步，false：同步。

async 默认是 true，即为异步方式，$.ajax 执行后，会继续执行 ajax 后面的脚本，直到服务器端返回数据后，触发 $.ajax 里的success 方法。若要将其设置为 false，则所有的请求均为同步请求，在没有返回值之前，同步请求将锁住浏览器，用户其它操作必须等待请求完成才可以执行。http://api.jquery.com/jQuery.ajax/

之前一直在写JQUERY代码的时候遇到AJAX加载数据都需要考虑代码运行顺序问题。最近的项目用了到AJAX同步。这个同步的意思是当JS代码加载到当前AJAX的时候会把页面里所有的代码停止加载，页面出去假死状态，当这个AJAX执行完毕后才会继续运行其他代码页面假死状态解除。

而异步则这个AJAX代码运行中的时候其他代码一样可以运行。






Ajax在本质上是一个浏览器端的技术

Ajax技术之主要目的在于局部交换客户端及服务器之间的数据。  
使用Ajax的最大优点，就是能在不更新整个页面的前提下维护数据。这使得Web应用程序更为迅捷地回应用户动作，并避免了在网络上发送那些没有改变的信息。



Ajax是以异步的方式向服务器提交需求。对服务器而言，其与传统的提交窗体需求并无不同，而且由于是以异步之方式提交，如果同时有多个Ajax需求及窗体提交需求，将无法保证哪一个需求先获得服务器的响应。这会造成应用程序典型的多进程（process）或多线程（thread）的竞争（racing）问题。程序员因此必须自行处理或在JavaScript里面动手脚以避免这类竞争问题的发生（如Ajax需求未响应之前，先disable提交按钮），这又不必要的增加了程序员的负担。目前已知有自动处理此问题之开发框架似乎只有ZK。



JavaScript编程的最大问题来自不同的浏览器对各种技术和标准的支持。

XmlHttpRequest对象在不同浏览器中不同的创建方法，以下是跨浏览器的通用方法：
```angular2html
// Provide the XMLHttpRequest class for IE 5.x-6.x:
// Other browsers (including IE 7.x-8.x) ignore this
//   when XMLHttpRequest is predefined
var xmlHttp;
if (typeof XMLHttpRequest != "undefined") {
xmlHttp = new XMLHttpRequest();
} else if (window.ActiveXObject) {
var aVersions = ["Msxml2.XMLHttp.5.0", "Msxml2.XMLHttp.4.0", "Msxml2.XMLHttp.3.0", "Msxml2.XMLHttp", "Microsoft.XMLHttp"];
for (var i = 0; i < aVersions.length; i++) {
try {
xmlHttp = new ActiveXObject(aVersions[i]);
break;
} catch (e) {}
}
        }
```






参考  
https://zh.wikipedia.org/wiki/AJAX  
https://developer.mozilla.org/zh-CN/docs/Web/Guide/AJAX  
https://blog.csdn.net/ligang2585116/article/details/45484619  
https://www.jianshu.com/p/277a01356e88  

