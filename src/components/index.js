import UButton from "@/components/UButton";

const Plugin = {
  install(Vue, options = {}) {
    const { theme, outline, round } = options;

    if (theme) {
      UButton.props.theme.default = theme;
    }
    if (outline) {
      UButton.props.outline.default = outline;
    }
    if (round) {
      UButton.props.outline.round = round;
    }

    Vue.component(UButton.name, UButton);
  }
};

export { UButton };
export default Plugin;
