<template>
  <div class="about">
    <h1>hola amigos</h1>
    <input type="text" placeholder="edit me" v-model="message" />
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: "about",
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
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
