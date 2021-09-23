<template>
  <div class="not-content p-5">
    <h3>No existen {{ title }}</h3>
  </div>
</template>

<script>
export default {
  props: ["title"]
};
</script>

<style lang="css" scoped>
.not-content {
  background-color: #dfdfdf;
  border-radius: 5px;
  height: auto;
}
h3 {
  color: #b7b7b7;
  font-size: 35px;
  font-weight: 600;
  text-align: center;
}
</style>
