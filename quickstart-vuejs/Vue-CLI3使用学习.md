Vue有两个版本：vue2.X vue3.X

Vue CLI是另外的版本号：现在最高版本是4.X




一个Vue模板是.vue文件，包含三个部分：
1. template（HTML部分，只能有一个跟标签）
2. script（JS部分）
3. style（CSS部分）

Users.vue
```
<template>

</template>

<script>
export default {
name: "Users"
}
</script>

<style scoped>

</style>
```


在组件中，data必须是一个函数
组件嵌套：父组件、子组件

注册组件：引用、注册、使用
1. 全局注册组件，在main.js中引入，在全局哪里都可以使用  
    一个地方修改，会导致所有引用都影响，所以不怎么使用  
    定义好了，就可以在其他地方使用，不需要引用  
2. 局部注册组件，在其他组件中直接import注册



组件属性传值，两种情况：
1. 传值
2. 传引用（对象、数组）

props和data存在相同的变量，控制台会报错，但是可以正常显示，依props中传递过来的为准，覆盖data中的


实例的生命周期钩子函数（内置的）

动态组件和缓存




自定义脚手架模板：

vue create vue3-example

然后上下键选中  
Manually select features 

然后回车  
空格键选中 或者 a全部选中 或者 a全部取消  

然后回车配置，最后设置一个名字即可  



添加插件  
vue add vuetify

vuetify是一个类似element ui的UI库





环境变量

文件名：  
.env  
.env.development  
.env.production  

里面的变量名称必须是VUE_APP_开头，也就是VUE_APP_XXX



独立运行.vue文件

vue serve Hello.vue




创建项目方式：
- 命令行：vue create vue3-example
- 图形页面创建：vue ui



基础路径的配置：vue.config.js
参考webpack文档



Composition API






[VueCli3.x最新入门教程(最全)网易课堂](https://study.163.com/course/courseMain.htm?courseId=1004711010)  
[VueCli3全新小白入门教程(基础+实战+vue+fetch+axios+米斯特吴)腾讯课堂](https://ke.qq.com/course/452954?taid=3938923097549146)  
[教程代码](https://github.com/hemiahwu/vue-basic) ：查看分支里面的代码








