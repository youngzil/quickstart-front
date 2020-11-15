<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">

    <keep-alive>
      <component :is="component"></component>
    </keep-alive>
    <button @click="component = 'form-one'">Show Form One</button>
    <button @click="component = 'form-two'">Show Form Two</button>

    <FormHelper>
      <div slot="title">
        <h2> slot title：{{ title }}</h2>
        <p>哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</p>
      </div>

      <div slot="text">
        <p>这是文本内容</p>
        <p>这真的是文本哈哈哈哈哈哈哈</p>
      </div>
    </FormHelper>

    <h1>App.vue</h1>
    <Header v-bind:title="title"/>
    <!--    监听事件必须放在前面，否则会报错-->
    <Header @changeTitle="updateTitle($event)" v-bind:title="title"/>
    <Users4 :myWechat="myWechat" :users="users"/>
    <br/>
    <br/>
    <Users4 :myWechat="myWechat" :users="users"/>
    <Footer :title="title"/>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Users4 from "@/myComponents/Users";
import Header from "@/myComponents/Header";
import Footer from "@/myComponents/Footer";
import FormHelper from "@/myComponents/FormHelper";
import FormOne from "@/myComponents/FormOne";
import FormTwo from "@/myComponents/FormTwo";

export default {
  name: 'App',
  components: {
    // Users4:Users4,
    Users4,
    Header,
    Footer,
    HelloWorld,
    FormHelper,
    "form-one": FormOne,
    "form-two": FormTwo
  },
  data() {
    return {
      component: "form-two",
      myWechat: "myWechatNumber",
      title: 'Vue Wizards',
      users: [
        {name: 'Ryu', speciality: 'Vue Components', show: false},
        {name: 'Crystal', speciality: 'HTML Wizardry', show: false},
        {name: 'Hitoshi', speciality: 'Click Events', show: false},
        {name: 'Tango', speciality: 'Conditionals', show: false},
        {name: 'Kami', speciality: 'Webpack', show: false},
        {name: 'Yoshi', speciality: 'Data Diggin', show: false}
      ]
    }
  },
  methods: {
    updateTitle(updatedTitle) {
      console.log(updatedTitle);
      this.title = updatedTitle;
    }
  }
}
</script>

<style scoped>
h1 {
  color: purple;
}

body {
  margin: 0;
  font-family: 'Nunito SemiBold';
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h2 {
  background: lightgreen;
}

</style>
