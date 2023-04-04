<script>
import Card from "../components/Card.vue";
import AddtoCartButton from "../components/AddtoCart.vue";
import CartButton from "../components/CartButton.vue";
import Cart from "../components/Cart.vue";
import { store } from "../components/store.js";

export default {
  name: "Menu",
  components: {
    Card,
    AddtoCartButton,
    CartButton,
    Cart,
  },
  methods: {},
  data() {
    return {
      store,
      cartdiv: false,
      carts: [],
      foods: [
        {
          name: "Shack Burger",
          cost: 6.89,
          cals: 500,
          image:
            "https://d2luv1saso99wi.cloudfront.net/2022_Digital-Menu_Burgers_ShackBurger_1500x920_lg1663589553.jpeg",
          description:
            "Angus beef cheeseburger with lettuce, tomato, and ShackSauce on a toasted potato bun",
        },
        {
          name: "Shroom Burger",
          cost: 8.69,
          cals: 510,
          image:
            "https://d2luv1saso99wi.cloudfront.net/2022_Digital-Menu_Burgers_ShroomBurger_1500x920_lg1663589675.jpeg",
          description:
            "Crisp-fried portobello mushroom filled with melted muenster and cheddar cheeses, with lettuce, and tomato on a toasted potato bun",
        },
        {
          name: "Smoke Shack",
          cost: 8.49,
          cals: 570,
          image:
            "https://d2luv1saso99wi.cloudfront.net/2022_Digital-Menu_Burgers_SmokeShack_1500x920_lg1663589622.jpeg",
          description:
            "Angus beef cheeseburger with applewood-smoked bacon, chopped cherry peppers, and ShackSauce on a toasted potato bun",
        },
        {
          name: "Chicken Shack",
          cost: 8.29,
          cals: 550,
          image:
            "https://d2luv1saso99wi.cloudfront.net/2022_Digital-Menu_Chicken_ChickenShack_1500x920_lg1663591157.jpeg",
          description:
            "Crispy, white-meat chicken breast over lettuce, pickles, and buttermilk herb mayo on a toasted potato bun",
        },
        {
          name: "Shake Stack",
          cost: 11.89,
          cals: 770,
          image:
            "https://d2luv1saso99wi.cloudfront.net/2022_Digital-Menu_Burgers_ShackStack_1500x920_lg1663589714.jpeg",
          description:
            "Angus beef cheeseburger topped with a 'Shroom Burger with lettuce, tomato, and ShackSauce on a toasted potato bun",
        },
        {
          name: "Fries",
          cost: 3.99,
          cals: 470,
          image:
            "https://d2luv1saso99wi.cloudfront.net/2022_Digital-Menu_CrinkleCutFries_Fries_1500x920_lg1663591933.jpeg",
          description: "Crispy crinkle cut fries (contains soy)",
        },
        {
          name: "Cheese Fries",
          cost: 4.99,
          cals: 710,
          image:
            "https://d2luv1saso99wi.cloudfront.net/2022_Digital-Menu_CrinkleCutFries_CheeseFries_1500x920_lg1663591946.jpeg",
          description:
            "Crispy crinkle cuts topped with our cheese sauce (contains soy and milk)",
        },
        {
          name: "Bacon Cheese Fries",
          cost: 6.49,
          cals: 840,
          image:
            "https://d2luv1saso99wi.cloudfront.net/2022_Digital-Menu_CrinkleCutFries_BaconCheeseFries_1500x920_lg1663591959.jpeg",
          description:
            "Crispy crinkle cuts topped with our cheese sauce and applewood-smoked bacon (contains soy and milk)",
        },
      ],
    };
  },
};
</script>

<template>
  <main>
    <div class="cartnav">
      <CartButton class="cartbutton" @click="cartdiv = !cartdiv"
        >Cart</CartButton
      >
    </div>
    <div v-show="cartdiv" class="cartdiv">
      <div class="cartitemsdiv">
        <h3>Items:</h3>
        <Cart
          v-for="item in store.cart"
          :key="item.name"
          :name="item.name"
          :cost="item.cost"
          :image="item.image"
        />
      </div>
    </div>
    <div class="menu">
      <Card
        v-for="food in foods"
        :key="food.name"
        :name="food.name"
        :cost="food.cost"
        :image="food.image"
        :description="food.description"
        :cals="food.cals"
      />
    </div>
  </main>
</template>

<style scoped>
.menu,
.cartdiv,
.cartnav {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
.cartdiv {
  width: 700px;
  background-color: rgb(125, 180, 125);
  text-align: center;
  padding: 15px;
  margin: auto;
  margin-bottom: 30px;
  border-radius: 50px;
}
* {
  color: black;
}
h3 {
  font-size: 2.5vh;
  font-weight: bold;
}
</style>
