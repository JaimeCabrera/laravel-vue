<template>
  <div>
    <nav-bar></nav-bar>
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
          <div class="col-md-5 col-sm-12">
            <img
              :src="'/storage/' + product.image"
              alt="img-product"
              class="img-product img-fluid"
            />
          </div>
          <div class="col-md-7 col-sm-12">
            <p class="text-black-50 mt-3 precio">
              Precio: ${{ product.price }}
            </p>
            <span class="b"
              >Categoria <a href="">{{ category.name }}</a>
            </span>
            <h4>Información</h4>
            <p
              v-html="product.short_description"
              class=" descripcion-producto"
            ></p>
            <a class="btn btn-outline-primary mb-5 text-uppercase" href=""
              >Solicitar Cotización</a
            >

            <hr />
            <p class="text-black-50">Contactanos:</p>

            <social-links-component></social-links-component>
          </div>
        </div>
        <div class="row pt-4">
          <div class="col-12">
            <div class="accordion" id="descripcion">
              <div class="accordion-item ">
                <h2 class="accordion-header" id="headingOne">
                  <button
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Descripcion del producto
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  class="accordion-collapse collapse "
                  aria-labelledby="headingOne"
                  data-bs-parent="#descripcion"
                >
                  <div class="accordion-body">
                    <p
                      v-html="product.description"
                      class=" descripcion-producto"
                    ></p>
                  </div>
                </div>
              </div>
            </div>
            <!-- <h4>Descripcion</h4> -->
          </div>
        </div>
      </div>
    </section>
    <div class="container">
      <div class="row d-flex">
        <h3 class="text-primary justify-content-center mb-3">
          Productos Relacionados:
        </h3>
        <hr />
        <div
          v-for="(product, index) in products"
          :key="index"
          class="col-md-3 mt-5"
        >
          <product-item :product="product"></product-item>
        </div>
      </div>
    </div>
    <footer-component></footer-component>
  </div>
</template>

<script>
import FooterComponent from "../../components/client/FooterComponent.vue";
import SocialLinksComponent from "../../components/client/SocialLinksComponent.vue";
import NavBar from "../../components/NavBar.vue";
import ProductItem from "../../components/ProductItem.vue";
import ClientPage from "../ClientPage.vue";
export default {
  components: {
    SocialLinksComponent,
    ClientPage,
    NavBar,
    FooterComponent,
    ProductItem
  },
  data() {
    return {
      product: {},
      category: {},
      products: {},
      category_id: ""
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
    const id = this.$route.params.id;
    this.getProductDetail(id);
  },
  mounted() {},
  methods: {
    getProductDetail(id) {
      axios
        .get(`/api/products/${id}`)
        .then(res => {
          this.product = res.data.product;
          this.category = res.data.category[0];
          this.category_id = this.category.id;
          this.getCategoryProducts(this.category_id);
        })
        .catch(err => {
          // console.log(err);
        });
    },
    getCategoryProducts(id) {
      this.loading = true;
      axios
        .get("/api/products-category", { params: { id } })
        .then(res => {
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
