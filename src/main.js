import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router.js";
import "@/assets/styles/tailwind.css";
import store from "./store/index";
import Notifications from '@kyvg/vue3-notification'

const app = createApp(App);

app.use(router);
app.use(store);
app.use(Notifications)
app.mount("#app");
