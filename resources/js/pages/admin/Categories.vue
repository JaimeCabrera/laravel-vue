<template>
  <div class="container mt-5">
    <!-- Page Heading -->
    <div class="d-sm-flex align-items-center justify-content-between mb-2">
      <h5 class="mb-0 text-gray-600">Modulo de categorias</h5>
      <button
        @click="showModal = true"
        class="d-none d-sm-inline-block btn btn-primary shadow text-white"
      >
        <i class="fas fa-plus fa-sm text-white-50 mx-1"></i> Agregar Nueva
        Categoria
      </button>
    </div>
    <div class="row mt-5">
      <div
        class="col-3 p-1"
        v-for="(category, index) in categories"
        :key="index"
      >
        <div class="card shadow">
          <img class="card-img-top" src="" alt="" />
          <div class="card-body">
            <h6 class="card-title text-center">Nombre: {{ category.name }}</h6>
            <div class="d-flex justify-content-center">
              <button class="btn btn-success" @click="edit(category.id)">
                <i class="fas fa-edit text-white-50"></i>
              </button>
              <button
                class="btn btn-danger mx-1"
                @click="deleteCategory(category.id)"
              >
                <!-- <i class="fas fa-trash"></i> -->
                <i class="far fa-trash-alt text-white-50"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- modal -->
    <div v-if="showModal">
      <transition name="modal">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header bg-dark text-white">
                  <h5 v-if="editModal">Editando catagoria</h5>
                  <h6 v-else class="text-sm-center bg-dark text-white">
                    Crear Categoria
                  </h6>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true" @click="closeModal">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <form action="">
                    <div class="form-group">
                      <label for="" class="font-weight-bold"
                        >Nombre de la categoria:</label
                      >
                      <input
                        type="text"
                        class="form-control"
                        v-bind:class="{ 'is-invalid': errors }"
                        v-model="category.name"
                        placeholder=""
                      />
                      <div class="invalid-feedback">
                        {{ errors }}
                      </div>
                    </div>
                  </form>
                </div>
                <div class="modal-footer">
                  <a class="btn btn-outline-secondary" @click="closeModal">
                    Cancelar
                  </a>
                  <a
                    v-if="editModal"
                    @click="editCategory"
                    class="btn btn-primary"
                  >
                    <i class="fas fa-save"></i> Guardar Cambios
                  </a>
                  <a v-else @click="addNewCategory" class="btn btn-success">
                    <i class="fas fa-save"></i> Agregar Categoria
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
const token = localStorage.getItem("token");
export default {
  data() {
    return {
      category: {},
      categories: [],
      errors: null,
      showModal: false,
      editModal: false,
      editId: null
    };
  },
  mounted() {
    this.getAllCategories();
  },
  methods: {
    async getAllCategories() {
      await axios
        .get("/api/categories", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then(res => {
          this.categories = res.data.categories;
        });
    },
    addNewCategory() {
      axios
        .post("/api/categories", this.category, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then(res => {
          if (res.data.ok) {
            this.categories.push(res.data.category);
            this.showModal = false;
            this.category = {};
          }
        })
        .catch(e => {
          this.errors = e.response.data.errors.name[0];
        });
      // console.log("click", params);
    },
    editCategory() {
      axios
        .put(`/api/categories/${this.editId}`, this.category, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then(res => {
          if (res.data.ok) {
            const { category } = res.data;
            this.categories = this.categories.map(cat =>
              cat.id === this.editId ? (cat = category) : cat
            );
          }
          this.editId = null;
          this.editModal = false;
          this.category = {};
          this.showModal = false;
        })
        .catch(e => {
          this.errors = e.response.data.errors.name[0];
        });
    },
    deleteCategory(id) {
      // console.log("click", id);
      axios
        .delete(`/api/categories/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then(res => {
          if (res.data.ok) {
            this.categories = this.categories.filter(cat => cat.id !== id);
          }
        })
        .catch(e => {
          console.log(e);
        });
    },
    edit(id) {
      axios
        .get(`/api/categories/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then(res => {
          if (res.data.ok) {
            this.editId = id;
            this.showModal = true;
            this.editModal = true;
            this.category = res.data.category;
          }
        });
    },
    closeModal() {
      this.category = {};
      this.showModal = false;
      this.editModal = false;
    }
  }
};
</script>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}
.modal-wrapper {
  display: table-cell;
  vertical-align: initial;
}
</style>
