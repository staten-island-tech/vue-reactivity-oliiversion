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
  <form @submit.prevent="addTodo">
    <input v-model="review" />
    <button>Add Review</button>
  </form>
  <ul>
    <!--     <li v-for="review in review" :key="revew.id">
      {{ review.text }}
      <button @click="removeReview(review)">X</button>
    </li> -->
  </ul>
</template>

<script>
var themBooks = new Vue({
  el: "#themBooks",
  data: {},
});

let id = 0;
export default {
  name: "Home",
  components: {},
  data() {
    return {
      sillyquote: "them silly little kids",
      silly: true,
      sillythings: ["loser", "winner", "blue"],
      inside: false,
      newReview: "",
      review: [
        { id: id++, text: "Amazing!" },
        { id: id++, text: "Okay." },
        { id: id++, text: "Pretty Good." },
      ],
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
    addReview() {
      this.review.push({ id: id++, text: this.newReview });
      this.newReview = "";
    },
    removeReview(review) {
      this.review = this.review.filter((t) => t !== review);
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
