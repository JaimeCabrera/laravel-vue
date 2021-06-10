<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">Navbar</router-link>
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
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a class="dropdown-item" href="#">Action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">Another action</a>
                </li>
                <li><hr class="dropdown-divider" /></li>
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a
                class="nav-link disabled"
                href="#"
                tabindex="-1"
                aria-disabled="true"
                >Disabled</a
              >
            </li>
          </ul>
          <div class="d-flex">
            <ul class="nav">
              <li v-if="auth" class="nav-item">
                <button class="nav-link " @click="handleLogout">logout</button>
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
