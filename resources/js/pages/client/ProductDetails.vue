<template>
  <section class="bg-light ">
    <div class="slider-products pt-5">
      <div class="jumbotron jumbotron-fluid bg-transparent">
        <div class="container"></div>
      </div>
    </div>
    <div class="container my-5">
      <div class="row mt-5">
        <div class="col-5">
          <img
            :src="'/storage/' + product.image"
            alt="img-product"
            class="img-product img-fluid"
          />
        </div>
        <div class="col-7">
          <h2 class="">
            {{ product.name }}
          </h2>
          <p class="text-primary mt-3 precio">{{ product.price }}</p>
          <span class="b">Categoria {{ category.id }}</span>
          <h4>Descripcion</h4>
          <p class=" descripcion-producto">
            {{ product.description }}
          </p>
          <a class="btn btn-primary btn-lg mb-5" href="">solicitar producto</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      product: {},
      category: {}
    };
  },
  created() {
    const id = this.$route.params.id;
    this.getProductDetail(id);
  },
  methods: {
    getProductDetail(id) {
      axios
        .get(`/api/products/${id}`)
        .then(res => {
          this.product = res.data.product;
          this.category = res.data.category;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style>
.slider-products {
  height: 40vh;
  background-size: cover;
  background-image: url("/img/bg-products.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
}
.img-product {
  height: 480px;
  width: 430px;
}
.precio {
  font-size: 2rem;
  font-weight: 500;
}
.email {
  font-size: 1rem;
}
.descripcion-producto {
  font-size: 1rem;
  color: #5d6d7e;
}
</style>
