<template>
  <a
    v-if="href"
    @click="handleTap"
    :href="href"
    :style="{ '--theme': theme }"
    :target="target"
    :class="classObject"
    class="u-button"
  >
    <slot></slot>
  </a>
  <button
    v-else
    @click="handleTap"
    :disabled="disabled"
    :style="{ '--theme': theme }"
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
    theme: {
      type: String,
      default: "#000"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    href: {
      type: String
    },
    target: {
      type: String,
      default: "_self",
      validator(value) {
        return ["_blank", "_self", "_parent", "_top"].indexOf(value) !== -1;
      }
    },
    outline: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classObject() {
      const btnDisabled = this.disabled ? "disabled" : "";
      const btnOutline = this.outline ? "outline" : "";

      const className = `${btnDisabled} ${btnOutline}`;
      return className;
    }
  },
  methods: {
    handleTap(evt) {
      if (this.disabled) return false;
      this.$emit("click", evt);
    }
  }
};
</script>

<style scoped lang="scss">
$theme: var(--theme);

// Reset button
button {
  border: none;
  margin: 0;
  padding: 0;
  width: auto;
  overflow: visible;
  background: transparent;
  color: inherit;
  font: inherit;
  line-height: normal;
  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;
  -webkit-appearance: none;
}

.u-button {
  color: #fff;
  background: $theme;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border: 1px solid $theme;
  border-radius: 0.2rem;
  cursor: pointer;
  text-decoration: none;
  transition: background 0.1s, color 0.1s;

  &:hover {
    background: #fff;
    color: $theme;
  }

  &:focus {
    outline: none;
  }

  &.disabled {
    pointer-events: none;
    cursor: not-allowed;
    opacity: 0.5;
  }

  &.outline {
    background: transparent;
    color: $theme;
    &:hover {
      color: #fff;
      background: $theme;
    }
  }
}
</style>
