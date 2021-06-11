<template>
  <div>
    <div class="container-fluid bg-green pt-5 mt-0">
      <div class="row">
        <div class="col-12 d-flex">
          <h2 class="subtitle-p mb-5 mx-auto">Productos</h2>
        </div>
      </div>
      <div class="row d-flex flex-wrap mt-3">
        <div class="col-md-3">
          <product-component></product-component>
        </div>
        <div class="col-md-3">
          <product-component></product-component>
        </div>
        <div class="col-md-3">
          <product-component></product-component>
        </div>
        <div class="col-md-3">
          <product-component></product-component>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductComponent from "./ProductComponent.vue";
export default {
  components: { ProductComponent }
};
</script>

<style></style>
