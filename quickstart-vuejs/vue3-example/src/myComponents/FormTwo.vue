<template>
  <div>
    <form-helper>

      <div slot="form-header">
        <h3>Form Two</h3>
        <p>填写登录信息</p>
      </div>
      <div slot="form-fields">
        <input type="text" placeholder="username" required/>
        <input type="password" placeholder="password" required/>
      </div>
      <div slot="form-controls">
        <button @click="handleSubmit">登录</button>
      </div>
    </form-helper>
  </div>
</template>

<script>
import FormHelper2 from "@/myComponents/FormHelper2";
export default {
  name: "FormHelper",
  components: {
    "form-helper":FormHelper2
  },
  methods:{
    handleSubmit(){
      alert("Form Two Submit");
    }
  }
}
</script>

<style scoped>
</style>
