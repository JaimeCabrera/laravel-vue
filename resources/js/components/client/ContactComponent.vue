<template>
  <section
    class="container-fluid   py-5 bg-white "
    data-aos="zoom-in"
    data-aos-anchor-placement="center"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
  >
    <div class="row">
      <div class="col-12 d-flex justify-content-center">
        <h2 class="subtitle">Contactenos</h2>
      </div>
    </div>
    <div class="col-md-10 mx-auto mt-4">
      <div class="row shadow border border-bottom-success pt-5">
        <div class="col-md-5 col-sm-12">
          <h3 class="text-center">Informacion de contacto</h3>
          <div class="row mt-3">
            <div class="col-3 d-flex flex-column ">
              <i
                class="fas fa-phone-square-alt fa-3x text-secondary mx-auto mt-3"
              ></i>
              <i
                class="fas fa-envelope-square fa-3x text-secondary mx-auto mt-3"
              ></i>
              <i
                class="fas fa-map-marker-alt fa-3x text-secondary mx-auto mt-3"
              ></i>
            </div>
            <div class="col-9 d-flex flex-column">
              <span class="phone-number mx-2 mt-3">+593 969572630</span>
              <span class="phone-number mx-2 mt-3">sl@solucionesam.com</span>
              <span class="phone-number mx-2 mt-3 mb-5"
                >Guayaquil, Ecuador</span
              >
            </div>
          </div>
        </div>
        <div class="col-md-7 col-sm-12">
          <form>
            <div class="row">
              <div class="col">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Escriba su nombre"
                />
              </div>
              <div class="col">
                <input
                  type="email"
                  class="form-control"
                  placeholder="Escriba su Email"
                />
              </div>
            </div>
            <div class="row mt-3">
              <div class="col">
                <textarea
                  class="form-control"
                  name=""
                  placeholder="Escriba su mensaje"
                  cols="20"
                  rows="5"
                ></textarea>
              </div>
            </div>
            <a
              href="mailto:solucionesambientalesec.com"
              class="btn btn-outline-primary btn-lg mt-3 mb-5"
              >Enviar Mensaje</a
            >
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style></style>
