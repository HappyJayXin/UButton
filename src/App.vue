<template>
  <div id="app">
    <u-button @click="sayHello">Hello</u-button>
    <u-button @click="sayHello" disabled>Hello</u-button>
  </div>
</template>

<script>
export default {
  name: "app",
  methods: {
    sayHello() {
      alert("Hello");
    }
  }
};
</script>

<style>
#app {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
