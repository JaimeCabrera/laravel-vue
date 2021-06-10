<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
      <div class="container">
        <router-link
          class="navbar-brand text-success"
          :to="{ name: 'admin-products' }"
          >Soluciones | Ambientales</router-link
        >
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
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 px-5">
            <li class="nav-item">
              <router-link
                class="nav-link active"
                :to="{ name: 'admin-products' }"
                >Productos</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'admin-categories' }"
                >Categorias</router-link
              >
            </li>
          </ul>
          <div class="d-flex">
            <ul class="nav">
              <li v-if="auth" class="nav-item">
                <a class="nav-link" href="" @click="handleLogout"
                  ><i class="fas fa-sign-out-alt text-white-50 mx-2"></i
                  >Salir</a
                >
              </li>
              <li class="nav-item">
                <router-link class="nav-link " aria-current="page" to="/"
                  >Index</router-link
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    <!-- admin page -->
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      auth: null
    };
  },
  created() {
    this.getUser();
  },
  methods: {
    getUser() {
      const token = localStorage.getItem("token");
      if (!token) {
        localStorage.setItem("auth", false);
        return this.$router.push("/login");
      } else {
        this.auth = localStorage.getItem("auth");
      }
      axios
        .get("/api/user", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then(res => {
          if (!res.data.id) {
            localStorage.setItem("auth", false);
            this.$router.push("/login");
          }
        })
        .catch(e => {
          localStorage.setItem("auth", false);
          this.$router.push("/login");
        });
    },
    handleLogout() {
      const token = localStorage.getItem("token");
      axios
        .post("/api/logout", {
          headers: { Authorization: `Bearer ${token}` }
        })
        .then(res => {
          console.log(res);
          localStorage.setItem("auth", false);
          localStorage.removeItem("token");
          this.$router.push("/");
        });
    }
  }
};
</script>

<style></style>
