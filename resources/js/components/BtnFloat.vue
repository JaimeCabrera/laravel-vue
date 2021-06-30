<template>
  <a
    class="btn-float d-flex justify-content-around"
    href="https://web.whatsapp.com/send?phone=593969572630&text=%C2%A1Hola!%20Necesito%20de%20su%20ayuda."
    target="_blank"
  >
    <i class="fab fa-whatsapp fa-2x mx-2"></i>
    ¿Cómo puedo, ayudarte?
  </a>
</template>

<script>
export default {};
</script>

<style scoped>
/* float button */
.btn-float {
  background-color: #9da7a1;
  color: white;
  font-weight: 500;
  border-radius: 25px;
  position: fixed;
  padding: 8px;
  bottom: 20px;
  right: 20px;
  cursor: pointer;
  transition: 0.4s ease-in;
}
.btn-float:hover {
  background-color: #71b85f;
  color: #ebebeb !important;
}
</style>
