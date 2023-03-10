<script setup>
import TheWelcome from "../components/TheWelcome.vue";
</script>

<template>
  <div class="Home">
    <h1 v-if="silly">{{ sillyquote }}</h1>
    <h1 v-else>not silly.</h1>
    <ul>
      <li v-for="thing in sillythings" :key="thing">{{ thing }}</li>
    </ul>
    <button v-on:click="authState" v-if="inside">Inside!</button>
    <button @click="authState" v-else>Outside!</button>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      sillyquote: "them silly little kids",
      silly: true,
      sillythings: ["loser", "winner", "blue"],
      inside: false,
    };
  },
  methods: {
    authState: function () {
      if (this.inside === false) {
        this.inside = true;
      } else {
        this.inside = false;
      }
    },
  },
};
</script>

<style>
h1 {
  color: rgb(255, 0, 0);
  height: 50px;
}
</style>
