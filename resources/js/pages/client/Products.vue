<template>
  <!-- mostrando el producto -->
  <div class="container-fluid mt-5 mb-5">
    <div class="row">
      <div class="col-sm-4 col-md-4 col-lg-2">
        <div
          v-for="(category, index) in categories"
          :key="index"
          class="list-group"
        >
          <button class="list-group-item list-group-item-action">
            {{ category.name }}
          </button>
        </div>
      </div>
      <div class="col-sm-8 col-md-8 col-lg-10 card bg-light shadow-sm">
        <div class="row p-2 mt-5">
          <div
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
</template>

<script>
import ProductItem from "../../components/ProductItem.vue";
export default {
  components: { ProductItem },
  data() {
    return {
      products: {},
      categories: {}
    };
  },
  created() {
    this.getAllCategories();
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
    },
    getAllCategories() {
      this.loading = true;
      axios
        .get("/api/categories")
        .then(res => {
          console.log(res);
          this.categories = res.data.categories;
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
