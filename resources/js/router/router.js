import Vue from "vue";
import VueRouter from "vue-router";

/* client */
import IndexPage from "../pages/client/Index";
import ClientPage from "../pages/ClientPage.vue";
import LoginPage from "../pages/client/Login";
import ClientProducts from "../pages/client/Products";
import ContactPage from "../components/client/ContactComponent";
/* admin */
import AdminPage from "../pages/AdminPage.vue";
import Products from "../pages/admin/Products";
import Categories from "../pages/admin/Categories";
import AddProduct from "../pages/admin/AddProduct";
import ProductDetails from "../pages/client/ProductDetails";

Vue.use(VueRouter);

export default new VueRouter({
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  mode: "history",
  routes: [
    /* client routes */
    {
      path: "/",
      component: ClientPage,
      children: [
        {
          path: "",
          component: IndexPage,
          name: "index"
        },
        {
          path: "login",
          component: LoginPage
        },
        {
          path: "/products/category/:id",
          component: ClientProducts,
          name: "client-products"
        },
        {
          path: "/products/:id/details",
          component: ProductDetails,
          name: "client-product-details"
        },
        {
          path: "/contact",
          component: ContactPage,
          name: "contact-page"
        }
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
          path: "/admin/products/add",
          component: AddProduct,
          name: "add-product"
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
