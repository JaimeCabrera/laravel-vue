<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-12">
        <div class="card shadow">
          <div class="card-header">
            <h6 v-if="editMode" class="m-2 font-weight-bold text-primary">
              Editando producto:
              {{ product.name }}
            </h6>
            <h6 v-else class="m-2 font-weight-bold text-primary">
              Agregar Nuevo Producto
            </h6>
          </div>
          <div class="card-body p-4">
            <form enctype="multipart/form-data">
              <div class="row mb-4">
                <div class="col">
                  <div class="form-group ">
                    <label for="inputState">Seleciona la Categoria</label>
                    <select
                      v-if="editMode"
                      id="inputState"
                      v-model="selected"
                      class="form-control"
                    >
                      <option selected disabled>categoria...</option>

                      <option
                        :value="category.id"
                        v-for="(category, index) in categories"
                        :key="index"
                      >
                        {{ category.name }}</option
                      >
                    </select>
                    <select
                      v-else
                      id="inputState"
                      v-model="selected"
                      class="form-control"
                    >
                      <option selected disabled>categoria...</option>
                      <option
                        :value="category.id"
                        v-for="(category, index) in categories"
                        :key="index"
                      >
                        {{ category.name }}</option
                      >
                    </select>
                  </div>
                </div>
                <div class="col">
                  <label>Nombre del producto</label>
                  <input
                    type="text"
                    v-model="product.name"
                    class="form-control"
                    placeholder=""
                  />
                </div>
                <div class="col">
                  <label>Precio del producto</label>
                  <input
                    type="number"
                    v-model="product.price"
                    class="form-control"
                    placeholder=""
                  />
                </div>
              </div>
              <div class="row mb-4">
                <div class="col">
                  <div class="form-group">
                    <label for="">Descripcion corta</label>
                    <textarea
                      class="form-control"
                      name=""
                      v-model="product.short_description"
                      rows="5"
                    ></textarea>
                  </div>
                </div>
                <div class="col">
                  <div class="form-group">
                    <label for="">Descripcion</label>
                    <textarea
                      class="form-control"
                      name=""
                      v-model="product.description"
                      rows="5"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div class="row mb-4">
                <div class="col">
                  <div class="form-group">
                    <label for="imagen">Imagen del producto</label>
                    <input
                      class="form-control-file btn"
                      type="file"
                      @change="onImageChange"
                      name="image"
                      accept="image/png, image/jpeg"
                    />
                  </div>

                  <img
                    v-bind:src="imagePreview"
                    width="100"
                    height="100"
                    v-show="showPreview"
                  />
                </div>
              </div>

              <hr />
              <div class="row">
                <div class="col d-flex justify-content-end mt-3">
                  <router-link
                    class="btn btn-outline-danger mx-2"
                    v-bind:to="{ name: 'admin-products' }"
                    >Cancelar</router-link
                  >
                  <button
                    v-if="editMode"
                    class="btn btn-success"
                    @click.prevent="editProduct"
                  >
                    <i class="fas fa-save    "></i> Actualizar informacion
                  </button>
                  <button
                    v-else
                    class="btn btn-success"
                    @click.prevent="addNewProduct"
                  >
                    <i class="fas fa-save"></i> Guardar producto
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const token = localStorage.getItem("token");
import axios from "axios";
export default {
  data() {
    return {
      product: {},
      categories: [],
      selected: "",
      editMode: null,
      productId: "",
      image: "",
      imagePreview: null,
      showPreview: false
    };
  },
  mounted() {
    if (this.$route.params.product) {
      this.editMode = true;
      this.product = this.$route.params.product;
      this.productId = this.product.id;
      this.selected = this.product.category_id;
    } else {
      if (this.$route.name === "products-edit") {
        this.$router.push({ name: "products" });
      }
    }
    //  this.editMode = this.$route.params.product;
    this.getCategories();
  },
  methods: {
    onImageChange(e) {
      this.product.image = e.target.files[0];
      console.log(this.product.image);
      let reader = new FileReader();
      reader.addEventListener(
        "load",
        function() {
          this.showPreview = true;
          this.imagePreview = reader.result;
        }.bind(this),
        false
      );

      if (this.product.image) {
        if (/\.(jpe?g|png|gif)$/i.test(this.product.image.name)) {
          reader.readAsDataURL(this.product.image);
        }
      }
    },
    getCategories() {
      axios
        .get("/api/categories", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then(res => {
          console.log(res);
          this.categories = res.data.categories;
        })
        .catch(e => {
          console.log(e);
        });
    },
    addNewProduct() {
      // const headers = {
      //   "Content-Type": "multipart/form-data",
      //   Authorization: `Bearer ${token}`,
      //   _token: "{{ csrf_token() }}"
      // };

      let data = new FormData();
      data.append("name", this.product.name);
      data.append("short_description", this.product.short_description);
      data.append("description", this.product.description);
      data.append("category_id", this.selected);
      data.append("price", this.product.price);
      data.append("image", this.product.image);
      axios
        .post("/api/products", data, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then(res => {
          console.log(res);
          if (res.data.ok) {
            this.product = {};
            this.$router.push({ name: "admin-products" });
            this.editMode = false;
          }
        })
        .catch(e => {
          console.log(e);
        });
    },
    editProduct() {
      const params = { ...this.product, category_id: this.selected };
      axios
        .put(`/api/products/${this.productId}`, params, {
          headers: { Authorization: `Bearer ${token}` }
        })
        .then(res => {
          if (res.data.ok) {
            this.product = {};
            this.$router.push({ name: "admin-products" });
            this.editMode = false;
          }
        })
        .catch(e => {
          console.log(e);
        });
    }
  }
};
</script>

0. <style></style>
