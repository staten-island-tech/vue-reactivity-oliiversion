<script setup>
import TheWelcome from "../components/TheWelcome.vue";
</script>

<template>
  <div class="Home">
    <h1>{{ sillyquote }}</h1>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      sillyquote: "them silly little kids",
    };
  },
};
</script>

<style>
h1 {
  color: rgb(255, 0, 0);
  height: 50px;
}
</style>
