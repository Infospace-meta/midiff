import { createApp } from "vue";
import router from "./router";
import VueSplide from '@splidejs/vue-splide';
import App from "./App.vue";

/**styling */
// import "./style.css";
import "./assets/tailwind.css"; //tailwind
import '@splidejs/vue-splide/css';
//import '@splidejs/vue-splide/css/core';


const app = createApp(App);
app.use(router);
app.use(VueSplide);
app.mount("#app");
