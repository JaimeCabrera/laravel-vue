import Vue from "vue";

import router from "./router/router";
import App from "./App.vue";

require("./bootstrap");

// window.Vue = require('vue').default;

// Vue.component(
//     "example-component",
//     require("./components/ExampleComponent.vue").default
// );

const app = new Vue({
    router,
    el: "#app",
    components: { App }
});
