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
          outline
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
        <u-button @click="sayHello" theme="#000000">Hello</u-button>
      </section>
      <section class="app__section">
        <h4>Disabled</h4>
        <u-button @click="sayHello" disabled>Hello</u-button>
      </section>
      <section class="app__section">
        <h4>Link</h4>
        <u-button href="https://github.com/HappyJayXin/UButton" target="_blank"
          >GitHub</u-button
        >
      </section>
      <section class="app__section">
        <h4>Outline</h4>
        <u-button outline>GitHub</u-button>
      </section>
      <section class="app__section">
        <h4>Loading</h4>
        <u-button :loading="isloading" @click="loadHandle" outline>
          <template v-if="isloading">Loading...</template>
          <template v-else>Click Me</template>
        </u-button>
      </section>
      <section class="app__section">
        <h4>Theme - orange</h4>
        <u-button theme="#e58e26">GitHub</u-button>
      </section>
      <section class="app__section">
        <h4>Theme - blue</h4>
        <u-button theme="#0c2461">GitHub</u-button>
      </section>
      <section class="app__section">
        <h4>Theme - green</h4>
        <u-button theme="#079992">GitHub</u-button>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: "app",
  data: () => ({
    isloading: false
  }),
  methods: {
    sayHello() {
      alert("Hello");
    },
    loadHandle() {
      this.isloading = true;
      setTimeout(() => (this.isloading = false), 2000);
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
