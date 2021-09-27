<template>
  <div>
    <slider-ccomponent></slider-ccomponent>

    <services-component></services-component>

    <products-component></products-component>

    <contact-component></contact-component>
  </div>
</template>

<script>
import ContactComponent from "../../components/client/ContactComponent.vue";
import FooterComponent from "../../components/client/FooterComponent.vue";
import ProductsComponent from "../../components/client/ProductsComponent.vue";
import ServicesComponent from "../../components/client/ServicesComponent.vue";
import SliderCcomponent from "../../components/client/SliderCcomponent.vue";
import NotContent from "../../components/NotContent.vue";
export default {
  components: {
    SliderCcomponent,
    ServicesComponent,
    ProductsComponent,
    ContactComponent,
    FooterComponent,
    NotContent
  },
  mounted() {
    // console.log("items del index");
  }
};
</script>

<style>
.bg-green {
  /* background-color:  #71b85f; */
  background-color: #2665d6;
}
</style>
