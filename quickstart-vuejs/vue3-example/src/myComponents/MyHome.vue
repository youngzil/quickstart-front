<template>
  <div class="hello">
    <h1> my url {{ url }}</h1>
  </div>
</template>

<script>
export default {
  name: 'MyHome',
  data() {
    return {
      url: process.env.VUE_APP_API_URL
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
