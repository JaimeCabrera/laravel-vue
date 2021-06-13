<template>
  <!-- mostrando el producto -->
  <div class="product bg-gray mb-5 shadow">
    <h3 class="product-title">{{ products.price }}</h3>
    todos los productsoi
    <img
      class="product-img img-fluid shadow"
      src="/img/product.png"
      alt=""
      width="176"
      height="88"
    />
    <div class="product-price">
      <div class="product-price-header">
        <div class="product-price-currency">$</div>
        <div class="product-price-value">22</div>
      </div>
      <h3 class="product-title mt-5">{{ product.title }}</h3>

      <!-- <div class="product-price-footer">per day</div> -->
    </div>
    <p class="product-text">
      {{ product.description }}
    </p>
    <a class="button button-primary" href="#">Ver detalles</a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: {}
    };
  },
  created() {
    this.getAllProducts();
  },
  methods: {
    getAllProducts() {
      this.loading = true;
      axios
        .get("/api/products")
        .then(res => {
          console.log(res);
          this.products = res.data.products;
          this.loading = false;
        })
        .catch(e => {
          console.log(e);
        });
    }
  }
};
</script>

<style></style>
