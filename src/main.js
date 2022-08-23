import Vue from "vue";
import { createPinia, PiniaVuePlugin } from "pinia";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'


import App from "./App.vue";
import router from "./router";

import PrimeVue from "primevue/config";

// import Button from "primevue/button";
import InputText from "primevue/inputtext";
// import Dropdown from "primevue/dropdown";

import "primevue/resources/themes/saga-blue/theme.css"; //theme
import "primevue/resources/primevue.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import "./assets/main.css";

Vue.use(PiniaVuePlugin);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.component("InputText", InputText);
// Vue.component(`Dropdown`, Dropdown);
// Vue.component(`Button`, Button);

Vue.use(PrimeVue);

new Vue({
  router,
  pinia: createPinia(),
  PrimeVue,
  render: (h) => h(App),
}).$mount("#app");
