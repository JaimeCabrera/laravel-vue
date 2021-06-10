import Vue from "vue";
import VueRouter from "vue-router";

/* client */
import IndexPage from "../pages/client/Index";
import ClientPage from "../pages/ClientPage.vue";
import LoginPage from "../pages/client/Login";
/* admin */
import AdminPage from "../pages/AdminPage.vue";
import Products from "../pages/admin/Products";
import Categories from "../pages/admin/Categories";
Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    /* client routes */
    {
      path: "/",
      component: ClientPage,
      children: [
        { path: "", component: IndexPage },
        { path: "login", component: LoginPage }
      ]
    },
    /* admin routes */
    {
      path: "/admin",
      component: AdminPage,
      children: [
        {
          path: "",
          component: Products,
          name: "admin-products"
        },
        {
          path: "/admin/categories",
          component: Categories,
          name: "admin-categories"
        }
      ]
    }
  ]
});
