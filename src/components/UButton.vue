<template>
  <button @click="handleTap" :class="classObject" class="u-button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "UButton",
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classObject() {
      const btnDisabled = this.disabled ? "cursor-not-allowed" : "";
      const btnOpacity = this.disabled ? "opacity-25" : "";
      const classNamee = `${btnDisabled} ${btnOpacity}`;
      return classNamee;
    }
  },
  methods: {
    handleTap(evt) {
      this.$emit("click", evt);
    }
  }
};
</script>

<style scoped>
.u-button {
  background: #fff;
  color: #000;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border: 1px solid #000;
  border-radius: 0.2rem;
  cursor: pointer;
  transition: background 0.1s, color 0.1s;
}
.u-button:hover {
  color: #fff;
  background: #000;
}
.u-button:focus {
  outline: none;
}
</style>
