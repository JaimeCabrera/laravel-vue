<template>
  <section class="container mt-5 mx-auto ">
    <div class="d-flex flex-column mb-5">
      <div class="col-3 d-flex justify-content-center services mx-auto">
        <h2 class="subtitle">Servicios</h2>
      </div>
      <div class="col-9 mx-auto text-center mt-3">
        <p>
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
          aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
          quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
          fugiat sit in iste officiis commodi quidem hic quas
        </p>
      </div>
    </div>

    <div class="row mb-5">
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
              bioquímicos, biología molecular, reactivos para análisis de aguas
              y suelos
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
  </section>
</template>

<script>
export default {};
</script>

<style>
.services {
  display: block;
  border-bottom: 2px solid #385a2f;
}

.card-service {
  padding: 40px;
  text-align: center;
  border: 1px solid #cfe7c8;
}
.card-service:hover {
  cursor: pointer;
  background-color: #6caa5b;
  color: aliceblue;
}
.service-title {
  font-size: 16px;
  font-weight: 700;
  color: #6caa5b;
}
.service-title:hover {
  color: wheat;
}
</style>
