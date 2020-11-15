<template>
  <header>
    <h1 @click="changeTitle">{{ title }}</h1>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      // title: 'Vue Ninjas'
    }
  },
  methods: {
    changeTitle() {
      // this.title = 'yangzl直接修改父变量title，控制台报错';
      // 注册事件，参数1是事件名称，参数2...是值
      this.$emit('changeTitle', 'yangzl通过$emit修改了父title的值，所有的引用父title的地方都变了，比如Footer');
    }
  },
  // lifecycle hooks
  // 生命周期钩子函数
  beforeCreate() {
    //alert('beforeCreate这时实例还没有被创建，所以你无法知道data，也不能用watch监听');
    console.log('beforeCreate这时实例还没有被创建，所以你无法知道data，也不能用watch监听');
  },
  created() {
    // alert('created这时实例已经创建，可以得到data，调用watch，但是页面还是空白的');
    console.log('created这时实例已经创建，可以得到data，调用watch，但是页面还是空白的');
  },
  beforeMount() {
    // alert('beforeMount页面挂载前，此时页面还是空白的，这时render函数首次被调用');
    console.log('beforeMount页面挂载前，此时页面还是空白的，这时render函数首次被调用');
  },
  mounted() {
    // alert('mounted页面挂载了，这时你可以看到页面的内容，也可以访问到DOM');
    console.log('mounted页面挂载了，这时你可以看到页面的内容，也可以访问到DOM');
  },
  beforeUpdate() {
    // alert('beforeUpdate数据更新前，也就是虚拟DOM打补丁之前');
    console.log('beforeUpdate数据更新前，也就是虚拟DOM打补丁之前');
  },
  updated() {
    // alert('updated数据已经更新完毕');
    console.log('updated数据已经更新完毕');
  }, beforeDestroy() {
    // alert('beforeDestroy页面离开之前被调用，可以清除定时器，或者第三方的一些DOM结构');
    console.log('beforeDestroy页面离开之前被调用，可以清除定时器，或者第三方的一些DOM结构');
  }, destroyed() {
    // alert('destroyed当前实例已经完全被销毁');
    console.log('destroyed当前实例已经完全被销毁');
  }
}
</script>

<style scoped>
header {
  background: lightgreen;
  padding: 10px;
}

h1 {
  color: #222;
  text-align: center;
}
</style>