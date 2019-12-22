import UButton from "@/components/UButton";

const Plugin = {
  install(Vue) {
    Vue.component("u-button", UButton);
  }
};

export { UButton };
export default Plugin;
