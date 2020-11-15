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








[VueCli3.x最新入门教程(最全)网易课堂](https://study.163.com/course/courseMain.htm?courseId=1004711010)  
[VueCli3全新小白入门教程(基础+实战+vue+fetch+axios+米斯特吴)腾讯课堂](https://ke.qq.com/course/452954?taid=3938923097549146)  
[教程代码](https://github.com/hemiahwu/vue-basic) ：查看分支里面的代码








