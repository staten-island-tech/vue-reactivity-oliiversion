<template>
  <div class="cards">
    <h2 class="name">{{ name }}</h2>
    <img :src="image" alt="" />
    <p>${{ cost }} | Author: {{ author }}</p>
    <p class="desc">{{ blurb }}</p>
    <AddtoCartButton @click="test"
      >Add {{ name }} to Cart ${{ cost }}</AddtoCartButton
    >
  </div>
</template>

<script>
import AddtoCartButton from "./AddtoCart.vue";
import { store } from "./store.js";

export default {
  name: "Card",
  props: {
    name: String,
    author: String,
    cost: Number,
    image: String,
    blurb: String,
  },
  data() {
    return {
      store,
    };
  },
  components: {
    AddtoCartButton,
  },
  methods: {
    test() {
      this.store.cart.push({
        name: this.name,
        cost: this.cost,
        image: this.image,
      });
      console.log(this.store.cart);
    },
  },
};
</script>

<style scoped>
.cards {
  width: 350px;
  flex-wrap: wrap;
  background-color: rgb(125, 180, 125);
  text-align: center;
  padding: 15px;
  margin: auto;
  margin-bottom: 50px;
  border-radius: 10px;
  height: 770px;
  margin-left: 50px;
  margin-right: 50px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
img {
  width: 200px;
  border-radius: 10%;
}
h2 {
  font-size: 3vh;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
.desc {
  margin-top: 10px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
.name {
  font-weight: bold;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
</style>
