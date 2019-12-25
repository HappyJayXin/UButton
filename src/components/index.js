import UButton from "@/components/UButton";

const Plugin = {
  install(Vue, options = {}) {
    UButton.props.theme.default = options.theme;
    Vue.component("u-button", UButton);
  }
};

export { UButton };
export default Plugin;
