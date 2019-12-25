import Vue from "vue";
import App from "./App.vue";
import UButton from "./components/index";

Vue.config.productionTip = false;
Vue.use(UButton);

new Vue({
  render: h => h(App)
}).$mount("#app");
