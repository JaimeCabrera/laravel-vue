<template>
  <section class="slider pt-5">
    <div class="jumbotron jumbotron-fluid bg-transparent">
      <div class="container">
        <h1 class="page-title mt-2">SOLUCIONES AMBIENTALES</h1>
        <p class="lead mt-2 subtitle font-weight-bold">
          EQUIPOS E INSUMOS PARA LABORATORIO.
        </p>
        <router-link
          :to="{ name: 'client-products' }"
          class="btn btn-rounded btn-primary rounded btn-lg mt-3 text-white"
          >VER PRODUCTOS</router-link
        >
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
.page-title {
  font-weight: 700;
  color: #2665d6;
}

.slider {
  background-size: cover;
  background-image: url("/img/fondo_3.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
}
.btn-rounded {
  background-color: #2665d6;
  border-radius: 25px 25px 25px 24px !important;
}
.btn-rounded:hover {
  transition: 0.9 ease;
  background-color: #2453aa;
}
.jumbotron {
  height: 60vh !important;
}
</style>
