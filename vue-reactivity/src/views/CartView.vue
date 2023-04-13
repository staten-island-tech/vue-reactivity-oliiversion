<script>
import ShoppingCart from "../components/shoppingCart.vue";
import { store } from "../components/store.js";
import storeInventory from "../components/storeInventory.vue";
export default {
  data() {
    return {
      store,
    };
  },
  components: { ShoppingCart },
};
</script>
<template>
  <div class="cartview">
    <h1 class="header2">Here is your shopping cart so far!</h1>
    <div class="cart">{{ store.cart.name }}</div>
    <ShoppingCart
      v-for="item in store.cart"
      :key="item.name"
      :name="item.name"
      :image="item.image"
      :price="item.price"
      :description="item.description"
      :condition="item.condition"
    />
  </div>
</template>

<style>
.header2 {
  background-color: aliceblue;
  text-align: center;
  font-size: 1.3rem;
  margin: 20px auto;
  border: 1px solid black;
  padding: 10px;
  scale: 70%;
  font-family: "Delicious Handrawn", cursive;
  width: 10rem;
  height: 10rem;
}
</style>
