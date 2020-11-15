<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <MyHome/>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

import MyHome from "@/myComponents/MyHome";

export default {
  name: 'Home',
  components: {
    HelloWorld,
    MyHome
  }
}
</script>
