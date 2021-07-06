<template>
  <div class="">
    <nav-bar></nav-bar>
    <transition name="slide-fade">
      <router-view></router-view>
    </transition>
    <btn-float></btn-float>
    <footer-component></footer-component>
  </div>
</template>

<script>
import BtnFloat from "../components/BtnFloat.vue";
import FooterComponent from "../components/client/FooterComponent.vue";
import NavBar from "../components/NavBar.vue";
export default {
  components: { BtnFloat, FooterComponent, NavBar },
  /* TODO MOSTAR SP}OLO LOGIN O ADMIN+ */
  data() {
    return {
      auth: null
      // clase: "navbar-light bg-light bg-white",
      // text_name: "text-primary-brand",
      // logo: "logo_primary.svg"
    };
  },
  created() {
    // window.addEventListener("scroll", this.handleScroll);
    this.auth = localStorage.getItem("auth");
  }
};
</script>

<style scoped></style>
