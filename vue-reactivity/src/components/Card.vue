<template>
  <div class="cards">
    <h2 class="name">{{ name }}</h2>
    <img :src="image" alt="" />
    <p>${{ cost }} | Calories: {{ cals }}</p>
    <p class="desc">{{ description }}</p>
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
    cost: Number,
    cals: Number,
    image: String,
    description: String,
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
  background-color: rgb(125, 180, 125);
  text-align: center;
  padding: 15px;
  margin: auto;
  margin-bottom: 30px;
  border-radius: 50px;
  height: 370px;
  margin-left: 50px;
  margin-right: 50px;
}
img {
  width: 200px;
  border-radius: 50%;
}
h2 {
  font-size: 3vh;
}
.desc {
  margin-top: 10px;
}
.name {
  font-weight: bold;
}
</style>
