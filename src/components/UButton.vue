<template>
  <a
    v-if="href"
    @click="handleTap"
    :href="href"
    :style="{ '--theme': getTheme }"
    :target="target"
    :class="classObject"
    class="u-button"
  >
    <loading v-if="loading" :outline="outline"></loading>
    <slot></slot>
  </a>
  <button
    v-else
    @click="handleTap"
    :disabled="disabled"
    :style="{ '--theme': getTheme }"
    :class="classObject"
    class="u-button"
  >
    <loading v-if="loading" :outline="outline"></loading>
    <slot></slot>
  </button>
</template>

<script>
import hexToRgb from "@/helpers/hexToRgb";
import Loading from "@/components/Loading";

export default {
  name: "u-button",
  components: { Loading },
  props: {
    theme: {
      type: String,
      default: "#000000",
      validator: hex => {
        return /^#([0-9a-f]{3}){1,2}$/i.test(hex);
      }
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
      validator: target => {
        return ["_blank", "_self", "_parent", "_top"].indexOf(target) !== -1;
      }
    },
    outline: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    round: {
      type: String,
      default: "0",
      validator: value => {
        return ["0", "1", "2", "3"].indexOf(value) !== -1;
      }
    }
  },
  computed: {
    classObject() {
      const btnDisabled = this.disabled ? "disabled opacity" : "";
      const btnOutline = this.outline ? "outline" : "";
      const btnLoading = this.loading ? "opacity disabled" : "";
      const btnRound = this.round ? `round${this.round}` : "";

      const className = `${btnDisabled} ${btnOutline} ${btnLoading} ${btnRound}`;
      return className;
    },
    getTheme() {
      return hexToRgb(this.theme);
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
  background: rgba($theme, 1);
  font-weight: 500;
  padding: 0.5rem 1rem;
  border: 1px solid rgba($theme, 1);
  cursor: pointer;
  text-decoration: none;
  transition: background 0.2s, color 0.2s;

  &:hover {
    background: rgba($theme, 0.8);
  }

  &:focus {
    outline: none;
  }

  &.disabled {
    pointer-events: none;
    cursor: not-allowed;
  }

  &.opacity {
    opacity: 0.3;
  }

  &.round1 {
    border-radius: 0.2rem;
  }

  &.round2 {
    border-radius: 0.6rem;
  }

  &.round3 {
    border-radius: 1.5rem;
  }

  &.outline {
    background: transparent;
    color: rgba($theme, 1);
    &:hover {
      color: #ffffff;
      background: rgba($theme, 1);
    }
  }
}
</style>
