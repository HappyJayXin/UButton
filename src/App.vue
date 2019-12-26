<template>
  <div id="app" class="app">
    <header class="app__header">
      <h1>UButton</h1>
      <p>Vue simple Button style.</p>
      <div class="app__header__doc-bnt">
        <u-button href="https://github.com/HappyJayXin/UButton" target="_blank"
          >GitHub</u-button
        >
        <u-button
          href="https://www.npmjs.com/package/@happyjayxin/ubutton"
          target="_blank"
          >NPM</u-button
        >
      </div>
    </header>
    <main class="app--wrap">
      <section class="app__section">
        <h4>Default</h4>
        <u-button>Hello</u-button>
      </section>
      <section class="app__section">
        <h4>Click Event</h4>
        <u-button @click="sayHello" theme="#000">Hello</u-button>
      </section>
      <section class="app__section">
        <h4>Disabled</h4>
        <u-button @click="sayHello" disabled>Hello</u-button>
      </section>
    </main>
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

<style lang="scss" scoped>
@import "./assets/css/normalize.css";

.app {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &__header {
    width: 100%;
    text-align: center;
    padding-bottom: 2rem;
    border-bottom: 1px solid #000;

    &__doc-bnt {
      height: auto;
      > * {
        margin: 0 0.5rem;
      }
    }
  }

  &--wrap {
    display: flex;
    flex-wrap: wrap;
    width: 50%;
  }

  &__section {
    text-align: center;
    width: 33%;
    height: 110px;
  }
}
</style>
