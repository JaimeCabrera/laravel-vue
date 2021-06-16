<template>
  <div class="">
    <nav
      class="navbar navbar-expand-lg navbar-light bg-white p-2 sticky-top shadow"
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
              <router-link class="nav-link" :to="{ name: 'client-products' }"
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
  </div>
</template>

<script>
export default {
  /* TODO MOSTAR SP}OLO LOGIN O ADMIN+ */
  data() {
    return {
      auth: null
    };
  },
  created() {
    this.auth = localStorage.getItem("auth");
  },
  mounted() {}
};
</script>

<style>
.nav-link {
  font-weight: 600;
  font-size: 16px;
  color: #59884e !important; /**#71b85f */
}
.nav-link:hover {
  transition: 0.5s ease;
  color: #71b85f !important;

  display: block;
}
.nav-item .item-menu-text:hover {
  color: #508144;
}
.navbar-light {
  background-color: rgb(255, 250, 246);
}
</style>
