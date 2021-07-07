<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-12">
        <div class="card shadow ">
          <div class="card-header bg-secondary">
            <h6 v-if="editMode" class="m-2 font-weight-bold text-white">
              Editando producto:
              {{ product.name }}
            </h6>
            <h6 v-else class="m-2 font-weight-bold text-white-50">
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
                      id="inputState"
                      v-model="selected"
                      class="form-select"
                      :class="{
                        'is-invalid': !selected,
                        '': selected
                      }"
                      required
                    >
                      <option selected disabled value=""
                        >Selecciona una categoría...</option
                      >
                      <option
                        :value="category.id"
                        v-for="(category, index) in categories"
                        :key="index"
                      >
                        {{ category.name }}</option
                      >
                    </select>
                    <div class="invalid-feedback">Selecciona una categoria</div>
                  </div>
                </div>
                <div class="col">
                  <label>Nombre del producto</label>
                  <input
                    type="text"
                    v-model="product.name"
                    class="form-control"
                    :class="{
                      'is-invalid': error_name,
                      '': !error_name
                    }"
                    required
                  />
                  <div class="invalid-feedback">{{ error_name }}</div>
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
                    <VueTrix
                      placeholder="Escriba la descripción corta"
                      v-model="product.short_description"
                      :class="{
                        'is-invalid': error_short_description,
                        '': !error_short_description
                      }"
                    ></VueTrix>
                    <div class="invalid-feedback">
                      {{ error_short_description }}
                    </div>
                    <!-- <textarea
                      class="form-control"
                      name=""
                      v-model="product.short_description"
                      rows="5"
                      placeholder="Limite de caracteres máximo 255"
                      maxlength="255"
                    ></textarea> -->
                  </div>
                </div>
                <div class="col">
                  <div class="form-group">
                    <label for="">Descripcion</label>
                    <VueTrix
                      :class="{
                        'is-invalid': error_description,
                        '': !error_description
                      }"
                      v-model="product.description"
                    ></VueTrix>
                    <div class="invalid-feedback">{{ error_description }}</div>
                    <!-- <textarea
                      class="form-control"
                      name=""
                      v-model="product.description"
                      rows="5"
                    ></textarea> -->
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
                      :class="{
                        'is-invalid': error_image,
                        '': !error_image
                      }"
                    />
                    <div class="invalid-feedback">Selecciona una imagen</div>
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
import VueTrix from "vue-trix";
export default {
  components: { VueTrix },
  data() {
    return {
      product: {
        name: "",
        category_id: "",
        short_description: "",
        description: "",
        price: "0",
        image: ""
      },
      categories: [],
      selected: "",
      editMode: null,
      productId: "",
      image: "",
      imagePreview: null,
      showPreview: false,
      error_name: null,
      error_description: null,
      error_short_description: null,
      error_image: null
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
      this.image = e.target.files[0];
      // this.product.image = e.target.files[0];
      // console.log(this.product.image);
      let reader = new FileReader();
      reader.addEventListener(
        "load",
        function() {
          this.showPreview = true;
          this.imagePreview = reader.result;
        }.bind(this),
        false
      );

      if (this.image) {
        if (/\.(jpe?g|png|gif)$/i.test(this.image.name)) {
          reader.readAsDataURL(this.image);
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
      const config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      };

      const data = new FormData();
      data.append("name", this.product.name);
      data.append("short_description", this.product.short_description);
      data.append("description", this.product.description);
      data.append("category_id", this.selected);
      data.append("price", this.product.price);
      data.append("image", this.image);
      axios
        .post("/api/products", data, config)
        .then(res => {
          if (res.data.ok) {
            this.product = {};
            this.$router.push({ name: "admin-products" });
            this.editMode = false;
          }
        })
        .catch(e => {
          this.error_name = e.response.data.errors.name[0];
          this.error_description = e.response.data.errors.description[0];
          this.error_short_description =
            e.response.data.errors.short_description[0];
          this.error_image = e.response.data.errors.image[0];
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
