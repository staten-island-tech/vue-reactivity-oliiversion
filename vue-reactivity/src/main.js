import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);

const themBooks = ["The Great Gatsby"];

app.use(router);

app.mount("#app");
