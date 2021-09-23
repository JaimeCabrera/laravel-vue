<template>
  <div class="container-fluid bg-primary pt-5 pb-5 mt-5">
    <div class="container text-white">
      <div class="row p-3 ">
        <div class="col-md-3  col-sm-12 mb-2 d-flex justify-content-center">
          <a href="#inicio">
            <img
              :src="'/img/logo_secondary.svg'"
              class="img-fluid"
              width="100px"
              height="100px"
              alt="logo soluciones ambientales"
            />
          </a>
        </div>
        <div class="col-md-3 text-white">
          <h2 class="font-weight-bold">Dirección</h2>
          <p class="text-lg mt-4">Samborondón</p>
          <p class="text-lg">Guayaquil, Ecuador</p>
        </div>
        <div class="col-md-3 col-sm-12 mb-3">
          <h3>Contacto</h3>
          <p class="text-lg mt-4">Email: solucionesambientalesec@email.com</p>
          <p class="text-lg">Telefono:+593969572630</p>
        </div>
        <div class="col-md-3 col-sm-12 mb-3">
          <h3>Redes Sociales</h3>
          <div class="row mt-4">
            <a
              class="text-white"
              href="https://www.facebook.com/Soluciones-Ambientales-EC-107173774381303"
              target="_blank"
            >
              <i class="fab fa-facebook-square fa-4x"></i>
            </a>
            <a
              class="text-white"
              href="https://api.whatsapp.com/send?phone=593969572630&text=%C2%A1Hola!%20Necesito%20de%20su%20ayuda."
              target="_blank"
            >
              <i class="fab fa-whatsapp-square fa-4x   "></i>
            </a>
          </div>
        </div>
      </div>
      <div class="row pt-4">
        <div class="col d-flex justify-content-center">
          <h5>
            Soluciones Ambientales EC &copy; <span id="copyright"> </span>
          </h5>
        </div>
        <span class="float-end"
          >Developed by
          <a href="https://github.com/JaimeCabrera" target="_blank">Jaime</a>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    document
      .getElementById("copyright")
      .appendChild(document.createTextNode(new Date().getFullYear()));
  }
};
</script>

<style></style>
