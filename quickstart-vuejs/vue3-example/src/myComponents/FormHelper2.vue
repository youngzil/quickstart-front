<template>
  <div>
    <h1>请填写以下表单内容</h1>
    <form>

      <div id="form-header">
        <slot name="form-header"></slot>
      </div>
      <div id="form-fields">
        <slot name="form-fields"></slot>
      </div>
      <div id="form-controls">
        <slot name="form-controls"></slot>
      </div>
      
    </form>
  </div>
</template>

<script>
export default {
  name: "FormHelper"
}
</script>

<style scoped>
</style>