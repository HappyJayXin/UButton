<template>
  <div id="app">
    <u-button @click="sayHello">Hello</u-button>
  </div>
</template>

<script>
import UButton from "@/components/UButton";

export default {
  name: "app",
  components: { UButton },
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
