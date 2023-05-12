<template>
  <div class="coolcard">
    <h2 class="name">Name: {{ name }}</h2>
    <p class="author">Author: {{ author }}</p>
    <img :src="getImage" alt="" />
    <p class="price">Price: ${{ price }}</p>
    <h3 class="description">{{ description }}</h3>

    <storeInventory
      v-for="item in store.cart"
      :name="item.name"
      :author="item.author"
      :image="item.image"
      :price="item.price"
      :description="item.description"
    />
    <button @click="remove(index)" class="remove">Remove</button>
  </div>
</template>

<script>
import themBooks from "./components/views/HomeView.vue";
import { store } from "../components/store.js";
components: {
  themBooks, store;
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
    author: String,
    image: String,
    price: Number,
    description: String,
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
  background-color: rgb(3, 83, 50);
  color: aliceblue;
  text-shadow: navy 2px;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  justify-content: space-evenly;
  font-size: 1rem;
  margin: 20px auto;
  border: 1px solid rgb(197, 233, 211);
  padding: 10px;
  scale: 30%;
  font-family: "Delicious Handrawn", cursive;
}

.remove {
  size: 40%;
  height: 1rem;
}
</style>
