import Vue from "vue";
import VueRouter from "vue-router";

import ClientPage from "../pages/ClientPage.vue";
import AdminPage from "../pages/AdminPage.vue";

import IndexPage from "../pages/client/Index";
import LoginPage from "../pages/client/Login";

Vue.use(VueRouter);

export default new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            component: ClientPage,
            children: [
                { path: "", component: IndexPage },
                { path: "login", component: LoginPage }
            ]
        },
        {
            path: "/admin",
            component: AdminPage,
            name: "admin"
        }
    ]
});
