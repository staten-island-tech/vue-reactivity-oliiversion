<script>
export default {
  data() {
    return {};
  },
  components: {},
};
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header class="header">CSGO SKINS</header>
  <RouterLink class="router" id="chesey" to="/">Shop</RouterLink>
  <RouterLink class="router" id="chese" to="/cart">View Cart</RouterLink>
  <RouterView />
</template>

<style>
.body {
}
.header {
  text-align: center;
  font-size: 40px;
  left: 100px;
  padding: 40px;
  border: 2px solid black;
  background-color: aliceblue;
  font-family: "Delicious Handrawn", cursive;
}

#chesey {
  border: 2px solid black;
  left: 200px;
  width: 6rem;
  padding: 10px;
  text-align: center;
  max-height: 4rem;
  font-size: 2rem;
  justify-content: space-evenly;
  background-color: aliceblue;
  font-family: "Delicious Handrawn", cursive;
}
#chese {
  border: 2px solid black;
  justify-content: space-evenly;
  padding: 10px;
  width: 6rem;
  max-height: 4rem;
  text-align: center;
  background-color: aliceblue;
  font-family: "Delicious Handrawn", cursive;
}
</style>
