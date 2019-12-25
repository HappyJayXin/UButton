<template>
  <button
    @click="handleTap"
    :disabled="disabled"
    :class="classObject"
    class="u-button"
  >
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
      const btnDisabled = this.disabled ? "disabled" : "";
      const className = `${btnDisabled}`;
      return className;
    }
  },
  methods: {
    handleTap(evt) {
      this.$emit("click", evt);
    }
  }
};
</script>

<style scoped lang="scss">
.u-button {
  background: #fff;
  color: #000;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border: 1px solid #000;
  border-radius: 0.2rem;
  cursor: pointer;
  transition: background 0.1s, color 0.1s;

  &:hover {
    color: #fff;
    background: #000;
  }

  &:focus {
    outline: none;
  }

  &.disabled {
    cursor: not-allowed;
    opacity: 0.8;
  }
}
</style>
