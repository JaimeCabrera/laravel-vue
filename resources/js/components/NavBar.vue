<template>
  <nav
    class="navbar navbar-expand-lg p-3  shadow-sm"
    :class="clase"
    v-on:scroll.passive="handleScroll"
  >
    <div class="container">
      <div class="row">
        <div class="col-md-7 col-sm-4">
          <router-link class="navbar-brand" :to="{ name: 'index' }">
            <img
              :src="'/img/' + logo"
              class="img"
              width="80"
              height="60"
              alt="logo soluciones ambientales"
            />
            <span class="text-uppercase" :class="text_name"
              >Soluciones Ambientales</span
            >
          </router-link>
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
        </div>
        <div class="col-md-5 mt-2">
          <div
            class="px-5 collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <router-link
                  class="nav-link mx-2"
                  aria-current="page"
                  :to="{ name: 'index' }"
                  >Inicio</router-link
                >
              </li>
              <li class="nav-item">
                <router-link
                  class="nav-link mx-2"
                  :to="{
                    name: 'client-products',
                    params: { id: '1' }
                  }"
                  >Productos</router-link
                >
              </li>
              <li class="nav-item">
                <router-link
                  class="nav-link mx-2"
                  :to="{
                    name: 'index'
                  }"
                  >Contacto</router-link
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      clase: "navbar-light bg-light bg-white",
      text_name: "text-primary-brand",
      logo: "logo_primary.svg"
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll(e) {
      if (window.scrollY > 150) {
        this.clase = "bg-white-scrolled sticky-top";
        this.text_name = "text-white";
        this.logo = "logo_secondary.svg";
      } else {
        this.clase = "navbar-light bg-light bg-white";
        this.logo = "logo_primary.svg";
        this.text_name = "text-primary-brand";
      }
      // Any code to be executed when the window is scrolled
    }
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style scoped>
.nav-link {
  font-weight: 600;
  font-size: 16px;
  color: #2e57a5 !important;
  transition: 0.9s ease;
}
.nav-link:hover {
  border-radius: 5px;
  background-color: #2b4c8f;
  color: #e6e6e6 !important;

  display: inline-block;
}
.is-active {
  border-radius: 5px;
  background-color: #2b4c8f;
  color: #e6e6e6 !important;
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
.text-primary-brand {
  font-weight: 800;
  color: #256195;
}
</style>
