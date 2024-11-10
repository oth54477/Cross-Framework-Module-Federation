<template>
  <div class="vue-container">
    <h2>Vue Remote App</h2>
    <p>This is a Vue 3 component loaded remotely</p>
    <button @click="count++">Count is: {{ count }}</button>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      count: 0
    }
  }
}
</script>

<style scoped>
.vue-container {
  border: 2px solid green;
  padding: 20px;
  margin: 10px;
  font-family: Arial, sans-serif;
}
</style>
