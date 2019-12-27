import UButton from "@/components/UButton";

const Plugin = {
  install(Vue, options = {}) {
    const { theme, outline } = options;
    if (theme) {
      UButton.props.theme.default = theme;
    }
    if (outline) {
      UButton.props.outline.default = outline;
    }

    Vue.component("u-button", UButton);
  }
};

export { UButton };
export default Plugin;
