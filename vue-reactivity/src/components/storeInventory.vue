<template>
  <div class="coolcard">
    <h2 class="name">{{ name }}</h2>
    <p class="price">${{ price }}</p>
    <img :src="getImage" alt="" />
    <h3 class="description">{{ description }}</h3>
    <p class="condition">Condition: {{ condition }}</p>
    <button @click="buy" class="buy">Add to Cart</button>
  </div>
</template>

<script>
import { store } from "./store";
export default {
  name: "storeInventory",
  props: {
    name: String,
    price: Number,
    description: String,
    image: String,
    condition: String,
  },
  computed: {
    getImage: function () {
      return this.image;
    },
  },

  methods: {
    buy: function () {
      store.cart.push({
        name: this.name,
        price: this.price,
        condition: this.condition,
        image: this.image,
      });
    },
  },
};
</script>

<style></style>
