<template>
  <div>
    <div v-show="cartitems" class="cartitems">
      <h2 class="name">{{ name }}</h2>
      <img :src="image" alt="" />
      <p>{{ cost }}</p>
      <removefromCartButton @click="cartitems = !cartitems">
        Remove {{ name }} from Cart ${{ cost }}
      </removefromCartButton>
    </div>
  </div>
</template>

<script>
import removefromCartButton from "./RemovefromCart.vue";

export default {
  name: "Cart",
  props: {
    name: String,
    cost: Number,
    image: String,
  },
  data() {
    return {
      totalofitem: 1,
      cartitems: true,
    };
  },
  components: {
    removefromCartButton,
  },
  methods: {},
};
</script>

<style scoped>
.cartitems {
  background-color: rgb(255, 255, 255);
  text-align: center;
  padding: 15px;
  margin: auto;
  margin-bottom: 30px;
  border-radius: 50px;
  width: 650px;
  margin-top: 20px;
}
img {
  width: 200px;
  border-radius: 50%;
}
h2 {
  font-size: 2vh;
}
.name {
  font-weight: bold;
}
</style>
