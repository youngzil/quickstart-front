<template>
  <div class="users">
    <h1>I am Users.vue</h1>

    <!--<ul>
      <li v-for="(ninja,index) in ninjas" :key="index" @click="ninja.show = !ninja.show">
        <h2>{{ ninja.name }}</h2>
        <h3 v-show="ninja.show">{{ ninja.speciality }}</h3>
      </li>
    </ul>-->

    <br/>

    <ul>
      <li v-for="(ninja,index) in users" :key="index" @click="ninja.show = !ninja.show">
        <h2>{{ ninja.name }}</h2>
        <h3 v-show="ninja.show">{{ ninja.speciality }}</h3>
      </li>
    </ul>
    <button v-on:click="deleteNinja">Delete a Ninja</button>

    <br/>
    <p>我的微信是:{{myWechat}}</p>

  </div>
</template>

<script>
export default {
  name: "Users2",
  props: {
    myWechat: {
      type: String,
      required: true
    },
    users: {
      type: Array,
      required: true
    }
  },

  data() {
    return {
      ninjas: [
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
    deleteNinja: function(){
      this.users.pop();
    }
  }
}
</script>

<style scoped>

h1 {
  color: green;
}

#ninjas {
  width: 100%;
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
  box-sizing: border-box;
}

ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}

li {
  flex-grow: 1;
  flex-basis: 300px;
  text-align: center;
  padding: 30px;
  border: 1px solid #222;
  margin: 10px;
}

</style>
