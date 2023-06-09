import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { themBooks } from "./themBooks";
console.log(themBooks);

import "./assets/main.css";

const app = createApp(App);

app.use(router);

app.mount("#app");