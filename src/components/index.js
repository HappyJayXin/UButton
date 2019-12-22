import UButton from "@/components/UButton";

export function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component("u-button", UButton);
}

const plugin = {
  install
};

let GlobalVue = null;
if (typeof window !== "undefined") {
  GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

export default UButton;
