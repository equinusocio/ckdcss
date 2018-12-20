import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueHead from "vue-head";

Vue.config.productionTip = false;

// Vue plugins
Vue.use(VueHead);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
