<template>
  <section class="slider pt-5">
    <div class="jumbotron jumbotron-fluid bg-transparent">
      <div class="container">
        <h1 class="page-title mt-2">SOLUCIONES AMBIENTALES</h1>
        <p class="lead mt-2 subtitle font-weight-bold">
          This is a modified jumbotron that occupies the entire horizontal space
          of its parent.
        </p>
        <a href="" class="btn btn-rounded rounded btn-lg mt-3 text-white"
          >VER PRODUCTOS</a
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
  color: #6caa5b;
}
.subtitle {
  color: #4c7c3f;
}
.slider {
  background-size: cover;
  background-image: url("/img/fondo_3.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
}
.btn-rounded {
  background-color: #5da349;
  border-radius: 25px 25px 25px 24px !important;
}
.btn-rounded:hover {
  transition: 0.9 ease;
  background-color: #486e3e;
}
.jumbotron {
  height: 60vh !important;
}
</style>
