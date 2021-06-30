<template>
  <div class="row d-flex justify-content-center m-lg-4">
    <div class="col-6">
      <form class="card shadow border-2" @submit.prevent="handleLogin">
        <div class="card-header">
          Login
        </div>
        <div class="card-body">
          <div v-if="error" class="alert alert-danger" role="alert">
            {{ error }}
          </div>
          <div class="mb-4 mt-4">
            <input
              type="email"
              v-model="user.email"
              class="form-control"
              placeholder="Escribe tu email"
            />
          </div>
          <div class="mb-3">
            <input
              type="password"
              class="form-control"
              v-model="user.password"
              placeholder="Escribe tu contraseña"
            />
          </div>
          <div class="row p-3">
            <button class="btn btn-success text-white btn-block">
              Entrar
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: { email: "", password: "" },
      error: ""
    };
  },
  mounted() {
    // console.log("compopnent login montado");
  },
  methods: {
    handleLogin() {
      axios
        .post("/api/login", this.user)
        .then(res => {
          if (res.status == 200) {
            localStorage.setItem("token", res.data.access_token);
            localStorage.setItem("auth", true);
            this.$router.push({ name: "admin-products" });
          }
        })
        .catch(e => {
          this.error = e.response.data.message;
        });
    }
  }
};
</script>

<style></style>
