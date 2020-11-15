<template>
  <div>
    <slot name="title"></slot>
    <h1>这个是FormHelper中的文本</h1>
    <slot name="text"></slot>
  </div>
</template>

<script>
export default {
  name: "FormHelper"
}
</script>

<style scoped>
</style>