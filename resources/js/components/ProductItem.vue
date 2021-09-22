<template>
  <div
    class="product bg-gray mb-5 shadow"
    data-aos="fade-up"
    data-aos-duration="1000"
    data-aos-offset="300"
    data-aos-easing="ease-in-sine"
  >
    <h3 class="product-title">Precio</h3>

    <img
      class="product-img img-fluid shadow"
      :src="'/storage/' + product.image"
      alt="imagen del producto"
      width="176"
      height="88"
    />
    <div class="product-price">
      <div class="product-price-header">
        <div class="product-price-currency">$</div>
        <div class="product-price-value">{{ product.price }}</div>
      </div>
      <h4 class="product-title mt-5">{{ product.name }}</h4>

      <!-- <div class="product-price-footer">per day</div> -->
    </div>
    <p
      v-html="product.short_description.substring(0, 255) + '...'"
      class="product-text"
    ></p>
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

<style>
/*
* Product
*/
*,
*::before,
*::after {
  box-sizing: border-box;
}
a,
a:focus,
a:active,
a:hover {
  text-decoration: none;
}
a {
  transition: all 0.3s;
}
.product {
  position: relative;
  width: 335px;
  min-height: 600px;
  /* max-width: 100%; */
  margin-left: auto;
  margin-right: auto;
  background-color: #ffffff;
  box-shadow: 0 7px 20px rgba(0, 0, 0, 0.15);
  border-radius: 10px 100px 70px 70px;
  padding: 30px 10px 40px 20px;
}

@media (min-width: 576px) {
  .product {
    padding: 48px 10px 68px 36px;
  }
}

.product .button {
  margin-top: 20px;
}

.product .link-border {
  margin-top: 20px;
  margin-left: 10px;
  display: inline-block;
}

h3.product-title {
  color: #999999;
  font-weight: 700;
}
h4.product-title {
  color: #454545;
  font-weight: 700;
}
.product-img {
  position: absolute;
  top: -8px;
  right: -12px;
  margin: 0;
  box-shadow: 0 0 80px rgba(0, 0, 0, 0.2);
  border-radius: 10em;
  max-width: 50%;
}

@media (min-width: 576px) {
  .product-img {
    max-width: 100%;
  }
}

.product-price {
  display: inline-block;
  color: #2665d6;
}

.product-price-header {
  margin-top: 23px;
  display: flex;
  align-items: flex-start;
}

.product-price-currency {
  font-size: 20px;
  font-weight: 500;
  padding-top: 6px;
  padding-right: 2px;
}

.product-price-value {
  font-size: 40px;
  font-weight: 300;
  line-height: 1;
}

.product-price-footer {
  text-transform: uppercase;
  text-align: right;
  line-height: 1.1;
}

.product-text {
  margin-top: 25px;
  min-height: 150px;
}
/* .button-primary,
.button-primary:focus {
  color: #ffffff;
  background-color: #71b85f;
  border-color: #71b85f;
} */
.button {
  position: relative;
  overflow: hidden;
  display: inline-block;
  padding: 22px 60px;
  font-size: 14px;
  line-height: 1.25;
  border: 0;
  font-weight: 700;
  text-transform: uppercase;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: center;
  cursor: pointer;
  vertical-align: middle;
  user-select: none;
  transition: 250ms all ease-in-out;
  border-radius: 10em;
  box-shadow: inset 0px -4px 2px rgba(0, 0, 0, 0.25);
}
/* .button-primary,
.button-primary:focus {
  color: #ffffff;
  background-color: #71b85f;
  border-color: #71b85f;
} */

.btn-primary:hover,
.btn-primary:active,
.btn-primary.active {
  color: #7c7a7a;
  background-color: #2c343b;
  border-color: #2c343b;
}
.product .button {
  margin-top: 20px;
}
a,
a:focus,
a:active {
  color: #000000;
}
</style>
