import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//styles
import "@/assets/sass/index.sass";

//dependencies
import { BootstrapVue } from "bootstrap-vue";

Vue.use(BootstrapVue);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
