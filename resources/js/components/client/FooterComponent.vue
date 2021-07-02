<template>
  <div class="container-fluid bg-primary pt-5 pb-5 ">
    <div class="container text-white">
      <div class="row p-3 ">
        <div class="col-md-3">
          <img
            :src="'/img/logo_secondary.svg'"
            class="img-fluid float-center"
            width="100px"
            height="100px"
            alt="logo soluciones ambientales"
          />
        </div>
        <div class="col-md-3 text-white">
          <h2 class="font-weight-bold">Dirección</h2>
          <p class="text-lg mt-4">Samborondon</p>
          <p class="text-lg">Guayaquil, Ecuador</p>
        </div>
        <div class="col-md-3">
          <h3>Contacto</h3>
          <p class="text-lg mt-4">Email: solcuionesambientales@email.cxom</p>
          <p class="text-lg">Telefonos:</p>
        </div>
        <div class="col-md-3">
          <h3>Redes Sociales</h3>
          <div class="row mt-4">
            <a class="text-white" href="">
              <i class="fab fa-facebook-square fa-4x"></i>
            </a>
            <a class="text-white" href="">
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
          <a href="https://github.com/JaimeCabrera" target="_blank">Jaime C</a>
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
