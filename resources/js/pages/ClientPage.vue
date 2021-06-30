<template>
  <div class="">
    <nav
      class="navbar navbar-expand-lg p-1  shadow-sm"
      :class="clase"
      v-on:scroll.passive="handleScroll"
    >
      <div class="container">
        <router-link class="navbar-brand" :to="{ name: 'index' }">
          <img src="/img/logo.png" alt=""
        /></router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="px-5 collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link
                class="nav-link active"
                aria-current="page"
                :to="{ name: 'index' }"
                >Inicio</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link"
                :to="{ name: 'client-products', params: { id: '1' } }"
                >Productos</router-link
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contacto</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="form-inline my-2 my-lg-0">
        <div class="d-flex">
          <ul class="nav">
            <li v-if="auth" class="nav-item">
              <router-link class="nav-link" aria-current="page" to="/login"
                ><i class="fas fa-sign-in-alt mx-1"></i>Login</router-link
              >
            </li>
            <li v-else class="nav-item">
              <router-link class="nav-link" aria-current="page" to="/admin"
                >Admin</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view></router-view>
    <btn-float></btn-float>
  </div>
</template>

<script>
import BtnFloat from "../components/BtnFloat.vue";
export default {
  components: { BtnFloat },
  /* TODO MOSTAR SP}OLO LOGIN O ADMIN+ */
  data() {
    return {
      auth: null,
      clase: "navbar-light bg-light bg-white"
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
    this.auth = localStorage.getItem("auth");
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll(e) {
      if (window.scrollY > 150) {
        this.clase = "bg-white-scrolled sticky-top";
      } else {
        this.clase = "navbar-light bg-light bg-white";
      }
      // Any code to be executed when the window is scrolled
    }
  }
};
</script>

<style scoped>
.nav-link {
  font-weight: 600;
  font-size: 16px;
  color: #31528f !important;
}
.nav-link:hover {
  transition: 0.5s ease;
  color: #31528f !important;

  display: block;
}
.nav-item .item-menu-text:hover {
  color: #2665d6;
}
.navbar-light {
  background-color: rgb(255, 250, 246);
}

body {
  min-height: 200vh;
}
.bg-white {
  transition: 0.8s ease-in-out;
  background: transparent;
}
.bg-white-scrolled {
  background: #2665d6;
}
.bg-white-scrolled .nav-link {
  font-weight: 600;
  font-size: 16px;
  color: #fbfdff !important;
}
</style>
