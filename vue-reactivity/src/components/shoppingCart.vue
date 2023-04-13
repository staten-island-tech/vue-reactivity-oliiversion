<template>
  <div class="coolcard">
    <h2 class="name">Name: {{ name }}</h2>
    <p class="price">Price: ${{ price }}</p>
    <h3 class="description">{{ description }}</h3>
    <p class="condition">Condition: {{ condition }}</p>
    <img :src="getImage" alt="" />

    <storeInventory
      v-for="item in store.cart"
      :name="item.name"
      :image="item.image"
      :price="item.price"
      :condition="item.condition"
    />
    <button @click="remove(index)" class="remove">Remove</button>
  </div>
</template>

<script>
import storeInventory from "./storeInventory.vue";
import { store } from "../components/store.js";
components: {
  storeInventory, store;
}

export default {
  data() {
    return {
      store,
    };
  },

  computed: {
    getImage: function () {
      return this.image;
    },
  },

  props: {
    name: String,
    price: Number,
    description: String,
    image: String,
    condition: String,
  },

  methods: {
    remove(index) {
      store.cart.splice(index, 1);
    },
  },
};
</script>

<style>
.coolcard {
  background-color: aliceblue;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  justify-content: space-evenly;
  font-size: 1rem;
  margin: 20px auto;
  border: 1px solid black;
  padding: 10px;
  scale: 30%;
  font-family: "Delicious Handrawn", cursive;
}

.remove {
  size: 40%;
  height: 1rem;
}
</style>
