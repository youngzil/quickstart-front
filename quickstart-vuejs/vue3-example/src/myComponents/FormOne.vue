<template>
  <div>
    <form-helper>

      <div slot="form-header">
        <h3>Form One</h3>
        <p>填写以下内容</p>
      </div>
      <div slot="form-fields">
        <input type="text" placeholder="name" required/>
        <label>随便说点啥</label>
        <textarea></textarea>
      </div>
      <div slot="form-controls">
        <button @click="handleSubmit">发送</button>
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
      alert("Form One Submit");
    }
  }
}
</script>

<style scoped>
</style>