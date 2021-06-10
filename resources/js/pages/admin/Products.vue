<template>
  <div class="container-fluid mt-5">
    <!-- Page Heading -->
    <div class="d-sm-flex align-items-center justify-content-between mb-2">
      <h6 class="mb-0 text-gray-600">Modulo de productos</h6>
      <router-link
        v-bind:to="{ name: 'add-product' }"
        class="d-none d-sm-inline-block btn btn-primary shadow"
      >
        <i class="fas fa-plus fa-sm text-white-50 mx-1"></i> Agregar Nuevo
        Producto
      </router-link>
    </div>
    <!-- <div class="actions">
      <router-link class="btn btn-primary" v-bind:to="{ path: 'add' }">
        <span class="glyphicon glyphicon-plus"></span>
        Add product
      </router-link>
    </div> -->
    <div v-if="loading" class="row">
      Cargando...
    </div>
    <div v-else class="row">
      <div class="col-12">
        <div class="card mb-4 mt-5 shadow">
          <div class="card-header ">
            <h4 class="m-0 font-weight-bold text-primary">
              Productos
            </h4>
          </div>
          <div class="card-body">
            <table class="table table-bordered table-hover">
              <thead class="bg-gray-50 text-dark">
                <tr class="text-center">
                  <th>id</th>
                  <th>Nombre</th>
                  <th>Precio</th>
                  <th>Descripcion</th>
                  <th>Categoria</th>
                  <th>Imagen</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(product, index) in products" :key="index">
                  <td scope="row">{{ index + 1 }}</td>
                  <td>{{ product.name }}</td>
                  <td>{{ product.price }}</td>
                  <td>{{ product.description }}</td>
                  <td>{{ product.category.name }}</td>
                  <td>
                    <img
                      class="img-fluid img-thumb"
                      v-bind:src="'/storage/' + product.image"
                      alt="imagen del producto"
                    />
                  </td>
                  <td>
                    <button
                      class="btn btn-sm btn-outline-success mx-2 "
                      @click="edit(product.id)"
                    >
                      <i class="fas fa-edit    "></i>
                    </button>
                    <button
                      class="btn btn-sm btn-outline-danger "
                      @click="deleteProduct(product.id)"
                    >
                      <i class="fas fa-trash    "></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const token = localStorage.getItem("token");
export default {
  data() {
    return {
      products: [],
      loading: false
    };
  },
  mounted() {
    this.getAllProducts();
  },
  methods: {
    getAllProducts() {
      this.loading = true;
      axios
        .get("/api/products", { Headers: { Authorization: `Bearer ${token}` } })
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
.img-thumb {
  width: 100px;
  height: 100px;
  float: right;
}
</style>
