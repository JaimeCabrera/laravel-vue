import Vue from "vue";

import router from "./router/router";
import App from "./App.vue";
import AOS from "aos";
import "aos/dist/aos.css";

require("./bootstrap");

// window.Vue = require('vue').default;

// Vue.component(
//     "example-component",
//     require("./components/ExampleComponent.vue").default
// );

const app = new Vue({
  created() {
    AOS.init();
  },
  router,
  el: "#app",
  components: { App }
});
