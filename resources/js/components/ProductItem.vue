<template>
  <div class="product bg-gray mb-5 shadow">
    <h3 class="product-title">Precio</h3>

    <img
      class="product-img img-fluid shadow"
      :src="'/storage/' + product.image"
      alt=""
      width="176"
      height="88"
    />
    <div class="product-price">
      <div class="product-price-header">
        <div class="product-price-currency">$</div>
        <div class="product-price-value">{{ product.price }}</div>
      </div>
      <h3 class="product-title mt-5">{{ product.name }}</h3>

      <!-- <div class="product-price-footer">per day</div> -->
    </div>
    <p class="product-text">{{ product.short_description }}.</p>
    <router-link
      class="button btn-primary"
      :to="{ name: 'client-product-details', params: { id: product.id } }"
      >Ver detalles</router-link
    >
  </div>
</template>

<script>
export default {
  props: ["product"]
};
</script>

<style></style>
