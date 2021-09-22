<template>
  <div>
    <div class="container-fluid pt-5 mt-0">
      <div class="row">
        <div
          class="col-12 d-flex"
          data-aos="zoom-in-down"
          data-aos-anchor-placement="center"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          <h2 class="subtitle-p mb-5 mx-auto">Nuestros Productos</h2>
        </div>
      </div>
      <div class="row d-flex flex-wrap mt-3">
        <div
          v-for="(product, index) in products"
          :key="index"
          class=" col-sm-12 col-md-4 col-lg-4"
        >
          <product-item :product="product"></product-item>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductItem from "../ProductItem.vue";
// import ProductComponent from "./ProductComponent.vue";
export default {
  components: { ProductItem },
  data() {
    return {
      products: {}
    };
  },
  mounted() {
    this.getProducts();
  },
  methods: {
    getProducts() {
      axios.get("api/products").then(res => {
        this.products = res.data.products.data;
        // console.log(res.data);
      });
    }
  }
};
</script>

<style></style>
