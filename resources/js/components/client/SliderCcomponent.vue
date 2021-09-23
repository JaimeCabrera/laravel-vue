<template>
  <section class="slider pt-5" id="inicio">
    <div class="jumbotron jumbotron-fluid bg-transparent">
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-sm-12 p-4 bg-opacity mt-5 slide-right ">
            <h1 class="page-title mt-2 ">SOLUCIONES AMBIENTALES</h1>
            <p class="lead mt-2 subtitle text-white font-weight-bold">
              EQUIPOS E INSUMOS PARA LABORATORIO.
            </p>
            <router-link
              :to="{ name: 'client-products', params: { id: '1' } }"
              class="btn btn-rounded btn-primary rounded btn-lg mt-3 text-white"
              >VER PRODUCTOS</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
.slide-right {
  animation: slide-right 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s both;
}
@media screen and (min-width: 768px) {
  @keyframes slide-right {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(0vh);
    }
  }
}

@media screen and (min-width: 1024px) {
  @keyframes slide-right {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(5vh);
    }
  }
}
.page-title {
  font-weight: 700;
  /* color: #2665d6; */
  color: #ececec;
}
.bg-opacity {
  border-radius: 5px;
  background-color: rgba(24, 44, 100, 0.171);
}

.slider {
  background-size: cover;
  background-image: url("/img/banner1.jpg");
  background-repeat: no-repeat;
  height: 60vh;
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
