- [Canvas画布介绍](#Canvas画布介绍)
- [由于CORS污染(taints)画布canvas问题](#由于CORS污染(taints)画布canvas问题)
- [JS压缩图片(画布canvas)](#JS压缩图片(画布canvas))



---------------------------------------------------------------------------------------------------------------------
## Canvas画布介绍

<canvas>是一个可以使用脚本(通常为JavaScript)来绘制图形的 HTML 元素.例如,它可以用于绘制图表、制作图片构图或者制作简单的(以及不那么简单的)动画
<canvas> 最早由Apple引入WebKit，用于Mac OS X 的 Dashboard，随后被各个浏览器实现。如今，所有主流的浏览器都支持它。


Canvas API 提供了一个通过JavaScript 和 HTML的<canvas>元素来绘制图形的方式。它可以用于动画、游戏画面、数据可视化、图片编辑以及实时视频处理等方面。



[Canvas API](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API)  
[Canvas教程](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial)  

[Canvas API中文文档首页地图](https://www.canvasapi.cn/)  

[Canvas 指南中文版](https://zh.guides.instructure.com/)  


[HTML 5 Canvas 参考手册](https://www.w3school.com.cn/tags/html_ref_canvas.asp)  



---------------------------------------------------------------------------------------------------------------------
## 由于CORS污染(taints)画布canvas问题

跨域图片资源权限(CORS enabled image)

HTML 规范文档为 images 引入了 crossorigin 属性, 通过设置适当的头信息 CORS , 可以从其他站点加载 img 图片, 并用在 canvas 中,就像从当前站点(current origin)直接下载的一样.
crossorigin 属性的使用细节, 请参考 CORS settings attributes.
https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes

什么是 “被污染的(tainted)” canvas?
尽管没有CORS授权也可以在 canvas 中使用图像, 但这样做就会污染(taints)画布。 只要 canvas 被污染, 就不能再从画布中提取数据, 也就是说不能再调用 toBlob(), toDataURL() 和 getImageData() 等方法, 否则会抛出安全错误(security error).

这实际上是为了保护用户的个人信息,避免未经许可就从远程web站点加载用户的图像信息,造成隐私泄漏。

(译者注: 如果用户登陆过QQ等社交网站, 假若不做保护 ,则可能打开某个网站后,该网站利用 canvas 将用户的图片信息获取,上传,进而引发泄露.)




html2canvas-绘制CORS图片污染画布引起的问题
背景与需求
将某段html转化为图片并可下载到本地。

使用方案
通过html2canvas先将html转化为canvas,再通过canvas.toDataURL将canvas转化为图片

遇到的问题
绘图元素中使用的图片存放在阿里云，因此存在非同源CORS问题，图片可以绘制(allowTaint: true), 但这样的话，画布被污染，就无法导出canvas的数据转化为图片了

https://blog.csdn.net/renfufei/article/details/51675148
https://segmentfault.com/q/1010000018678384/a-1020000018692654
https://segmentfault.com/q/1010000017415625/a-1020000017416006


---------------------------------------------------------------------------------------------------------------------
## JS压缩图片(画布canvas)

function canvasDataURL(path, callback){
    var img = new Image();
    img.src = path;
    img.onload = function(){
        var that = this;
        // 默认按比例压缩
        var w = that.width,
            h = that.height,
            scale = w / h;
        w = （压缩后的宽）;
        h = （压缩后的高）;
        var quality = 0.7;  // 默认图片质量为0.7
        //生成canvas
        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d');
        // 创建属性节点
        var anw = document.createAttribute("width");
        anw.nodeValue = w;
        var anh = document.createAttribute("height");
        anh.nodeValue = h;
        canvas.setAttributeNode(anw);
        canvas.setAttributeNode(anh);
        ctx.drawImage(that, 0, 0, w, h);
       
        // quality值越小，所绘制出的图像越模糊
        var base64 = canvas.toDataURL('image/jpeg', quality);
        // 回调函数返回base64的值
        callback(base64);
    }
}


https://blog.csdn.net/qq_30373193/article/details/92835428

---------------------------------------------------------------------------------------------------------------------


