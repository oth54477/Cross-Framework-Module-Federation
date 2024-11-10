<template>
  <div class="vue-container" style="padding: 20px; border: 2px solid green; margin: 10px">
    <h1>Vue Remote Application</h1>
    <p>This is a Vue remote app component</p>
    <button @click="handleClick">Click Vue Remote Button</button>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    handleClick() {
      alert("Hello from Vue Remote!");
    }
  }
};
</script>

<style scoped>
.vue-container {
  font-family: Arial, sans-serif;
}
</style>
