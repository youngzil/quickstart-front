- [CSS介绍](#CSS介绍)


---------------------------------------------------------------------------------------------------------------------

## CSS介绍

层叠样式表（英语：Cascading Style Sheets，缩写：CSS；又称串样式列表、级联样式表、串接样式表、阶层式样式表）

[CSS W3C官网](https://www.w3.org/Style/CSS/)  
[CSS wiki](https://zh.wikipedia.org/wiki/%E5%B1%82%E5%8F%A0%E6%A0%B7%E5%BC%8F%E8%A1%A8)  

[CSS教程](https://www.w3schools.com/css/default.asp)  
[CSS教程中文版](http://https://www.w3school.com.cn/h.asp)  
[CSS教程中文版2](http://www.w3s.com.cn/nav/h/)  

层叠样式表（英语：Cascading Style Sheets，缩写：CSS；又称串样式列表、级联样式表、串接样式表、阶层式样式表）是一种用来为结构化文档（如HTML文档或XML应用）添加样式（字体、间距和颜色等）的计算机语言，由W3C定义和维护。目前最新版本是CSS2.1，为W3C的推荐标准。[来源请求]CSS3现在已被大部分现代浏览器支持，而下一版的CSS4仍在开发中。


CSS不能单独使用，必须与HTML或XML一起协同工作，为HTML或XML起装饰作用。

CSS由多组“规则”组成。每个规则由“选择器”（selector）、“属性”（property）和“值”（value）组成：
- 选择器（Selector）：多个选择器可以半角逗号（,）隔开。
- 属性（property）：CSS1、CSS2、CSS3规定了许多的属性，目的在控制选择器的样式。
- 值（value）：指属性接受的设置值，多个关键字时大都以空格隔开。

属性和值之间用半角冒号（:）隔开，属性和值合称为“特性”。多个特性间用“;”隔开，最后用“{ }”括起来。

如下示例
```
<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
               "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="zh">
<head>
    <style type="text/css">
    body{
        background:#fff;
        color:#777;
    }
    h1{
        font:bold italic sans-serif;
        color:green;
    }
    </style>
</head>
<body>
    <h1>這個句子用綠色、粗體和斜體字顯示</h1>
    <p>普通字。</p>
    <h1 style="color:red; background:green;">
    這個句子用大的、紅色斜體字在綠色背景上顯示，通用的h1樣式在這裡被取代了。
    </h1>
    <h1 style="color: green;"><strong><em>這個句子用綠色、粗體和斜體字顯示</em></strong></h1>
</body>
</html>
```





---------------------------------------------------------------------------------------------------------------------

