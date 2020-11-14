- [JSONPlaceholder](#JSONPlaceholder)
- [Axios](#Axios)
- [Fetch API](#Fetch-API)







---------------------------------------------------------------------------------------------------------------------

## JSONPlaceholder


[JSONPlaceholder官网](https://jsonplaceholder.typicode.com/)  
[JSONPlaceholder文档](https://jsonplaceholder.typicode.com/guide/)  
[JSONPlaceholder Github](https://github.com/typicode/jsonplaceholder)  



A simple online fake REST API server

一个简单的在线假REST API服务器

JSONPlaceholder is a simple fake REST API for testing and prototyping.

JSONPlaceholder是用于测试和原型制作的简单假REST API。



---------------------------------------------------------------------------------------------------------------------

## Axios


[Axios Github](https://github.com/axios/axios)  
[axios中文文档|axios中文网](http://www.axios-js.com/zh-cn/docs/)  
[Axios介绍](https://www.oschina.net/p/axios)  
[使用 axios 访问 API](https://cn.vuejs.org/v2/cookbook/using-axios-to-consume-apis.html)  
[What is Axios.js and why should I care?](https://medium.com/@MinimalGhost/what-is-axios-js-and-why-should-i-care-7eb72b111dc0)  

Promise based HTTP client for the browser and node.js

Axios 是一个基于Promise的HTTP客户端，可以用于浏览器和node.js中。



### Axios和Ajax区别

jquery是浏览器端 axios 是node与浏览器都可以使用 jquery 是 callback 处理请求响应 axios是promise

Axios 在NPM上的描述是：Promise based HTTP client for the browser and node.js，是一种基于Promise封装的HTTP客户端。

AJAX完整是 Asynchronous Javascript And XML . 异步js和xml，是一种异步请求的技术。

区别

Axios是通过Promise实现XHR封装，其中Promise是控制手段，XHR是实际发送Http请求的客户端。就像$.ajax是通过callback+XHR实现一样，你也可以造个轮子叫XXX的，都是AJAX技术的一种具体实现。

简单来说： AJAX技术是实现网页的局部数据刷新，你可以通过XHR、Fetch、WebSocket等API实现。

Ajax 即“Asynchronous Javascript And XML”（异步 JavaScript 和 XML），是指一种创建交互式网页应用的网页开发技术。       

Ajax = 异步 JavaScript 和 XML（标准通用标记语言的子集）。       

Ajax 是一种用于创建快速动态网页的技术。       

Ajax 是一种在无需重新加载整个网页的情况下，能够更新部分网页的技术。       

通过在后台与服务器进行少量数据交换，Ajax 可以使网页实现异步更新。这意味着可以在不重新加载整个网页的情况下，对网页的某部分进行更新。       

传统的网页（不使用 Ajax）如果需要更新内容，必须重载整个网页页面。


axios：       
用于浏览器和node.js的基于Promise的HTTP客户端      

1. 从浏览器制作XMLHttpRequests      
2. 让HTTP从node.js的请求      
3. 支持Promise API      
4. 拦截请求和响应      
5. 转换请求和响应数据      
6. 取消请求      
7. 自动转换为JSON数据      
8. 客户端支持防止XSRF


---------------------------------------------------------------------------------------------------------------------
## Fetch API


[Fetch API标准](https://fetch.spec.whatwg.org/)  
[Fetch API参考文档](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)  
[Fetch API使用参考](https://github.github.io/fetch/)  
[Fetch API Github](https://github.com/github/fetch)  






---------------------------------------------------------------------------------------------------------------------

