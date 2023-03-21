<template>
  <div class="cart">
    <h1>hola amigos</h1>
    <input type="text" placeholder="edit me" v-model="message" />
    <p>{{ message }}</p>
  </div>
</template>

<script>
import button from "../components/button.vue";
export default {
  name: "cart",
  components: {},
  data() {
    return {
      message: "",
    };
  },
};
</script>

<style>
@media (min-width: 1024px) {
  .cart {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
