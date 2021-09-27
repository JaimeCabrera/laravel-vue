<template>
  <div class="bg-transparent">
    <div class="slider-contact pt-5">
      <div class="jumbotron jumbotron-fluid bg-transparent">
        <div class="container"></div>
      </div>
    </div>
    <contact-component></contact-component>
  </div>
</template>

<script>
import ContactComponent from "../../components/client/ContactComponent.vue";
export default {
  components: { ContactComponent }
};
</script>

<style>
.slider-contact {
  height: 35vh;
  background-size: cover;
  background-image: url("/img/contact.jpeg");
  background-repeat: no-repeat;
  background-attachment: fixed;
}
</style>
