<template>
  <section class="bg-light ">
    <div class="slider-products pt-5">
      <div class="jumbotron jumbotron-fluid bg-transparent">
        <div class="container"></div>
      </div>
    </div>
    <div class="container my-3 p-4  mb-5">
      <div class="row">
        <div class="col-12">
          <h2 class="text-primary">
            {{ product.name }}
          </h2>
          <hr class="text-primary" />
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-5">
          <img
            :src="'/storage/' + product.image"
            alt="img-product"
            class="img-product img-fluid"
          />
        </div>
        <div class="col-7">
          <p class="text-black-50 mt-3 precio">Precio: ${{ product.price }}</p>
          <span class="b">Categoria {{ category[0].name }}</span>
          <h4>Descripcion</h4>
          <p class=" descripcion-producto">
            {{ product.description }}
          </p>
          <a class="btn btn-primary btn-lg mb-5 text-uppercase" href=""
            >Solicitar Cotización</a
          >

          <hr />
          <p class="text-black-50">Contactanos:</p>

          <social-links-component></social-links-component>
        </div>
      </div>
      <div class="row mb-5">
        <div class="col-12 mb-5 mt-5">
          <p>
            <button
              class="btn btn-primary"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseExample"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              Descripción
            </button>
          </p>
          <div class="collapse" id="collapseExample">
            <div class="card card-body">
              Some placeholder content for the collapse component. This panel is
              hidden by default but revealed when the user activates the
              relevant trigger.
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SocialLinksComponent from "../../components/client/SocialLinksComponent.vue";
export default {
  components: { SocialLinksComponent },
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
