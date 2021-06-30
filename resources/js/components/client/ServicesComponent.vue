<template>
  <section class="container-fluid py-5 mx-auto bg-white ">
    <div class="container">
      <div
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        data-aos-anchor-placement="center"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-mirror="true"
        data-aos-once="false"
      >
        <div class="col-3 d-flex justify-content-center services mx-auto">
          <h2 class="subtitle">Servicios</h2>
        </div>
        <div class="col-9 mx-auto text-center mt-3">
          <p class="services-text">
            Soluciones Ambientales pone a su disposición las mejores marcas del
            mundo para garantizarle la mejor calidad, servicio y garantía. Somos
            representantes y contamos con el personal debidamente capacitado
          </p>
        </div>
      </div>

      <div
        class="row mb-5"
        data-aos="fade-up"
        data-aos-anchor-placement="center"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
      >
        <div class="col-md-4 mb-4">
          <div class="card-service card shadow">
            <div class="card-body">
              <img src="/img/ordenador_2.png" class="img-fluid" alt="" />
              <h4 class="service-title mt-3 text-center">
                EQUIPOS DE LABORATORIO
              </h4>
              <p class="card-text">
                Contamos con productos para entrega inmediata en Ecuador, lo que
                nos convierte en el mayor proveedor nacional de equipos para
                laboratorio
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-4">
          <div class="card-service card shadow">
            <div class="card-body">
              <img src="/img/quimica.png" class="img-fluid" alt="" />
              <h4 class="card-title service-title mt-3">REACTIVOS QUIMICOS</h4>
              <p class="card-text">
                Disponemos de Reactivos analíticos, productos para fines
                bioquímicos, biología molecular, reactivos para análisis de
                aguas y suelos
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-4">
          <div class="card-service card shadow">
            <div class="card-body">
              <img src="/img/expediente.png" class="img-fluid" alt="" />
              <h4 class="service-title mt-3">ENVIOS A TODO EL PAIS</h4>
              <p class="card-text">
                Realizamos envíos de todos nuestros productos a nivel nacional,
                tomando en cuenta todos los estándares de calidad .
              </p>
            </div>
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
.services {
  display: block;
  border-bottom: 2px solid #2665d6;
}
.card-text {
  font-weight: 600;
  color: #566573;
}

.card-service {
  padding: 40px;
  text-align: center;
  border: 1px solid #a3c1da;
}
.card-service:hover {
  cursor: pointer;
  background-color: #7ba2eb;
  color: aliceblue;
}
.service-title {
  font-size: 16px;
  font-weight: 700;
  color: #2665d6;
}
.services-text {
  font-weight: 600;
  color: #808b96;
  font-size: 1.1rem;
}
</style>
