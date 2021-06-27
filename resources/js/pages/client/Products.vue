<template>
  <!-- mostrando el producto -->
  <div>
    <section class="slider-products pt-5">
      <div class="jumbotron jumbotron-fluid bg-transparent">
        <div class="container"></div>
      </div>
    </section>
    <div class="container-fluid">
      <div class="row mt-5 ">
        <div class="col-sm-4 col-md-4 col-lg-2 ">
          <div class="btn-group-vertical shadow-sm">
            <button
              class="list-group-item list-group-item-action disabled bg-light categorias "
            >
              Categorias
            </button>
            <button
              v-for="(category, index) in categories"
              :key="index"
              @click="productsByCategory(category.id), (selected = index)"
              class="list-group-item list-group-item-action"
              v-bind:class="{ activo: isSelected(index) }"
            >
              {{ category.name }}
            </button>
          </div>
        </div>
        <div class="col-sm-8 col-md-8 col-lg-10 bg-products ">
          <div class="row p-2 mt-5 ">
            <div v-if="loading">
              <loader></loader>
            </div>
            <div
              v-else
              v-for="(product, index) in products"
              :key="index"
              class="col-sm-12 col-md-12 col-lg-4"
            >
              <product-item :product="product"></product-item>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SliderCcomponent from "../../components/client/SliderCcomponent.vue";
import Loader from "../../components/Loader.vue";
import ProductItem from "../../components/ProductItem.vue";
export default {
  components: { ProductItem, Loader, SliderCcomponent },
  data() {
    return {
      products: {},
      categories: {},
      activo: false,
      selected: 0,
      loading: true,
      category_id: null
    };
  },
  methods: {
    getAllCategories() {
      this.loading = true;
      axios
        .get("/api/categories")
        .then(res => {
          this.categories = res.data.categories;
          // console.log(this.categories[0].id);
          this.category_id = this.categories[0].id;
          this.getCategoryProducts(this.category_id);
          this.loading = false;
        })
        .catch(e => {
          console.log(e);
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
    },

    isSelected(i) {
      return i === this.selected;
    },
    productsByCategory(category_id) {
      this.$router.push(`/products/category/${category_id}`).catch(err => {});
      this.category_id = category_id;
      this.getCategoryProducts(this.category_id);
      // this.active = true;
    }
  },
  created() {
    this.getAllCategories();
  },
  mounted() {}
};
</script>

<style scoped>
/* $primary: #71b85f;
$secondary: #2c343b; */
.activo {
  border-left: 3px solid #2665d6 !important;
  color: #2665d6 !important;
  font-weight: 700 !important;
}
.list-group-item:hover {
  color: #2665d6 !important;
  font-weight: bold;
}
.slider-products {
  height: 35vh;
  background-size: cover;
  background-image: url("/img/bg-products.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
}
.categorias {
  font-weight: 700;
}
</style>
