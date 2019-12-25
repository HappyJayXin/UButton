import Vue from "vue";
import App from "./App.vue";
import UButton from "./components/index";

Vue.config.productionTip = false;
Vue.use(UButton, { theme: "#ff9234" });

new Vue({
  render: h => h(App)
}).$mount("#app");
