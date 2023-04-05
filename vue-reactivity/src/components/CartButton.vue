<template>
  <button><slot></slot></button>
</template>

<script>
export default {
  name: "CartButton",
  /*   data() {
    return {
      total: 0,
    };
  },
  methods: {
    cartCount() {
      this.total++;
    },
  }, */
};
</script>

<style scoped>
button {
  width: 60px;
  font-size: 15px;
  border: 10px white;
  border-radius: 50%;
  background-color: rgb(67, 103, 67);
  color: white;
  height: 50px;
  margin-top: 10px;
  transition: 0.5s;
  margin-bottom: 20px;
}
button:hover {
  transform: scale(1.2);
}
button:active {
  transform: scale(0.9);
}
</style>
